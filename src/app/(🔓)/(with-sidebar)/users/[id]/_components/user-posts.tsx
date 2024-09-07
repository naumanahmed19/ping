"use client";

import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import InfiniteScroll from "@/components/base/infinite-scroll";
import PostsList from "@/components/posts/posts-lists";
import { useGetUserPosts } from "@/queries/users.query";
import { useParams } from "next/navigation";
import * as React from "react";

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
        renderItem={(posts) => <PostsList posts={posts} />}
      />
    </BaseDataPlaceholder>
  );
};

export default UserPosts;
