import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const leaders = [
  {
    name: 'Rev. Dr. Samuel Kariuki',
    role: 'Senior Pastor',
    image: 'https://images.pexels.com/photos/6284489/pexels-photo-6284489.jpeg?auto=compress&fit=crop&w=900&q=85',
  },
  {
    name: 'Rev. Mary Wanjiku',
    role: 'Assistant Pastor, Family Life',
    image: 'https://images.pexels.com/photos/18859686/pexels-photo-18859686.jpeg?auto=compress&fit=crop&w=900&q=85',
  },
  {
    name: 'Pst. Brian Otieno',
    role: 'Youth and Young Adults',
    image: 'https://images.pexels.com/photos/18859686/pexels-photo-18859686.jpeg?auto=compress&fit=crop&w=900&q=85',
  },
  {
    name: 'Mama Grace Njeri',
    role: 'Church Elder and Care Lead',
    image: 'https://images.pexels.com/photos/18859686/pexels-photo-18859686.jpeg?auto=compress&fit=crop&w=900&q=85',
  },
];

export default function Leadership() {
  return (
    <section
      className="bg-zinc-50 bg-cover bg-center py-24 lg:py-28"
      style={{ backgroundImage: "linear-gradient(rgba(250,250,250,.94), rgba(250,250,250,.96)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85')" }}
    >
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
                  className="aspect-[4/3] w-full object-cover grayscale"
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
