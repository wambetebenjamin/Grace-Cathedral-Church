/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Mirrors the rewrites in vercel.json so they work in local dev too.
  async rewrites() {
    return [
      { source: '/api/v1/:path*', destination: '/api/:path*' },
      { source: '/sermons.json', destination: '/api/sermons' },
      { source: '/events.json', destination: '/api/events' },
    ];
  },
};

export default nextConfig;
