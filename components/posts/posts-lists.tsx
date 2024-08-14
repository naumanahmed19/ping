'use client';
import React from "react";
import { Post } from "@/data/posts";
import Link from "next/link";
import PostTemplate from "@/components/PostTemplate";
import { cn } from "@/lib/utils";
import PostsFilter from "./posts-filter";
import { PostContainer } from "../base/post-container";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "../ui/skeleton";
import { fetchPosts } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { WithSkeleton } from "../base/with-skeleton";

interface PostsList {
  className?: string;
}

const PostsList: React.FC<PostsList> = ({  className }) => {
      // Fetch the comments data
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });


  
  return (
      <WithSkeleton isLoading={isLoading} items={5} isError={isError} >
      
      
      <PostsFilter />
      <div className={cn("posts-list", className)}>
        {posts?.map((post) => (
          <>
            <PostContainer route={`/post/${post.id}`}>
              <PostTemplate key={post.id} post={post} />
            </PostContainer>
            <Separator className="my-3" />
          </>
        ))}
      </div>

      </WithSkeleton>

    
   
  );
};

export default PostsList;
