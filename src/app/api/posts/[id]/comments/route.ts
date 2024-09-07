import comments from "@/../public/data/comments.json";
import users from "@/../public/data/users.json";
import { NextRequest, NextResponse } from "next/server";

// Helper function to attach replies
function attachReplies(comment: any): any {
  return comment.replies && comment.replies.length > 0
    ? comment.replies.map((reply) => {
        const user = users.find((u: any) => u.id === reply.userId);
        reply.author = user;

        // Recursively attach replies to replies
        reply.replies = attachReplies(reply);

        return reply;
      })
    : [];
}

// Sample data
export async function GET(req: NextRequest, context: any) {
  // Access all query parameters
  const { searchParams } = new URL(req.url);
  const { page = 0, limit = 50 } = Object.fromEntries(searchParams.entries());

  const { params } = context;

  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);

  // Paginate comments
  const paginated = comments.slice(
    pageNumber * limitNumber,
    (pageNumber + 1) * limitNumber,
  );

  // Attach replies to each top-level comment
  const response = paginated.map((comment: any) => {
    const user = users.find((u: any) => u.id === comment.userId);
    comment.author = user;
    comment.replies = attachReplies(comment);
    return comment;
  });

  // Determine if there are more pages
  const hasMore = (pageNumber + 1) * limitNumber < comments.length;

  return NextResponse.json({
    data: response,
    nextCursor: hasMore ? pageNumber + 1 : null,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ data });
}
