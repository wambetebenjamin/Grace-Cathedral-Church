import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 px-6 text-center">
      <p className="font-sans text-7xl font-black text-sky-400 sm:text-8xl">404</p>
      <h1 className="mt-4 font-sans text-2xl font-black text-white sm:text-3xl">
        This page seems to have wandered off.
      </h1>
      <p className="mt-3 max-w-md text-blue-100/80">
        But you are not alone. let us walk you back home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 px-8 py-3.5 text-sm font-black uppercase tracking-wide text-blue-900 shadow-sky transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
      >
        Welcome Home
      </Link>
    </main>
  );
}
