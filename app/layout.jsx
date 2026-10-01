import './globals.css';
import Analytics from '@/components/Analytics';
import { site } from '@/lib/site';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#274c6b',
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Grace Cathedral Church | Welcome Home — Nairobi, Kenya',
    template: '%s | Grace Cathedral Church',
  },
  description: site.description,
  keywords: [
    'church in Nairobi',
    'Grace Cathedral Church',
    'Sunday service Nairobi',
    'Bible study Nairobi',
    'youth church Nairobi',
    'church Kenya',
    'worship Nairobi',
    'M-Pesa giving',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: 'Grace Cathedral Church | Welcome Home. You Are Not Alone.',
    description:
      'Join us every Sunday at 8:00 AM & 10:30 AM in Nairobi, Kenya. Watch live, plan your visit, and grow with us.',
    locale: 'en_KE',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grace Cathedral Church — Nairobi, Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grace Cathedral Church | Welcome Home',
    description: site.description,
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-body bg-white text-slate-700 antialiased"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
