import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import communities from "@/../public/data/communities.json";

// Sample data
export async function GET() {
  return NextResponse.json(communities);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data });
}
