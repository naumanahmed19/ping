"use client";
import React from "react";
import PostHeader from "@/components/PostHeader";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { usePosts } from "@/api/posts";
import { useCommunities } from "@/api/communities";
import { ContainerContent } from "@/components/base/container-content";
import SearchPageTemplate from "@/app/search/search-page-template";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface PostsResultsProps {
  searchTerm: string;
}

const PostsResults: React.FC<PostsResultsProps> = ({ searchTerm }) => {
  const { data: communities, isLoading, isError } = useCommunities();
  return (
    <SearchPageTemplate>
      <ContainerContent>
        <BaseDataPlaceholder
          isLoading={isLoading}
          isError={isError}
          variant="avatar-list"
        >
          {communities?.map((community, index) => (
            <div key={index}>
              <Link href={`/communities/${community.id}`}>
                <div className="flex items-start justify-between space-x-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="mt-1">
                      <AvatarImage
                        src={community?.icon_img}
                        alt={community?.name}
                      />
                      <AvatarFallback>
                        {community?.name?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="">
                      <div className="">
                        <h3>{community?.title}</h3>
                      </div>

                      <span className="text-xs text-muted-foreground">
                        {community?.subscribers} Subscribers
                      </span>
                      <p className="text-sm my-3">{community?.description}</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Separator className="my-3" />
            </div>
          ))}
        </BaseDataPlaceholder>
      </ContainerContent>
    </SearchPageTemplate>
  );
};

export default PostsResults;
