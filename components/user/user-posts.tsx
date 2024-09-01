import * as React from "react";
import { useGetUserPosts } from "@/queries/users.query";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import PostsList from "@/components/posts/posts-lists";
import InfiniteScroll from "@/components/base/infinite-scroll";

interface UserPostsProps {
  userId: number;
}

const UserPosts: React.FC<UserPostsProps> = ({ userId }) => {
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
        key="posts"
        renderItem={(page) => <PostsList posts={page.posts} />}
      />
    </BaseDataPlaceholder>
  );
};

export default UserPosts;
