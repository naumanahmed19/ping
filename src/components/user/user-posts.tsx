"use client";

import * as React from "react";
import { useGetUserPosts } from "@/queries/users.query";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import PostsList from "@/components/posts/posts-lists";
import InfiniteScroll from "@/components/base/infinite-scroll";
import { useParams } from "next/navigation";

interface UserPostsProps {}

const UserPosts: React.FC<UserPostsProps> = () => {
  const userId = Number(useParams().id);
  const query = useGetUserPosts(userId);

  return (
    <BaseDataPlaceholder
      isLoading={query.isLoading}
      isError={query.isError}
      count={5}
      variant="posts-list"
    >
      <InfiniteScroll
        query={query}
        dataKey="posts"
        renderItem={(page) => <PostsList posts={page.posts} />}
      />
    </BaseDataPlaceholder>
  );
};

export default UserPosts;
