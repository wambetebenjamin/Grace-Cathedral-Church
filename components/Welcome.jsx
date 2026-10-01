import Image from 'next/image';
import { site } from '@/lib/site';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '28+', label: 'Years of Grace' },
  { value: '3,500+', label: 'Family Members' },
  { value: '6', label: 'Ministries' },
  { value: '1', label: 'Mission — Nairobi for Christ' },
];

export default function Welcome() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* soft decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-44 right-0 h-[480px] w-[480px] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-44 left-0 h-[420px] w-[420px] rounded-full bg-royal-700/5 blur-3xl"
      />

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Pastor photo */}
        <FadeIn className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute -inset-4 -rotate-6 rounded-[2.75rem] border-2 border-gold-400/60"
          />
          <div
            aria-hidden
            className="absolute -inset-4 rotate-3 rounded-[2.75rem] border border-royal-200"
          />
          <Image
            src="/images/pastor.jpg"
            alt={`${site.seniorPastor.name}, Senior Pastor of Grace Cathedral Church, Nairobi`}
            width={520}
            height={520}
            sizes="(max-width: 1024px) 88vw, 420px"
            className="relative aspect-square w-full rounded-full object-cover object-[50%_30%] shadow-soft"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-royal-700 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.22em] text-gold-300 shadow-soft ring-1 ring-gold-400/50">
            {site.seniorPastor.role}
          </div>
        </FadeIn>

        {/* Message */}
        <div>
          <SectionHeader
            align="left"
            eyebrow="A Warm Welcome"
            title="There Is a Seat at the Table for You"
          />
          <FadeIn delay={140}>
            <p className="text-lg leading-relaxed text-slate-600">
              On behalf of our Grace Cathedral family,{' '}
              <strong className="font-bold text-royal-800">welcome home!</strong> In the
              heart of Nairobi we are a family of ordinary people serving an
              extraordinary God — growing together, laughing together and carrying
              one another&rsquo;s burdens.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Whether this is your first Sunday or your five-hundredth, you belong
              here. Whatever your story, whatever your season — there is grace for
              you at Grace Cathedral.
            </p>

            <blockquote className="mt-7 border-l-4 border-gold-400 pl-5 font-heading text-xl italic leading-snug text-royal-800 sm:text-2xl">
              &ldquo;Come as you are — you will be loved here.&rdquo;
            </blockquote>

            {/* Signature graphic */}
            <div className="mt-8">
              <p className="font-signature text-[2.6rem] leading-none text-royal-800">
                {site.seniorPastor.signature}
              </p>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.22em] text-gold-700">
                {site.seniorPastor.name} — {site.seniorPastor.role}
              </p>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-royal-900/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-heading text-3xl font-black text-royal-800">
                    {s.value}
                  </dd>
                  <dd className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
