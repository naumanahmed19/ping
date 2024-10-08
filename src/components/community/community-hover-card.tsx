"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { when } from "@/lib/utils";
import { Community } from "@/types/Community";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const CommunityHoverCard: React.FC<{
  community: Community;
  className?: string;
  children?: React.ReactNode;
}> = ({ community, className, children }) => {
  if (!community) return null;

  return (
    <HoverCard openDelay={700}>
      <HoverCardTrigger asChild>{<>{children}</>}</HoverCardTrigger>
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
