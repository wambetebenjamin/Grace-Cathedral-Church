'use client';

import { useEffect, useState } from 'react';
import fallbackData from '@/data/sermons.json';
import { site } from '@/lib/site';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import {
  ArrowRightIcon,
  CalendarIcon,
  HeadphonesIcon,
  PlayIcon,
  UsersIcon,
} from './Icons';

function formatDate(iso) {
  try {
    return new Date(`${iso}T12:00:00+03:00`).toLocaleDateString('en-KE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

function SermonSkeleton() {
  return (
    <div className="card overflow-hidden">
      <div className="skeleton aspect-video w-full" />
      <div className="space-y-3 p-6">
        <div className="skeleton h-4 w-24 rounded-full" />
        <div className="skeleton h-6 w-3/4 rounded-lg" />
        <div className="skeleton h-4 w-1/2 rounded-lg" />
        <div className="flex gap-3 pt-3">
          <div className="skeleton h-10 flex-1 rounded-full" />
          <div className="skeleton h-10 flex-1 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function Sermons() {
  const [sermons, setSermons] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/sermons?limit=3')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('bad status'))))
      .then((data) => {
        if (!cancelled && Array.isArray(data?.sermons) && data.sermons.length > 0) {
          setSermons(data.sermons);
        }
      })
      .catch(() => {
        /* fall back to bundled data below */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const list = sermons ?? fallbackData.sermons;
  const loading = sermons === null;

  return (
    <section id="sermons" className="bg-[#faf8f4] py-24 lg:py-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="Grow With Us"
          title="Latest Sermons"
          subtitle="Missed a Sunday? Catch up on the Word. watch, listen and share with a friend who needs it."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? [0, 1, 2].map((i) => <SermonSkeleton key={i} />)
            : list.slice(0, 3).map((sermon, i) => (
                <FadeIn key={sermon.id} delay={i * 120} className="h-full">
                  <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden">
                      <img
                        src={sermon.thumbnail}
                        alt={`${sermon.title}. sermon thumbnail`}
                        loading="lazy"
                        className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-stone-900/60"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-orange-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-stone-900 shadow">
                        {sermon.series}
                      </span>
                      <span className="absolute bottom-4 right-4 rounded-full bg-stone-950/70 px-3 py-1 text-[11px] font-bold text-stone-100 backdrop-blur">
                        {sermon.duration}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-sans text-xl font-bold leading-snug text-stone-900 transition-colors group-hover:text-stone-700">
                        {sermon.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] italic text-slate-400">
                        {sermon.scripture}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] font-semibold text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <UsersIcon className="h-4 w-4 text-orange-600" />
                          {sermon.pastor}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarIcon className="h-4 w-4 text-orange-600" />
                          {formatDate(sermon.date)}
                        </span>
                      </div>

                      <div className="mt-6 flex flex-1 items-end gap-3 pt-2">
                        <a
                          href={sermon.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-stone flex-1"
                          aria-label={`Watch ${sermon.title}`}
                        >
                          <PlayIcon className="h-4 w-4" />
                          Watch
                        </a>
                        <a
                          href={sermon.pdf || '/resources/weekly-bible-study-guide.pdf'}
                          download
                          className="btn-outline-stone w-full"
                          aria-label={`Download notes for ${sermon.title}`}
                        >
                          PDF notes
                        </a>
                        <a
                          href={sermon.audio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-stone flex-1"
                          aria-label={`Listen to ${sermon.title}`}
                        >
                          <HeadphonesIcon className="h-4 w-4" />
                          Listen
                        </a>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
        </div>

        <FadeIn delay={180}>
          <p className="mt-12 text-center">
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-stone-800 underline decoration-orange-400 decoration-2 underline-offset-8 transition hover:text-stone-600"
            >
              Browse the full sermon archive on YouTube
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
