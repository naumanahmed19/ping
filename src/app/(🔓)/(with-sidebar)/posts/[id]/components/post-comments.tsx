"use client";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import InfiniteScroll from "@/components/base/infinite-scroll";
import CommentList from "@/components/comments/CommentList";
import ReplyForm from "@/components/comments/ReplyForm";
import { useGetPostComments } from "@/queries/posts.query";

import { useState } from "react";

export default function PostComments({ postId }: { postId: number }) {
  const query = useGetPostComments(postId);
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div>
      <div className="my-3">
        {!showReplyForm && (
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            type="button"
            className="rounded-md border cursor-text  w-full text-left px-5 my-5 py-3  text-sm text-muted-foreground"
          >
            Add a comment
          </button>
        )}

        {showReplyForm && (
          <div className="my-8">
            <ReplyForm
              showReplyForm={showReplyForm}
              onCancel={() => setShowReplyForm(false)}
            />
          </div>
        )}
      </div>

      <BaseDataPlaceholder
        isLoading={query.isLoading}
        isError={query.isError}
        count={5}
        variant="avatar-list"
      >
        <InfiniteScroll
          query={query}
          renderItem={(comments) => <CommentList comments={comments} />}
          placeholderVariant="avatar-list"
        />
      </BaseDataPlaceholder>
    </div>
  );
}
