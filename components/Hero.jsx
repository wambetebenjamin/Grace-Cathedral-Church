'use client';

import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { site } from '@/lib/site';
import { ChevronDownIcon, ClockIcon, CrossIcon, PlayIcon } from './Icons';


export default function Hero() {
  const bgRef = useRef(null);

  // Preload the hero image for a fast first paint.
  useEffect(() => {
    if (typeof ReactDOM !== 'undefined' && typeof ReactDOM.preload === 'function') {
      ReactDOM.preload('/images/hero.jpg', { as: 'image' });
    }
  }, []);

  // Parallax — background translates at a fraction of scroll speed (rAF-throttled).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = null;
    const update = () => {
      raf = null;
      const el = bgRef.current;
      if (!el) return;
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5) {
        el.style.transform = `translate3d(0, ${(y * 0.3).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-royal-900"
      style={{ minHeight: '100svh' }}
    >
      {/* Preload the hero image (hoisted into <head> by React Float) */}
      <link rel="preload" href="/images/hero.jpg" as="image" />

      {/* Parallax background */}
      <div
        ref={bgRef}
        aria-hidden
        className="absolute inset-x-0 top-[-40%] h-[180%] will-change-transform"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-royal-900/85 via-royal-800/45 to-royal-900/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_42%,transparent,rgba(61,1,106,0.55))]"
      />

      {/* Content */}
      <div className="container-site relative z-10 pb-28 pt-20 text-center sm:pb-32">
        <p
          className="hero-anim mx-auto mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur sm:text-[11px]"
          style={{ animationDelay: '0.1s' }}
        >
          <CrossIcon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />
          <span className="truncate">Grace Cathedral Church · Nairobi, Kenya</span>
        </p>

        <h1
          className="hero-anim font-heading text-[2.6rem] font-black leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.3s' }}
        >
          Welcome Home.
          <span className="mt-2 block text-white">You Are Not Alone.</span>
        </h1>

        <p
          className="hero-anim mx-auto mt-7 max-w-2xl text-lg font-light leading-relaxed text-royal-100/90 sm:text-2xl"
          style={{ animationDelay: '1.35s' }}
        >
          Join Us Every Sunday at 8AM &amp; 10:30AM
        </p>

        <div
          className="hero-anim mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '1.55s' }}
        >
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto"
          >
            <PlayIcon className="h-4 w-4" />
            Watch Live
          </a>
          <a href="#contact" className="btn-outline-light w-full sm:w-auto">
            Plan Your Visit
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll down to learn more"
        className="animate-float absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 text-gold-300/80 transition-colors hover:text-gold-300 sm:block"
      >
        <ChevronDownIcon className="h-9 w-9" />
      </a>

      {/* Service times strip */}
      <div
        className="hero-anim absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-royal-900/60 backdrop-blur"
        style={{ animationDelay: '1.8s' }}
      >
        <div className="container-site flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-3.5 text-center text-[12px] font-semibold tracking-wide text-royal-100/85 sm:text-[13px]">
          <span className="inline-flex items-center gap-2">
            <ClockIcon className="h-4 w-4 text-gold-300" />
            Sundays 8:00 AM &amp; 10:30 AM
          </span>
          <span className="hidden text-gold-500/60 sm:inline" aria-hidden>
            •
          </span>
          <span>Wednesdays 6:00 PM</span>
          <span className="hidden text-gold-500/60 sm:inline" aria-hidden>
            •
          </span>
          <span>Fridays 5:30 PM (Youth)</span>
        </div>
      </div>
    </section>
  );
}
