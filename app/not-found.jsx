import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 px-6 text-center">
      <p className="font-sans text-7xl font-black text-zinc-400 sm:text-8xl">404</p>
      <h1 className="mt-4 font-sans text-2xl font-black text-white sm:text-3xl">
        This page seems to have wandered off.
      </h1>
      <p className="mt-3 max-w-md text-zinc-100/80">
        But you are not alone. let us walk you back home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-zinc-800 px-8 py-3.5 text-sm font-black uppercase tracking-wide text-zinc-900 shadow-zinc transition-all duration-300 hover:brightness-110"
      >
        Welcome Home
      </Link>
    </main>
  );
}
