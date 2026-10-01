import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const leaders = [
  {
    name: 'Rev. Dr. Samuel Kariuki',
    role: 'Senior Pastor',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Rev. Mary Wanjiku',
    role: 'Assistant Pastor, Family Life',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Pst. Brian Otieno',
    role: 'Youth and Young Adults',
    image: 'https://images.unsplash.com/photo-1539575750720-0d4f4c0f0a0a?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Mama Grace Njeri',
    role: 'Church Elder and Care Lead',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  },
];

export default function Leadership() {
  return (
    <section className="bg-[#f7f5f0] py-24 lg:py-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="People Who Serve"
          title="Meet the Grace Cathedral family"
          subtitle="Pastors, ministry leaders and elders who pray, listen and walk with our Nairobi church family through every season."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <FadeIn key={leader.name} delay={index * 90}>
              <article className="overflow-hidden border border-zinc-200 bg-white">
                <img
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="border-t-4 border-zinc-600 p-5">
                  <h3 className="font-sans text-lg font-bold text-zinc-900">{leader.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{leader.role}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
