import { NextResponse } from "next/server";
import suggestions from "@/../public/data/suggestions.json";
import suggestionsDefault from "@/../public/data/suggestions.json";
import { searchParamsSchema } from "@/lib/schemas/search.schema";

export async function GET(request: Request, context: any) {
  let response: { users?: any; communities?: any } = {};

  const data = new URLSearchParams(request.url.split("?")[1]); // Extract query parameters from the URL
  const q = data.get("q"); // Get the value of the "q" parameter

  // Validate and filter query parameters
  // const params = Object.fromEntries(data.entries()); // Convert URLSearchParams to an object
  // const result = searchParamsSchema.safeParse(params);
  // if (!result.success) {
  //   return NextResponse.json(
  //     { error: "Invalid query parameters" },
  //     { status: 400 },
  //   );
  // }

  // On search key changes, send q params to server to get exact results
  if (q) {
    const queryWords = q.toLowerCase().split(" ");
    const regexes = queryWords.map((word) => new RegExp(word, "i"));

    const filteredUsers = suggestions.users.filter((u) =>
      regexes.some((regex) => regex.test(u.name)),
    );
    const filteredCommunities = suggestions.communities.filter((c) =>
      regexes.some((regex) => regex.test(c.title)),
    );

    if (filteredUsers.length > 0) {
      response.users = filteredUsers;
    }

    if (filteredCommunities.length > 0) {
      response.communities = filteredCommunities;
    }
  } else {
    // Default suggestion:
    response = suggestionsDefault;
  }

  return NextResponse.json(response);
}
