'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { CloseIcon, WhatsAppIcon } from './Icons';

/**
 * Floating WhatsApp button in the official WhatsApp green.
 * Tooltip auto-reveals once, is dismissible, and appears on hover/focus.
 */
export default function WhatsAppWidget() {
  const [autoTip, setAutoTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setAutoTip(true), 3200);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="group fixed bottom-[84px] right-4 z-[80] md:bottom-6 md:right-6">
      <div className="flex items-center">
        {/* Tooltip */}
        <div
          className={`pointer-events-none absolute right-full mr-3 flex items-center gap-2 rounded-2xl bg-white py-2.5 pl-4 pr-2.5 shadow-xl ring-1 ring-slate-200 transition-all duration-300 ${
            autoTip && !dismissed
              ? 'translate-x-0 opacity-100'
              : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100'
          }`}
          role="status"
        >
          <span className="whitespace-nowrap text-sm font-bold text-slate-700">
            Talk to our team
          </span>
          {autoTip && !dismissed && (
            <button
              type="button"
              onClick={() => {
                setDismissed(true);
                setAutoTip(false);
              }}
              aria-label="Dismiss chat invitation"
              className="pointer-events-auto flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Button — official WhatsApp brand green */}
        <a
          href={site.whatsappChat}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Grace Cathedral on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 active:scale-95"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
