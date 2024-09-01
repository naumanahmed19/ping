import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import notifications from "@/public/data/notifications.json";

// Sample data
export async function GET() {
  return NextResponse.json(notifications);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data });
}
