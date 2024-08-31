import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import posts from "@/public/data/posts.json";
import communities from "@/public/data/communities.json";

// Sample data
export async function GET() {
  const response = posts.map((post: any) => {
    const community = communities.find((c: any) => c.id === post.communityId);

    post.community = community;
    return post;
  });

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data });
}
