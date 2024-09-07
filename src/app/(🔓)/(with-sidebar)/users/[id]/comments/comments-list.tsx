"use client";
import { Post } from "@/data/posts";
import { cn } from "@/lib/utils";
import React from "react";

import { PostContainer } from "@/components/base/post-container";
import PostActions from "@/components/posts/PostActions";
import PostsFilter from "@/components/posts/posts-filter";
import { Separator } from "@/components/ui/separator";
import UserCommentHeader from "@/components/user/user-comment-header";

interface UserComments {
  comments: Array<Post>;
  className?: string;
}

const UserComments: React.FC<UserComments> = ({ comments, className }) => {
  // add for grid view in posts-list
  // className={
  //     isGridView
  //       ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 "
  //       : "md:w-[700px] mx-auto space-y-4"
  //   }

  if (comments.length === 0) return <div>No comments</div>;

  return (
    <div>
      <PostsFilter />
      <div className={cn("posts-list", className)}>
        {comments.map((comment) => (
          <>
            <PostContainer route={`/post/${comment.post.id}`}>
              <UserCommentHeader comment={comment} />
              <p className="text-sm  my-3">{comment.content}</p>
              <PostActions />
            </PostContainer>
            <Separator className="my-4" />
          </>
        ))}
      </div>
    </div>
  );
};

export default UserComments;
