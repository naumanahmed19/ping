"use client";

import { useParams } from "next/navigation";
import { postsData, userData } from "@/data";
import { communitiesData } from "@/data";
import UserHeader from "@/components/user/user-header";

import PostsList from "@/components/posts/posts-lists";
import { Container } from "@/components/base/container";
import CommunityHeader from "@/components/community/community-header";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { useGetPosts } from "@/queries/posts.query";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { useGetCommunity } from "@/queries/communities.query";

export default function CommunityPageContnet() {
  const { slug } = useParams<{ slug: string }>();
  const decodedSlug = decodeURIComponent(slug);

  const { data: posts, isLoading, isError } = useGetPosts();

  const {
    data: community,
    isLoading: isLoadingCommunity,
    isError: isErrorCommunity,
  } = useGetCommunity(decodedSlug);
  // // Fetch the first post from the data

  return (
    <Container>
      <BaseDataPlaceholder
        isLoading={isLoadingCommunity}
        isError={isErrorCommunity}
        variant="avatar-list"
        count={1}
      >
        <CommunityHeader community={community} />
      </BaseDataPlaceholder>

      <div className="flex items-start justify-between gap-4 relative">
        <div className="flex-1 ">
          <BaseDataPlaceholder
            isLoading={isLoading}
            count={5}
            isError={isError}
            variant="posts-list"
          >
            <PostsList posts={posts} />
          </BaseDataPlaceholder>
        </div>
        <div className="hidden lg:block sticky top-24">
          <PostsRightSidebar />
        </div>
      </div>
    </Container>
  );
}
