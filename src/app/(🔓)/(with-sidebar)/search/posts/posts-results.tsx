"use client";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import PostHeader from "@/components/posts/PostHeader";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import SearchPageTemplate from "@/app/(🔓)/(with-sidebar)/search/search-page-template";

import { ContainerAside } from "@/components/base/container-aside";

import { ContainerContent } from "@/components/base/container-content";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { searchState } from "@/lib/atoms";
import { useSearch } from "@/queries/search.query";
import { Post } from "@/types/Post";
import { useAtom } from "jotai";

const PostsResults = () => {
  const [searchQuery] = useAtom(searchState);
  const { data: posts, isLoading, isError } = useSearch(searchQuery);

  return (
    <SearchPageTemplate>
      <ContainerContent>
        <BaseDataPlaceholder
          dataLength={posts?.length}
          isLoading={isLoading}
          isError={isError}
          variant="avatar-list"
        >
          {posts?.map((post: Post, index: number) => (
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
