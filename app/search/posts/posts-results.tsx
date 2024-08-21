"use client";
import React from "react";
import PostHeader from "@/components/PostHeader";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { usePosts } from "@/api/posts";
import SearchPageTemplate from "@/app/search/search-page-template";
import { Container } from "@/components/base/container";
import { PostsRightSidebar } from "@/components/PostsRightSidebar";
import { ContainerAside } from "@/components/base/container-aside";

import SearchNav from "@/components/search/search-nav";
import { ContainerContent } from "@/components/base/container-content";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/api/search";

const PostsResults = () => {
  const searchParams = useSearchParams();
  // const search = searchParams.get("s");
  // const { data: posts, isLoading, isError } = useSearch(search);

  const entries = searchParams.values();
  console.log(entries, "entries");
  const { data: posts, isLoading, isError } = useSearch(entries);
  return (
    <SearchPageTemplate>
      <ContainerContent>
        <BaseDataPlaceholder
          isLoading={isLoading}
          isError={isError}
          variant="avatar-list"
        >
          {posts?.map((post, index) => (
            <div key={index}>
              <Link href={`/post/${post.id}`}>
                <PostHeader
                  key={post.id}
                  post={post}
                  hasActions={false}
                  hasJoinButton={false}
                  isDetailsPage={false}
                />
                <h2 className="text-md font-bold my-3">{post.title}</h2>
              </Link>

              <div className="flex items-center justify-start text-xs space-x-4">
                <div className="text-muted-foreground ">{post.votes} votes</div>
                <div className="text-muted-foreground">
                  {post.comments} comments
                </div>
              </div>
              <Separator className="my-3" />
            </div>
          ))}
        </BaseDataPlaceholder>
      </ContainerContent>
      <ContainerAside>
        <PostsRightSidebar />
      </ContainerAside>
    </SearchPageTemplate>
  );
};

export default PostsResults;
