import { waLink } from '@/lib/site';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import {
  ArrowRightIcon,
  FlameIcon,
  GlobeIcon,
  HeartIcon,
  MusicIcon,
  ShieldIcon,
  SmileIcon,
} from './Icons';

const ministries = [
  {
    name: 'Youth Ministry',
    Icon: FlameIcon,
    description:
      'Igniting a generation to love Jesus — Friday services, small groups, mentors and epic events every school term.',
  },
  {
    name: "Women's Ministry",
    Icon: HeartIcon,
    description:
      'Women of Grace gather for prayer, the Word, mentorship and Sisterhood breakfasts through the year.',
  },
  {
    name: "Men's Ministry",
    Icon: ShieldIcon,
    description:
      'Raising men of integrity, purpose and prayer — breakfasts, camps and accountability brotherhoods.',
  },
  {
    name: 'Children’s Ministry',
    Icon: SmileIcon,
    description:
      'Safe, joyful Sunday classes where kids (3–12) meet Jesus through stories, songs, crafts and play.',
  },
  {
    name: 'Worship & Music',
    Icon: MusicIcon,
    description:
      'Choir, band and technical teams leading the house into God’s presence — auditions every quarter.',
  },
  {
    name: 'Outreach & Missions',
    Icon: GlobeIcon,
    description:
      'Feed the City, hospital visits and missions across Kenya — taking grace beyond our four walls.',
  },
];

export default function Ministries() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="container-site relative">
        <SectionHeader
          eyebrow="Find Your Place"
          title="Ministries"
          subtitle="You were not created to do life alone. Belong, grow and serve with a family within the family."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, i) => (
            <FadeIn key={ministry.name} delay={(i % 3) * 110} className="h-full">
              <article className="group card relative h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-700 to-royal-950 text-gold-400 shadow-soft">
                  <ministry.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-royal-900">
                  {ministry.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                  {ministry.description}
                </p>
                <a
                  href={waLink(
                    `Hello! I am interested in joining the ${ministry.name} at Grace Cathedral Church.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-black uppercase tracking-wider text-gold-700 transition-colors hover:text-royal-800"
                >
                  Join the team
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
