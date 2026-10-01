import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIST_KEY = 'grace-cathedral:newsletter';

/**
 * Persists a subscriber email:
 *  1. Vercel KV / Upstash Redis (REST) when env vars are set. production path.
 *  2. Otherwise a local JSON file (data/newsletter-subscribers.json) when the
 *     filesystem is writable (local dev). and a log line as a last resort.
 */
async function saveSubscriber(email) {
  const restUrl = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (restUrl && token) {
    const res = await fetch(
      `${restUrl}/sadd/${LIST_KEY}/${encodeURIComponent(email)}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      }
    );
    if (!res.ok) throw new Error(`KV write failed (${res.status})`);
    return 'upstash';
  }

  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const file = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');
    let list = [];
    try {
      list = JSON.parse(await fs.readFile(file, 'utf8'));
      if (!Array.isArray(list)) list = [];
    } catch {
      /* first subscriber */
    }
    if (!list.includes(email)) list.push(email);
    await fs.writeFile(file, JSON.stringify(list, null, 2));
    return 'file';
  } catch {
    console.log(`[newsletter] New subscriber (log-only, read-only FS): ${email}`);
    return 'log';
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const email = String(body?.email ?? '').trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  try {
    const store = await saveSubscriber(email);
    return NextResponse.json({
      ok: true,
      store,
      message: 'Karibu! You are subscribed to The Grace Weekly.',
    });
  } catch (err) {
    console.error('[newsletter] Failed to save subscriber:', err);
    return NextResponse.json(
      { ok: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Newsletter API. POST { "email": "you@example.com" }',
  });
}
