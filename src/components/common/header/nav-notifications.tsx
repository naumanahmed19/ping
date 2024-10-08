"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import "@/styles/mdx.css";
import { BellIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { NotificationsListItem } from "@/app/(🔓)/(with-sidebar)/notifications/_components/notifications-list-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import { useLatestNotifications } from "@/queries/notifications.query";
import { Notification as NotificationType } from "@/types/Notification";
import { LoaderCircle } from "lucide-react";

export default function NavNotifications() {
  return (
    <div className="flex items-center gap-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="md:hidden" variant="ghost" size="icon">
            <ActionIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Content />
        </DrawerContent>
      </Drawer>
      <div className="hidden items-center md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <ActionIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="z-40 p-0">
            <Content />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function ActionIcon() {
  return <BellIcon width={20} height={20} className="text-muted-foreground" />;
}

function Content() {
  const { data: notifications, error, isLoading } = useLatestNotifications();

  if (isLoading)
    return (
      <div className="h-[300px]">
        <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
          <LoaderCircle className="h-4 w-4 animate-spin" />
          Loading...
        </div>
      </div>
    );

  return (
    <>
      <div className="flex items-center justify-between text-xs p-2">
        <h3 className="text-xs font-medium">Notifications</h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs"
          onClick={() => {
            toast({
              title: "Notifications cleared",
            });
          }}
        >
          Clear all
        </Button>
      </div>
      <ScrollArea className="h-[300px] px-3 ">
        {notifications?.map((notification: NotificationType) => (
          <NotificationsListItem
            key={notification?.id}
            className="rounded-md p-2 mt-1"
            variant="sm"
            notification={notification}
          />
        ))}
      </ScrollArea>

      <Button variant="ghost" className="w-full mt-2 text-xs" asChild>
        <Link href="/notifications">View all notifications</Link>
      </Button>
    </>
  );
}
