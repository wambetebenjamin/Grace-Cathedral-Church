import { CrossIcon } from './Icons';

/** Consistent section header: eyebrow → title → subtitle. */
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
        className={`text-[11px] font-bold uppercase tracking-[0.24em] sm:text-xs ${
          isDark ? 'text-royal-300' : 'text-royal-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? 'text-white' : 'text-royal-900'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-gold-500 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        aria-hidden
      />
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            isDark ? 'text-royal-100/85' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
