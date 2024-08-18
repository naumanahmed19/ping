/**
 * v0 by Vercel.
 * @see https://v0.dev/t/amAXs53givD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import * as React from "react";
import {
  BellIcon,
  CalendarIcon,
  MoreHorizontal,
  Palette,
  TruckIcon,
} from "lucide-react";

// import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ChatSidebarFilters() {
  return (
    <div className=" items-center md:flex">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <ActionIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="z-40 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950"
        >
          <Customizer />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function ActionIcon() {
  return (
    <MoreHorizontal width={20} height={20} className="text-muted-foreground" />
  );
}

function Customizer() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Notifications</h3>
        <Button variant="ghost" size="sm">
          Clear all
        </Button>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <BellIcon className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New message received</p>
            <p className="text-sm text-muted-foreground">2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <CalendarIcon className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Upcoming event reminder</p>
            <p className="text-sm text-muted-foreground">1 hour ago</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <TruckIcon className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Your order has shipped</p>
            <p className="text-sm text-muted-foreground">4 hours ago</p>
          </div>
        </div>
      </div>
    </>
  );
}
