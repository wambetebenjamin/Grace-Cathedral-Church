'use client';

import { useEffect, useState } from 'react';
import { site, waLink } from '@/lib/site';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import {
  CheckIcon,
  CloseIcon,
  CopyIcon,
  CrossIcon,
  GiftIcon,
  WhatsAppIcon,
} from './Icons';

export default function Giving() {
  const [copied, setCopied] = useState(null); // 'paybill' | 'account' | null
  const [showWays, setShowWays] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setShowWays(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showWays ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showWays]);

  const copy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section
      id="give"
      className="relative overflow-hidden bg-gradient-to-b from-royal-700 via-royal-800 to-royal-700 py-24 lg:py-28"
    >
      {/* Decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-royal-500/25 blur-3xl"
      />

      <div className="container-site relative">
        <SectionHeader
          tone="dark"
          eyebrow="Give & Tithe"
          title="Sow Into Eternal Work"
          subtitle="Your generosity feeds families, plants churches and keeps the doors of grace open for every soul who walks in."
        />

        <div className="mx-auto max-w-3xl">
          {/* Scripture */}
          <FadeIn>
            <blockquote className="relative text-center">
              <span
                aria-hidden
                className="absolute -top-8 left-1/2 -translate-x-1/2 font-heading text-8xl leading-none text-gold-400/30"
              >
                &ldquo;
              </span>
              <p className="font-heading text-xl italic leading-relaxed text-purple-50 sm:text-2xl">
                Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver.
              </p>
              <footer className="mt-5 text-[11px] font-black uppercase tracking-[0.3em] text-gold-400">
                2 Corinthians 9:7
              </footer>
            </blockquote>
          </FadeIn>

          {/* M-Pesa card */}
          <FadeIn delay={140}>
            <div className="mt-12 rounded-3xl border border-gold-400/25 bg-white/10 p-8 shadow-soft backdrop-blur sm:p-10">
              <p className="text-center text-[11px] font-black uppercase tracking-[0.3em] text-gold-300">
                M-Pesa Paybill
              </p>
              <button
                type="button"
                onClick={() => copy(site.mpesaPaybill, 'paybill')}
                className="group mx-auto mt-4 flex flex-col items-center gap-2"
                aria-label={`Copy M-Pesa paybill number ${site.mpesaPaybill}`}
              >
                <span className="font-heading text-4xl font-black tracking-[0.12em] text-gold-400 transition group-hover:text-gold-300 sm:text-5xl">
                  {site.mpesaPaybill}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-purple-200/70 transition group-hover:text-gold-300">
                  {copied === 'paybill' ? (
                    <>
                      <CheckIcon className="h-3.5 w-3.5" /> Copied!
                    </>
                  ) : (
                    <>
                      <CopyIcon className="h-3.5 w-3.5" /> Tap to copy
                    </>
                  )}
                </span>
              </button>

              <div className="mt-6 flex flex-col items-center gap-1.5 border-t border-white/10 pt-6 sm:flex-row sm:justify-center sm:gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-200/70">
                  Account:
                </span>
                <button
                  type="button"
                  onClick={() => copy(site.mpesaAccount, 'account')}
                  className="inline-flex items-center gap-2 font-heading text-lg font-bold text-white transition hover:text-gold-300"
                  aria-label={`Copy account name ${site.mpesaAccount}`}
                >
                  {site.mpesaAccount}
                  {copied === 'account' ? (
                    <CheckIcon className="h-4 w-4 text-gold-400" />
                  ) : (
                    <CopyIcon className="h-4 w-4 text-purple-200/50" />
                  )}
                </button>
              </div>
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={220}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowWays(true)}
                className="btn-gold w-full sm:w-auto"
              >
                <GiftIcon className="h-5 w-5" />
                Give Online
              </button>
              <a
                href={waLink('Hello! I would like to give / tithe to Grace Cathedral Church.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Talk to Stewardship Team
              </a>
            </div>
            <p className="mt-6 text-center text-xs text-purple-200/60">
              Giving is secured through M-Pesa. You will receive an M-Pesa
              confirmation message for every gift — asante sana!
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── Ways to Give modal ─────────────────────────────── */}
      {showWays && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Ways to give"
        >
          <div
            className="absolute inset-0 bg-royal-900/80 backdrop-blur-sm"
            onClick={() => setShowWays(false)}
          />
          <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
            <button
              type="button"
              onClick={() => setShowWays(false)}
              aria-label="Close giving options"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-royal-50 hover:text-royal-800"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50 text-gold-600">
                <CrossIcon className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="font-heading text-2xl font-black text-royal-900">
                Ways to Give
              </h3>
            </div>

            <div className="mt-7 space-y-7 text-sm leading-relaxed text-slate-600">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-heading text-base font-bold text-royal-800">
                  <span className="h-2 w-2 rounded-full bg-gold-500" /> M-Pesa (Paybill)
                </p>
                <ol className="ml-4 list-decimal space-y-1.5 text-slate-600">
                  <li>
                    Open M-Pesa → <strong>Lipa na M-Pesa</strong> →{' '}
                    <strong>Pay Bill</strong>
                  </li>
                  <li>
                    Business Number:{' '}
                    <strong className="text-royal-800">{site.mpesaPaybill}</strong>
                  </li>
                  <li>
                    Account Number:{' '}
                    <strong className="text-royal-800">{site.mpesaAccount}</strong>
                  </li>
                  <li>Enter amount, your PIN and send — God bless you!</li>
                </ol>
              </div>

              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-heading text-base font-bold text-royal-800">
                  <span className="h-2 w-2 rounded-full bg-gold-500" /> Bank Transfer
                </p>
                <p>
                  {site.bank.name} — {site.bank.branch} Branch
                  <br />
                  Account Name: <strong>{site.bank.accountName}</strong>
                  <br />
                  Account No: <strong>{site.bank.accountNumber}</strong>
                </p>
              </div>

              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-heading text-base font-bold text-royal-800">
                  <span className="h-2 w-2 rounded-full bg-gold-500" /> In Service
                </p>
                <p>
                  Giving baskets are passed during every service, and stewards are
                  available after service to assist with any questions about
                  tithing, partnerships or project giving.
                </p>
              </div>
            </div>

            <a
              href={waLink('Hello! I have a question about giving at Grace Cathedral Church.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple mt-8 w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Ask the Stewardship Team
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
