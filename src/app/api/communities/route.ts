import communities from "@/../public/data/communities.json";

import { NextRequest, NextResponse } from "next/server";

// Sample data
export async function GET(req: NextRequest, context: any) {
  // Access all query parameters
  const { searchParams } = new URL(req.url);
  const { page = 0, limit = 20 } = Object.fromEntries(searchParams.entries());

  const { params } = context;

  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);

  // Paginate posts
  const response = communities.slice(
    pageNumber * limitNumber,
    (pageNumber + 1) * limitNumber,
  );

  // Determine if there are more pages
  const hasMore = (pageNumber + 1) * limitNumber < communities.length;

  return NextResponse.json({
    data: response,
    nextCursor: hasMore ? pageNumber + 1 : null,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data });
}
