import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import {
  ArrowRightIcon,
  BookOpenIcon,
  FlameIcon,
  MapPinIcon,
  MusicIcon,
  SunIcon,
} from './Icons';

const services = [
  {
    name: 'Sunday First Service',
    day: 'Sunday',
    time: '8:00 AM',
    location: 'Main Sanctuary',
    note: 'A quiet, reflective start to your week with communion on first Sundays.',
    Icon: SunIcon,
  },
  {
    name: 'Sunday Second Service',
    day: 'Sunday',
    time: '10:30 AM',
    location: 'Main Sanctuary',
    note: 'Vibrant worship with the full choir, and Grace Kids running alongside.',
    Icon: MusicIcon,
  },
  {
    name: 'Wednesday Bible Study',
    day: 'Wednesday',
    time: '6:00 PM',
    location: 'Fellowship Hall',
    note: 'Digging deeper into the Word, verse by verse, with open Q&A.',
    Icon: BookOpenIcon,
  },
  {
    name: 'Friday Youth Service',
    day: 'Friday',
    time: '5:30 PM',
    location: 'Cathedral Hall',
    note: 'Worship, real talk and games for teens and young adults (13–30).',
    Icon: FlameIcon,
  },
];

export default function ServiceTimes() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-royal-700 via-royal-800 to-royal-700 py-24 lg:py-28">
      <div className="container-site relative">
        <SectionHeader
          tone="dark"
          eyebrow="Gather With Us"
          title="Service Times"
          subtitle="There is a service for every season of your week — and a seat with your name on it."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 120} className="h-full">
              <article className="card group relative h-full overflow-hidden p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-50 text-royal-700 ring-1 ring-royal-100 transition-colors duration-300 group-hover:bg-royal-700 group-hover:text-gold-300">
                  <service.Icon className="h-7 w-7" />
                </div>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.28em] text-gold-700">
                  {service.day}
                </p>
                <h3 className="mt-1.5 font-heading text-xl font-bold leading-snug text-royal-900">
                  {service.name}
                </h3>
                <p className="mt-3 font-heading text-[2rem] font-black leading-none text-royal-800">
                  {service.time}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <MapPinIcon className="h-3.5 w-3.5 text-gold-600" />
                  {service.location}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-500">
                  {service.note}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="mt-12 text-center text-sm text-royal-100/80">
            New here?{' '}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-bold text-gold-300 underline decoration-gold-500/40 underline-offset-4 transition hover:text-gold-200 hover:decoration-gold-400"
            >
              Plan your visit <ArrowRightIcon className="h-4 w-4" />
            </a>{' '}
            — we will save you a seat and meet you at the gate.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
