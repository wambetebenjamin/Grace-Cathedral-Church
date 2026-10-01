'use client';

import { useEffect, useState } from 'react';
import { navLinks, site, waLink } from '@/lib/site';
import {
  CloseIcon,
  CrossIcon,
  MenuIcon,
  PlayIcon,
  WhatsAppIcon,
} from './Icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // Sticky shadow + scrollspy
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? 'border-b border-blue-900/10 shadow-lg shadow-blue-900/10'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          className="container-site flex h-[72px] items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3" aria-label="Grace Cathedral Church. home">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-blue-950 shadow-md transition-transform duration-300 group-hover:scale-105">
              <CrossIcon className="h-6 w-6 text-sky-400" strokeWidth={2.2} />
            </span>
            <span className="leading-tight">
              <span className="block font-sans text-lg font-black text-blue-900">
                Grace Cathedral
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.32em] text-sky-700">
                Church · Nairobi
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              const isGive = link.label === 'Give';
              if (isGive) {
                return (
                  <li key={link.href} className="ml-3">
                    <a
                      href={link.href}
                      className="inline-flex items-center rounded-full bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 px-6 py-2.5 text-sm font-black uppercase tracking-wide text-blue-900 shadow-sky transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative block rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      isActive ? 'text-blue-800' : 'text-slate-600 hover:text-blue-800'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-sky-400 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-blue-900 ring-1 ring-blue-900/10 transition hover:bg-blue-50 lg:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-blue-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-gradient-to-b from-blue-900 via-blue-950 to-blue-950 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <span className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <CrossIcon className="h-5 w-5 text-sky-400" strokeWidth={2.2} />
              </span>
              <span className="font-sans text-base font-black text-white">
                Grace Cathedral
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-blue-100 ring-1 ring-white/15 transition hover:bg-white/10"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Links */}
          <ul className="flex-1 px-4 py-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-sans text-2xl font-bold transition-all duration-300 ${
                    open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  } ${
                    active === link.href.slice(1)
                      ? 'bg-white/10 text-sky-300'
                      : 'text-white hover:bg-white/5 hover:text-sky-200'
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                >
                  {link.label}
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-sky-500/70">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Drawer footer */}
          <div className="space-y-3 border-t border-white/10 px-6 py-6">
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 px-6 py-3 text-sm font-black uppercase tracking-wide text-blue-900 shadow-sky"
            >
              <PlayIcon className="h-4 w-4" /> Watch Live
            </a>
            <a
              href={waLink('Hello Grace Cathedral!')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-white/25 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-sky-400 hover:text-sky-300"
            >
              <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <p className="pt-2 text-center text-xs leading-relaxed text-blue-200/70">
              Sundays 8:00 AM &amp; 10:30 AM
              <br />
              Wednesdays 6:00 PM · Fridays 5:30 PM (Youth)
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
