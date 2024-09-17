"use server";

import { db } from "@/db/db";
import { communities } from "@/db/schema";
import { uploadIcon } from "../file-upload";
import { useAuth } from "../use-auth";

// Sample data
export async function createCommunity(data: any) {
  const { user, isAuthenticated } = await useAuth();

  if (!user) return;

  console.log(data);

  const community = await db
    .insert(communities)
    .values({
      userId: user.id,
      name: data.name,
      title: data.description,
    })
    .returning();

  // attach media to community

  if (!community) {
    return { error: "Failed to create community" };
  }

  //upload media to S3 and get the URL
  await uploadIcon({
    resourceId: community[0].id.toString(),
    resourceType: "community",
    file: data.icon_img,
    type: "icon",
  });

  await uploadIcon({
    resourceId: community[0].id.toString(),
    resourceType: "community",
    file: data.banner_img,
    type: "banner",
  });

  // attach tags to community

  // if (community) {
  //   await db
  //     .insert(communityCategories)
  //     .values({
  //       communityId: community.id,
  //       categoryId: data.categoryId,
  //     })
  //     .returning();
  // }

  return community;
  return { success: "Community created successfully" };
}
