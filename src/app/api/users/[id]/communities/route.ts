import communities from "@/../public/data/communities.json";
import { NextResponse } from "next/server";

// Sample data
export async function GET() {
  return NextResponse.json(communities);
}
