"use client";

import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import InfiniteScroll from "@/components/base/infinite-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetCommunities } from "@/queries/communities.query";
import { Community } from "@/types/Community";
import Link from "next/link";

export default function CommmunitesList() {
  const query = useGetCommunities();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      <BaseDataPlaceholder
        isLoading={query.isLoading}
        isError={query.isError}
        count={5}
        variant="avatar-list"
      >
        <InfiniteScroll
          query={query}
          key="posts"
          renderItem={(communities) => <List communities={communities} />}
          placeholderVariant="avatar-list"
        />
      </BaseDataPlaceholder>
    </div>
  );
}

function List({ communities }) {
  return (
    <>
      {communities.map((community: Community) => (
        <Card className="w-full max-w-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <CardContent className="p-4 bg-background">
            <Link href={`/communities/${community.name}`}>
              <div className="flex justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
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
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="h-[24px] items-center gap-1.5 rounded-md border p-[8px] shadow-sm"
                >
                  Join
                </Button>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
