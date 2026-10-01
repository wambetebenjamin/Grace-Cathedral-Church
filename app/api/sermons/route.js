import { NextResponse } from 'next/server';
import sermonsData from '@/data/sermons.json';

export const dynamic = 'force-dynamic';

/**
 * GET /api/sermons?limit=3
 * Returns the latest sermons (newest first) from data/sermons.json.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(Math.max(Number(searchParams.get('limit')) || 3, 1), 24);

  const sermons = [...sermonsData.sermons]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);

  return NextResponse.json({
    count: sermons.length,
    sermons,
  });
}
