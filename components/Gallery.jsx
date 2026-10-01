'use client';

import { useCallback, useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ZoomInIcon,
} from './Icons';

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85', caption: 'Sunday Worship', ratio: 'aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=85', caption: "Men's Fellowship", ratio: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=85', caption: 'The Cathedral Choir', ratio: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1490730141103-6cac27c604b4?auto=format&fit=crop&w=1200&q=85', caption: 'The Word', ratio: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85', caption: 'Grace Kids', ratio: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=85', caption: 'Baptism Sundays', ratio: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1200&q=85', caption: 'Youth Ignite', ratio: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85', caption: 'Our House', ratio: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85', caption: 'Women of Grace', ratio: 'aspect-square' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85', caption: 'Feed the City', ratio: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=85', caption: 'At The Table', ratio: 'aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85', caption: 'Night of Worship', ratio: 'aspect-[3/4]' },
];

export default function Gallery() {
  const [index, setIndex] = useState(null); // number | null
  const open = index !== null;

  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % IMAGES.length)),
    []
  );

  // Keyboard navigation + scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, prev, next]);

  return (
    <section id="gallery" className="bg-[#faf8f4] py-24 lg:py-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="Life at Grace"
          title="Gallery"
          subtitle="Moments of worship, family and joy from our house to yours. tap any photo to view it."
        />

        <FadeIn>
          <div className="masonry columns-2 sm:columns-3 lg:columns-4">
            {IMAGES.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View photo: ${img.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-blue-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  decoding="async"
                  className={`${img.ratio} w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-blue-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ZoomInIcon className="h-8 w-8 text-sky-300" />
                  <span className="font-sans text-sm font-bold text-white">
                    {img.caption}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ── Lightbox ────────────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${IMAGES[index].caption}`}
        >
          <div
            className="absolute inset-0 bg-blue-950/95 backdrop-blur-sm"
            onClick={() => setIndex(null)}
          />

          <button
            type="button"
            onClick={() => setIndex(null)}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-sky-400 hover:text-blue-900 sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-sky-400 hover:text-blue-900 sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <figure className="relative max-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES[index].src}
              alt={IMAGES[index].caption}
              className="max-h-[76vh] w-auto max-w-full rounded-xl shadow-2xl ring-1 ring-white/10"
            />
            <figcaption className="mt-4 text-center">
              <span className="font-sans text-lg font-bold text-white">
                {IMAGES[index].caption}
              </span>
              <span className="ml-3 text-xs font-bold tracking-widest text-blue-200/60">
                {index + 1} / {IMAGES.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
