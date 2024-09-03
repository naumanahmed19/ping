"use client";

import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import PostsList from "@/components/posts/posts-lists";
import { useGetPosts } from "@/queries/posts.query";

import InfiniteScroll from "@/components/base/infinite-scroll";
const LatestPosts: React.FC = () => {
  const query = useGetPosts();

  return (
    <BaseDataPlaceholder
      isLoading={query.isLoading}
      isError={query.isError}
      count={5}
      variant="posts-list"
    >
      <InfiniteScroll
        query={query}
        key="posts"
        renderItem={(posts) => <PostsList posts={posts} />}
      />
    </BaseDataPlaceholder>
  );
};

export default LatestPosts;
