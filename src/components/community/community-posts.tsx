"use client";

import InfiniteScroll from "@/components/base/infinite-scroll";
import PostsList from "@/components/posts/posts-lists";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
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
        key="posts"
        renderItem={(page) => <PostsList posts={page.posts} />}
      />
    </BaseDataPlaceholder>
  );
}
