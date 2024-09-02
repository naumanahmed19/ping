"use client";

import PostsList from "@/components/posts/posts-lists";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
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
        renderItem={(page) => <PostsList posts={page.posts} />}
      />
    </BaseDataPlaceholder>
  );
};

export default LatestPosts;
