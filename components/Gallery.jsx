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
  { src: '/images/gallery/worship.jpg', caption: 'Sunday Worship', ratio: 'aspect-[4/5]' },
  { src: '/images/gallery/men.jpg', caption: "Men's Fellowship", ratio: 'aspect-[3/4]' },
  { src: '/images/gallery/choir.jpg', caption: 'The Cathedral Choir', ratio: 'aspect-[4/3]' },
  { src: '/images/gallery/word.jpg', caption: 'The Word', ratio: 'aspect-[4/3]' },
  { src: '/images/gallery/children.jpg', caption: 'Grace Kids', ratio: 'aspect-[4/3]' },
  { src: '/images/gallery/baptism.jpg', caption: 'Baptism Sundays', ratio: 'aspect-[3/4]' },
  { src: '/images/gallery/youth.jpg', caption: 'Youth Ignite', ratio: 'aspect-[4/3]' },
  { src: '/images/gallery/house.jpg', caption: 'Our House', ratio: 'aspect-[3/4]' },
  { src: '/images/gallery/women.jpg', caption: 'Women of Grace', ratio: 'aspect-square' },
  { src: '/images/gallery/outreach.jpg', caption: 'Feed the City', ratio: 'aspect-[3/4]' },
  { src: '/images/gallery/communion.jpg', caption: 'At The Table', ratio: 'aspect-[4/5]' },
  { src: '/images/gallery/worshipnight.jpg', caption: 'Night of Worship', ratio: 'aspect-[3/4]' },
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
          subtitle="Moments of worship, family and joy from our house to yours — tap any photo to view it."
        />

        <FadeIn>
          <div className="masonry columns-2 sm:columns-3 lg:columns-4">
            {IMAGES.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View photo: ${img.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-royal-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-400"
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
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-royal-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <ZoomInIcon className="h-8 w-8 text-gold-300" />
                  <span className="font-heading text-sm font-bold text-white">
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
            className="absolute inset-0 bg-royal-950/95 backdrop-blur-sm"
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
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-gold-400 hover:text-royal-900 sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-gold-400 hover:text-royal-900 sm:right-6 sm:h-12 sm:w-12"
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
              <span className="font-heading text-lg font-bold text-white">
                {IMAGES[index].caption}
              </span>
              <span className="ml-3 text-xs font-bold tracking-widest text-purple-200/60">
                {index + 1} / {IMAGES.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
