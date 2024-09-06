"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { cn } from "@/lib/utils";
import { ChatBubbleIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Telescope } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChatLayout } from "../../chat/chat-layout";
export default function NavChats() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 z-0">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" disabled={pathname == "/chats"}>
            <ActionIcon />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="md:w-[740px] rounded-lg shadow-lg mx-auto">
          <DrawerHeader className="flex items-center justify-between text-sm py-1">
            <div>
              <Button variant="ghost" asChild>
                <Link href="/explore">
                  <Telescope className="h-6 w-6 mr-2" strokeWidth={1} />
                  Explore channels
                </Link>
              </Button>
            </div>

            <div>
              <Link
                href="/chats"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                )}
              >
                <OpenInNewWindowIcon className="h-6 w-6" />
              </Link>
            </div>
          </DrawerHeader>

          <ChatWindow />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function ActionIcon() {
  return (
    <ChatBubbleIcon width={20} height={20} className="text-muted-foreground" />
  );
}

function ChatWindow() {
  return (
    <>
      <div className="border-t  text-sm lg:flex h-[600px]">
        <ChatLayout
          defaultLayout={[10, 90]}
          defaultCollapsed={true}
          navCollapsedSize={10}
        />
      </div>
    </>
  );
}
