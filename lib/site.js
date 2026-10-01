/**
 * Central site configuration for Grace Cathedral Church.
 * Update contact details, links and giving info here. every
 * component reads from this file.
 */

export const WHATSAPP_NUMBER = '254112272061';

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const site = {
  name: 'Grace Cathedral Church',
  shortName: 'Grace Cathedral',
  city: 'Nairobi, Kenya',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://grace-cathedral-church.vercel.app',
  description:
    'Grace Cathedral Church is a vibrant family of believers in the heart of Nairobi, Kenya. Join us every Sunday at 8:00 AM & 10:30 AM. welcome home, you are not alone.',

  // Contact
  phoneDisplay: '+254 112 272 061',
  phoneHref: 'tel:+254112272061',
  email: 'hello@gracecathedral.co.ke',
  address: 'Haile Selassie Avenue, Nairobi CBD',
  addressFull: 'Haile Selassie Avenue, Nairobi CBD, Nairobi, Kenya',
  officeHours: 'Tuesday – Friday, 9:00 AM – 4:00 PM',

  // WhatsApp links
  whatsapp: 'https://wa.me/254112272061?text=Hello%20Grace%20Cathedral!',
  whatsappChat:
    'https://wa.me/254112272061?text=Hello!%20I%20have%20a%20question%20about%20Grace%20Cathedral',

  // Media
  youtube: 'https://www.youtube.com/@GraceCathedralNairobi',
  facebook: 'https://www.facebook.com/gracecathedralnairobi',
  instagram: 'https://www.instagram.com/gracecathedralnairobi',
  twitter: 'https://x.com/gracecathedralke',

  // Location. Nairobi CBD (replace with the church's exact coordinates)
  mapEmbed: 'https://maps.google.com/maps?q=-1.2895,36.8225&z=15&hl=en&output=embed',
  mapDirections:
    'https://www.google.com/maps/dir/?api=1&destination=-1.2895,36.8225',

  // Giving (placeholders. update with the church's real details)
  mpesaPaybill: '4019876',
  mpesaAccount: 'GRACE CATHEDRAL',
  bank: {
    name: 'Equity Bank Kenya',
    branch: 'Nairobi CBD',
    accountName: 'Grace Cathedral Church',
    accountNumber: '1234 5678 9012',
  },

  // People
  seniorPastor: {
    name: 'Rev. Dr. Samuel Kariuki',
    signature: 'Samuel Kariuki',
    role: 'Senior Pastor',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Give', href: '#give' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const serviceSummary =
  'Sundays 8:00 AM & 10:30 AM · Wednesdays 6:00 PM · Fridays 5:30 PM (Youth)';
