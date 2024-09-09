"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { af, dt } from "@/lib/utils";
import { User } from "@/types/User";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

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

              {user?.created_at && (
                <span className="text-xs text-muted-foreground">
                  {dt(user.created_at)}
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
