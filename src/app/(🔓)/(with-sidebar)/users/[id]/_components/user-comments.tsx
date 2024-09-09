"use client";

import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import InfiniteScroll from "@/components/base/infinite-scroll";

import { useGetUserComments } from "@/queries/users.query";
import { Comment } from "@/types/Comment";
import CommentList from "./user-comments-list";
export default function UserComments({ userId }: { userId: number }) {
  const query = useGetUserComments(userId);

  return (
    <div>
      <BaseDataPlaceholder
        isLoading={query.isLoading}
        isError={query.isError}
        count={5}
        variant="avatar-list"
      >
        <InfiniteScroll
          query={query}
          renderItem={(comments: Comment[]) => (
            <CommentList comments={comments} />
          )}
          placeholderVariant="avatar-list"
        />
      </BaseDataPlaceholder>
    </div>
  );
}
