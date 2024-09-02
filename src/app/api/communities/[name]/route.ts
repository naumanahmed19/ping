import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import data from "@/../public/data/communities.json";

// Sample data
export async function GET(request: Request, context: any) {
  const { params } = context;

  const response = data.find((community) => community.name === params.name);

  return NextResponse.json(response);
}
