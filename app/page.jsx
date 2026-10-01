import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Leadership from '@/components/Leadership';
import ServiceTimes from '@/components/ServiceTimes';
import Sermons from '@/components/Sermons';
import Events from '@/components/Events';
import Giving from '@/components/Giving';
import Gallery from '@/components/Gallery';
import Ministries from '@/components/Ministries';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import MobileBottomBar from '@/components/MobileBottomBar';
import { site } from '@/lib/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: site.name,
  url: site.url,
  telephone: '+254112272061',
  email: site.email,
  image: `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Haile Selassie Avenue',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -1.2895, longitude: 36.8225 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '18:00', closes: '19:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '17:30', closes: '19:00' },
  ],
  sameAs: [site.youtube, site.facebook, site.instagram, site.twitter],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Topbar />
      <Navbar />

      <main>
        <Hero />
        <Welcome />
        <Leadership />
        <ServiceTimes />
        <Sermons />
        <Events />
        <Giving />
        <Gallery />
        <Ministries />
        <Contact />
      </main>

      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </>
  );
}
