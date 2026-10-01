import './globals.css';
import localFont from 'next/font/local';
import Analytics from '@/components/Analytics';
import { site } from '@/lib/site';

// Self-hosted fonts (Fontsource woff2) — fast, private, and no build-time
// dependency on Google Fonts. Playfair Display for headings, Lato for body,
// Great Vibes for the pastor's signature.
const playfair = localFont({
  src: [
    { path: './fonts/playfair-display-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/playfair-display-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/playfair-display-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: './fonts/playfair-display-latin-700-italic.woff2', weight: '700', style: 'italic' },
    { path: './fonts/playfair-display-latin-900-normal.woff2', weight: '900', style: 'normal' },
    { path: './fonts/playfair-display-latin-900-italic.woff2', weight: '900', style: 'italic' },
  ],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = localFont({
  src: [
    { path: './fonts/lato-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/lato-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/lato-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/lato-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: './fonts/lato-latin-900-normal.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-lato',
  display: 'swap',
});

const signature = localFont({
  src: [{ path: './fonts/great-vibes-latin-400-normal.woff2', weight: '400', style: 'normal' }],
  variable: '--font-signature',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4B0082',
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
        className={`${playfair.variable} ${lato.variable} ${signature.variable} font-body bg-white text-slate-700 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
