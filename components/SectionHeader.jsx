import { CrossIcon } from './Icons';

/**
 * Consistent section header: eyebrow → title → gold cross divider → subtitle.
 * tone="dark" for use over the deep purple sections.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
}) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`mb-14 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}
    >
      <p
        className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] sm:text-xs ${
          isDark ? 'text-gold-400' : 'text-gold-700'
        } ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span
          className={`h-px w-8 ${isDark ? 'bg-gold-400/70' : 'bg-gold-600/60'}`}
          aria-hidden
        />
        {eyebrow}
        <span
          className={`h-px w-8 ${isDark ? 'bg-gold-400/70' : 'bg-gold-600/60'}`}
          aria-hidden
        />
      </p>
      <h2
        className={`mt-4 font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? 'text-white' : 'text-royal-900'
        }`}
      >
        {title}
      </h2>
      {/* Gold divider */}
      <div
        className={`mt-5 flex items-center gap-2.5 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span
          className="h-px w-14 bg-gradient-to-r from-transparent to-gold-500"
          aria-hidden
        />
        <CrossIcon className={`h-4 w-4 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
        <span
          className="h-px w-14 bg-gradient-to-l from-transparent to-gold-500"
          aria-hidden
        />
      </div>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            isDark ? 'text-purple-100/80' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Thin gold hairline placed between page sections. */
export function GoldRule() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/70 to-transparent"
    />
  );
}
