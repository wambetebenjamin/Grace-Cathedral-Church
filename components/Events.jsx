'use client';

import { useEffect, useState } from 'react';
import fallbackData from '@/data/events.json';
import { waLink } from '@/lib/site';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { ArrowRightIcon, ClockIcon, MapPinIcon } from './Icons';

function dateParts(iso) {
  const d = new Date(`${iso}T12:00:00+03:00`);
  return {
    day: d.toLocaleDateString('en-KE', { day: 'numeric' }),
    month: d.toLocaleDateString('en-KE', { month: 'short' }),
    weekday: d.toLocaleDateString('en-KE', { weekday: 'long' }),
  };
}

function EventSkeleton() {
  return (
    <div className="flex gap-6">
      <div className="skeleton h-16 w-16 shrink-0 rounded-lg" />
      <div className="card flex-1 space-y-3 p-6">
        <div className="skeleton h-4 w-32 rounded-full" />
        <div className="skeleton h-6 w-2/3 rounded-lg" />
        <div className="skeleton h-4 w-1/2 rounded-lg" />
        <div className="skeleton h-10 w-36 rounded-full" />
      </div>
    </div>
  );
}

export default function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/events')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('bad status'))))
      .then((data) => {
        if (!cancelled && Array.isArray(data?.events)) {
          setEvents(data.events);
        }
      })
      .catch(() => {
        if (!cancelled) setEvents(fallbackData.events);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const list = events ?? fallbackData.events;
  const loading = events === null;

  return (
    <section id="events" className="bg-white py-24 lg:py-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="Mark Your Calendar"
          title="Upcoming Events"
          subtitle="There is always something happening in the house. come and be part of it."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline spine */}
          <div
            aria-hidden
            className="absolute bottom-6 left-[31px] top-6 w-px bg-zinc-400"
          />

          <ol className="space-y-8">
            {loading
              ? [0, 1, 2].map((i) => <EventSkeleton key={i} />)
              : list.map((event, i) => {
                  const { day, month, weekday } = dateParts(event.date);
                  return (
                    <li key={event.id}>
                      <FadeIn delay={i * 100}>
                        <div className="relative flex gap-5 sm:gap-7">
                          {/* Date badge */}
                          <div className="relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-zinc-800 shadow-sm ring-2 ring-zinc-400/80">
                            <span className="font-sans text-2xl font-black leading-none text-zinc-400">
                              {day}
                            </span>
                            <span className="mt-0.5 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-200">
                              {month}
                            </span>
                          </div>

                          {/* Card */}
                          <article className="card group flex-1 p-6 transition-all duration-300 sm:p-7">
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="rounded-full bg-zinc-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-700 ring-1 ring-zinc-100">
                                {event.tag}
                              </span>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                {weekday}
                              </span>
                            </div>

                            <h3 className="mt-3 font-sans text-xl font-bold leading-snug text-zinc-900 sm:text-2xl">
                              {event.name}
                            </h3>

                            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-500">
                              <span className="inline-flex items-center gap-1.5">
                                <ClockIcon className="h-4 w-4 text-zinc-600" />
                                {event.time}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <MapPinIcon className="h-4 w-4 text-zinc-600" />
                                {event.location}
                              </span>
                            </div>

                            <p className="mt-3.5 text-sm leading-relaxed text-slate-500">
                              {event.description}
                            </p>

                            <div className="mt-5">
                              <a
                                href={waLink(
                                  `Hello! I would like to register for "${event.name}" at Grace Cathedral Church.`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline-zinc"
                              >
                                Register
                                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </a>
                            </div>
                          </article>
                        </div>
                      </FadeIn>
                    </li>
                  );
                })}
          </ol>
        </div>
      </div>
    </section>
  );
}
