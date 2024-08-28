"use client";
import * as React from "react";

import { useParams } from "next/navigation";
import { postsData, userData } from "@/data";
import { communitiesData } from "@/data";
import UserHeader from "@/components/user/user-header";

import PostsList from "@/components/posts/posts-lists";
import { Container } from "@/components/base/container";
import CommunityHeader from "@/components/community/community-header";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
const Community: React.FC = () => {
  const id = useParams().id;

  // Fetch the first post from the data
  const community = communitiesData.find(
    (community) => community.id === Number(id),
  );
  const posts = postsData;

  if (!community) return <p>Not found</p>;

  return (
    <Container>
      <CommunityHeader community={community} />
      <div className="flex items-start justify-between gap-4 relative">
        <div className="flex-1 ">
          <PostsList posts={posts} />
        </div>
        <div className="hidden lg:block sticky top-24">
          <PostsRightSidebar />
        </div>
      </div>
    </Container>
  );
};

export default Community;
