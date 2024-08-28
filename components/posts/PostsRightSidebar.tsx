"use client";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommunitiesWidget from "@/components/community/communities-widget";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { useCommunities } from "@/api/communities";
export function PostsRightSidebar() {
  const { data: communities, isLoading, isError } = useCommunities();

  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="w-[300px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold tracking-tight">
            Popular Communities
          </CardTitle>
        </CardHeader>

        <CardContent>
          <BaseDataPlaceholder
            isLoading={isLoading}
            isError={isError}
            variant="avatar-list"
          >
            <CommunitiesWidget
              communities={communities?.slice(0, visibleCount)}
              hasSubscribers
            />
          </BaseDataPlaceholder>
        </CardContent>
        <CardFooter className="">
          {visibleCount < communities?.length && (
            <Button
              variant="link"
              className="text-xs text-muted-foreground"
              onClick={handleShowMore}
            >
              Show More
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
