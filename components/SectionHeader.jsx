import { CrossIcon } from './Icons';

/**
 * Consistent section header: eyebrow → title → blue cross divider → subtitle.
 * tone="dark" for use over the deep blue sections.
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
          isDark ? 'text-sky-400' : 'text-sky-700'
        } ${align === 'center' ? 'justify-center' : ''}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-sans text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? 'text-white' : 'text-blue-900'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 flex items-center gap-2.5 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <CrossIcon className={`h-4 w-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`} />
      </div>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            isDark ? 'text-blue-100/80' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Thin blue hairline placed between page sections. */
export function GoldRule() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/70 to-transparent"
    />
  );
}
