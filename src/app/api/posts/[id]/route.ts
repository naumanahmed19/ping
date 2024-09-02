import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import data from "@/../public/data/posts.json";

// Sample data
export async function GET(request: Request, context: any) {
  const { params } = context;

  const response = data.find((post) => post.id === params.id.toString());

  return NextResponse.json(response);
}
