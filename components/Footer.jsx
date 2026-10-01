'use client';

import { useState } from 'react';
import { navLinks, serviceSummary, site } from '@/lib/site';
import {
  CheckIcon,
  CrossIcon,
  FacebookIcon,
  InstagramIcon,
  LoaderIcon,
  SendIcon,
  WhatsAppIcon,
  XBrandIcon,
  YouTubeIcon,
} from './Icons';

const socials = [
  { label: 'Facebook', href: site.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: site.instagram, Icon: InstagramIcon },
  { label: 'YouTube', href: site.youtube, Icon: YouTubeIcon },
  { label: 'X (Twitter)', href: site.twitter, Icon: XBrandIcon },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setMessage('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data?.message || 'Please enter a valid email address.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. please try again.');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-blue-950 text-blue-100/80">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[720px] -translate-x-1/2 rounded-full bg-sky-400/5 blur-3xl"
      />

      <div className="container-site relative">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[4fr_2.5fr_2.5fr_4fr] lg:gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <CrossIcon className="h-6 w-6 text-sky-400" strokeWidth={2.2} />
              </span>
              <span className="leading-tight">
                <span className="block font-sans text-lg font-black text-white">
                  Grace Cathedral
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.32em] text-sky-400">
                  Church · Nairobi
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A family of believers in the heart of Nairobi. welcoming home every
              soul, one Sunday at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blue-100/80 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:text-blue-900 hover:ring-sky-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-[11px] font-black uppercase tracking-[0.28em] text-sky-400">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-semibold transition-colors hover:text-sky-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold transition-colors hover:text-sky-300"
                >
                  Watch Live
                </a>
              </li>
            </ul>
          </nav>

          {/* Service times */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.28em] text-sky-400">
              Service Times
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <span className="block font-bold text-white">Sundays</span>
                8:00 AM &amp; 10:30 AM · Main Sanctuary
              </li>
              <li>
                <span className="block font-bold text-white">Wednesdays</span>
                6:00 PM · Bible Study, Fellowship Hall
              </li>
              <li>
                <span className="block font-bold text-white">Fridays</span>
                5:30 PM · Youth Service, Cathedral Hall
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.28em] text-sky-400">
              The Grace Weekly
            </h3>
            <p className="mt-5 text-sm leading-relaxed">
              Sermons, events and encouragement in your inbox every Friday. Karibu!
            </p>
            <form onSubmit={subscribe} className="mt-4" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 focus-within:ring-2 focus-within:ring-sky-400">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="you@example.com"
                  className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-blue-200/40 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  aria-label="Subscribe to newsletter"
                  className="flex items-center gap-2 bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 px-5 text-blue-900 transition hover:brightness-110 disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <LoaderIcon className="h-4 w-4 animate-spin" />
                  ) : (
                    <SendIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
              {status === 'success' && (
                <p className="mt-3 flex items-center gap-1.5 text-xs font-bold text-sky-300">
                  <CheckIcon className="h-4 w-4" /> {message}
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-xs font-bold text-red-300">{message}</p>
              )}
              <p className="mt-3 text-[11px] leading-relaxed text-blue-200/50">
                No spam. just grace. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom bar. extra bottom padding on mobile clears the sticky action bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 pb-24 text-center text-xs text-blue-200/60 sm:flex-row sm:pb-6 sm:text-left">
          <p>
            © {new Date().getFullYear()} Grace Cathedral Church, Nairobi, Kenya. All
            rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            {serviceSummary.split(' · ')[0]} · Made with faith in Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
}
