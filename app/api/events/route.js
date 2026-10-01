import { NextResponse } from 'next/server';
import eventsData from '@/data/events.json';

export const dynamic = 'force-dynamic';

/**
 * GET /api/events?all=true
 * Returns upcoming events (East Africa Time cut-off) from data/events.json.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const includePast = searchParams.get('all') === 'true';

  const now = new Date();

  const events = eventsData.events
    .filter((e) => includePast || new Date(`${e.date}T23:59:59+03:00`) >= now)
    .sort((a, b) => a.date.localeCompare(b.date));

  return NextResponse.json({
    count: events.length,
    generatedAt: now.toISOString(),
    events,
  });
}
