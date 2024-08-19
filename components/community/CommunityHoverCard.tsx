"use client";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Community } from "@/data/communities";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { af, when } from "@/lib/utils";
import Link from "next/link";

const CommunityHoverCard: React.FC<{
  community: Community;
  className?: string;
  children?: React.ReactNode;
}> = ({ community, className, children }) => {
  return (
    <HoverCard openDelay={700}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <Link href={`/communities/${community.name}`}>
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={community?.icon_img} alt={community?.name} />
              <AvatarFallback>{community?.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{community?.name}</h4>
              <div className="my-5 mt-3">
                <h3>{community?.title}</h3>
              </div>
              <p className="text-sm">{community?.description}</p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  {when(community?.subscribers)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CommunityHoverCard;
