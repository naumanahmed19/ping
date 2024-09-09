"use server";

import data from "@/../public/data/communities.json";
import { Community } from "@/types/Community";

// Sample data
export async function getCommuity(name: string) {
  const formattedName = name?.replace("%40", "@");
  const response: Community = data.find(
    (community) => community.name === formattedName,
  )!;

  return response;
}
