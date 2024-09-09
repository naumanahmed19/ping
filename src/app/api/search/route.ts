import { fetchSearchResults } from "@/actions/search";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const data = new URLSearchParams(request.url.split("?")[1]); // Extract query parameters from the URL
  const q = data.get("q");

  const type = data.get("type");

  const response = await fetchSearchResults(q, type);

  return NextResponse.json(response);
}
