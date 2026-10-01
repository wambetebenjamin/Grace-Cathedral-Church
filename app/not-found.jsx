import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-royal-900 to-royal-950 px-6 text-center">
      <p className="font-heading text-7xl font-black text-gold-400 sm:text-8xl">404</p>
      <h1 className="mt-4 font-heading text-2xl font-black text-white sm:text-3xl">
        This page seems to have wandered off.
      </h1>
      <p className="mt-3 max-w-md text-purple-100/80">
        But you are not alone — let us walk you back home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600 px-8 py-3.5 text-sm font-black uppercase tracking-wide text-royal-900 shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
      >
        Welcome Home
      </Link>
    </main>
  );
}
