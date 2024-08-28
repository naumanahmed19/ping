"use client";
import React from "react";
import { Post } from "@/data/posts";
import Link from "next/link";
import PostTemplate from "@/components/posts/PostTemplate";
import { cn } from "@/lib/utils";
import PostsFilter from "./posts-filter";
import { PostContainer } from "../base/post-container";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "../ui/skeleton";
import { fetchPosts } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { usePosts } from "@/api/posts";
import { BaseDataPlaceholder } from "../base/base-data-placeholder";

interface PostsList {
  className?: string;
  posts: Post[];
}

const PostsList: React.FC<PostsList> = ({ className, posts }) => {
  return (
    <>
      <PostsFilter />
      <div className={cn("posts-list", className)}>
        {posts?.map((post, index) => (
          <div key={index}>
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
