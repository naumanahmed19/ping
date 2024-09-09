import PostTemplate from "@/components/posts/PostTemplate";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

import { Post } from "@/types/Post";
import { PostContainer } from "../base/post-container";

interface PostsList {
  className?: string;
  posts: Post[];
}

const PostsList: React.FC<PostsList> = ({ className, posts }) => {
  return (
    <>
      <div className={cn("posts-list", className)}>
        {posts?.map((post, index) => (
          <div className="animate-slideInFromBottom" key={index}>
            <PostContainer route={`/posts/${post.id}`}>
              <PostTemplate key={post.id} post={post} />
            </PostContainer>
            <Separator className="my-3" />
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsList;
