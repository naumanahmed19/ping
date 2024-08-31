import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// Sample data
const communities = [
  { id: 1, name: "Community 1" },
  { id: 2, name: "Community 2" },
  { id: 3, name: "Community 3" },
];

export async function GET() {
  return NextResponse.json(communities);
}
