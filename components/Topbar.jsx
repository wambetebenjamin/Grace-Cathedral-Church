import { site, serviceSummary } from '@/lib/site';
import { ClockIcon, PhoneIcon, WhatsAppIcon } from './Icons';

/** Slim utility bar: service times + phone/WhatsApp contact. */
export default function Topbar() {
  return (
    <div className="bg-zinc-950 text-[13px] text-zinc-100/90">
      <div className="container-site flex h-10 items-center justify-between gap-4">
        <p className="hidden items-center gap-2 min-[420px]:flex">
          <ClockIcon className="h-4 w-4 shrink-0 text-zinc-400" />
          <span className="font-semibold tracking-wide">{serviceSummary}</span>
        </p>

        <div className="flex w-full items-center justify-end gap-5 min-[420px]:w-auto">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-zinc-300"
          >
            <PhoneIcon className="h-4 w-4 text-zinc-400" />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call Us</span>
          </a>
          <span className="h-4 w-px bg-white/20" aria-hidden />
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold transition-colors hover:text-zinc-300"
          >
            <WhatsAppIcon className="h-4 w-4 text-zinc-400" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
