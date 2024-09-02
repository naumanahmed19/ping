import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import posts from "@/../public/data/posts.json";
import communities from "@/../public/data/communities.json";

// Sample data
export async function GET(req: NextRequest, context: any) {
  // Access all query parameters
  const { searchParams } = new URL(req.url);
  const { page = 0, limit = 2 } = Object.fromEntries(searchParams.entries());

  const { params } = context;

  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);

  // Paginate posts
  const paginatedPosts = posts.slice(
    pageNumber * limitNumber,
    (pageNumber + 1) * limitNumber,
  );

  // Add community data to posts
  const response = paginatedPosts.map((post: any) => {
    const community = communities.find((c: any) => c.id === post.communityId);
    post.community = community;
    return post;
  });

  // Determine if there are more pages
  const hasMore = (pageNumber + 1) * limitNumber < posts.length;

  return NextResponse.json({
    posts: response,
    nextCursor: hasMore ? pageNumber + 1 : null,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data });
}
