import notifications from "@/../public/data/notifications.json";
import { NextResponse } from "next/server";

// Sample data
export async function GET() {
  return NextResponse.json(notifications);
}
