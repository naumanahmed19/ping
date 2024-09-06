"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  CalendarDays,
  MoreHorizontal,
  Reply,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import { cn, when } from "@/lib/utils";
import Link from "next/link";

import ListItem from "@/components/base/list-items";

export const NotificationsListItem: React.FC<{
  notification: any;
  variant?: "sm" | "md";
  className?: string;
}> = ({ notification, variant, className }) => {
  const Leading = () => {
    let Icon = Bell;
    if (notification.type === "follow") Icon = CalendarDays;
    if (notification.type === "post_upvote") Icon = ThumbsUp;
    if (notification.type === "post_downvote") Icon = ThumbsDown;

    if (notification?.user)
      return (
        <div className=" relative h-8 w-8 ">
          <Avatar className="h-8 w-8 relative">
            <AvatarImage
              src={notification?.user?.avatar}
              alt={notification?.user?.name}
            />

            <AvatarFallback>
              {notification?.user?.display_name?.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <span className="top-5 right-5 absolute p-[1px] dark:border-gray-800 bg-background shadow-lg rounded-full">
            <Reply className="text-primary  h-4 w-4" />
          </span>
        </div>
      );

    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full rounded-full bg-muted text-mutted/80">
        <Icon className="h-4 w-4 " strokeWidth={2} />
      </div>
    );
  };

  const Title = () => {
    return (
      <div className="flex items-start  text-xs ">
        <div className="ml-2 ">
          <div className="flex">
            <div className="font-bold">{notification.message}</div>
            {variant !== "sm" && (
              <div className="text-muted-foreground mx-2 ">
                {when(notification?.created_at)}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="text-muted-foreground mt-1">
              {notification?.comment_snippet || notification.post_title}
            </div>
            {variant !== "sm" && (
              <Button
                variant="outline"
                className="text-xs h-6 items-center gap-1.5 px-2 "
              >
                <Reply width={14} height={14} />
                Reply
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const Trailing = () => {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              {notification.is_read ? "Mark as unread" : "Mark as read"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };
  return (
    <div
      className={cn(
        className,
        notification.is_read ? "bg-background" : "bg-primary/10",
      )}
    >
      <Link href={`/post/${notification.id}`}>
        <ListItem
          leading={<Leading />}
          title={<Title />}
          trailing={<Trailing />}
        />
      </Link>
    </div>
  );
};
