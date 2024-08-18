"use client";
import * as React from "react";

import { useParams } from "next/navigation";
import { userData } from "@/data";
import { posts } from "@/data/posts";
import UserHeader from "@/components/user/user-header";
import { PostsRightSidebar } from "@/components/PostsRightSidebar";
import PostsList from "@/components/posts/posts-lists";

import { Container } from "@/components/base/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { communities } from "@/data/communities";
import { CalendarDays, Plus } from "lucide-react";
import { when } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Explore: React.FC = () => {
  const id = useParams().id;

  // Fetch the first post from the data
  //   const user = userData.find((user) => user.id === Number(id));

  //   if (!user) return <p>Not found</p>;

  return (
    <Container>
      <div className="md:flex items-center justify-between">
        <h1 className="text-2xl font-bold my-10">Explore Communities</h1>

        <Button asChild variant="outline">
          <Link href="/communities/create">
            <Plus className="mr-2 h-4 w-4" /> Add Community
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {communities.map((community, index) => (
          <Card className="w-full max-w-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <CardContent className="p-4 bg-background">
              <Link href={`/communities/${community.id}`}>
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
                <p className="text-sm my-3">{community?.description}</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Explore;
