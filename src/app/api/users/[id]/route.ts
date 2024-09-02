import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import users from "@/../public/data/users.json";

// Sample data
export async function GET(request: Request, context: any) {
  const { params } = context;

  const response = users.find(
    (user) => user.id.toString() === params.id.toString(),
  );

  return NextResponse.json(response);
}
