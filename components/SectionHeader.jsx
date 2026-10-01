
/**
 * Consistent section header: eyebrow → title → accent heading → subtitle.
 * tone="dark" for use over the dark sections.
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
          isDark ? 'text-orange-400' : 'text-orange-700'
        } ${align === 'center' ? 'justify-center' : ''}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-sans text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? 'text-white' : 'text-stone-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            isDark ? 'text-stone-100/80' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Thin section rule placed between page sections. */
export function GoldRule() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"
    />
  );
}
