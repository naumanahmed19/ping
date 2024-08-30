"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { User } from "@/data/users";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { af, dt } from "@/lib/utils";

const UserHoverCard: React.FC<{
  user: User;
  className?: string;
  children?: React.ReactNode;
}> = ({ user, className, children }) => {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <Link href={`/users/${user?.id}`}>
          <Avatar>
            <AvatarImage src={user?.profile?.avatar} />
            <AvatarFallback>{af(user?.profile?.display_name)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{user?.name}</h4>
            <p className="text-sm">{user?.profile?.display_name}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />

              {user?.created_utc && (
                <span className="text-xs text-muted-foreground">
                  {dt(user.created_utc)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserHoverCard;
