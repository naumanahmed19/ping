"use client";
import React from "react";
import PostHeader from "@/components/posts/PostHeader";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";

import { ContainerContent } from "@/components/base/container-content";
import SearchPageTemplate from "@/app/search/search-page-template";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/queries/search.query";
import { Community } from "@/types/Community";
import { useAtom } from "jotai";
import { searchState } from "@/lib/atoms";

interface CommuntiesResultsProps {
  searchTerm: string;
}

const CommuntiesResults: React.FC<CommuntiesResultsProps> = ({
  searchTerm,
}) => {
  const [searchQuery] = useAtom(searchState);
  const { data: communities, isLoading, isError } = useSearch(searchQuery);

  return (
    <SearchPageTemplate>
      <ContainerContent>
        <BaseDataPlaceholder
          dataLength={communities?.length}
          isLoading={isLoading}
          isError={isError}
          variant="avatar-list"
        >
          {communities?.map((community: Community, index: number) => (
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

export default CommuntiesResults;
