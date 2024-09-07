"use client";

import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import InfiniteScroll from "@/components/base/infinite-scroll";
import PostsList from "@/components/posts/posts-lists";
import { useGetCommunityPosts } from "@/queries/communities.query";

export default function CommunityPosts({ id }: { id: number }) {
  const query = useGetCommunityPosts(id);
  return (
    <BaseDataPlaceholder
      isLoading={query.isLoading}
      count={5}
      isError={query.isError}
      variant="posts-list"
    >
      <InfiniteScroll
        query={query}
        renderItem={(posts) => <PostsList posts={posts} />}
      />
    </BaseDataPlaceholder>
  );
}
