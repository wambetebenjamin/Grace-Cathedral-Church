export default function manifest() {
  return {
    name: 'Grace Cathedral Church. Nairobi',
    short_name: 'Grace Cathedral',
    description:
      'Welcome home. Join us every Sunday at 8:00 AM & 10:30 AM in Nairobi, Kenya.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4B0082',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
