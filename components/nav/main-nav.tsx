import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Delete,
  Loader2,
  MessageCircleIcon,
  Pencil,
  Plus,
  Search as SearchIcon,
} from "lucide-react";
import {
  BellIcon,
  ChatBubbleIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";
import NavNotifications from "./nav-notifications";
import NavChats from "./nav-chats";
import ChatSidebarFilters from "../chat/chat-sidebar-filters";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4", className)} {...props}>
      <Button asChild>
        <Link href="/posts/create">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          <span>Create</span>
        </Link>
      </Button>
      <NavChats />
      <NavNotifications />
      <ModeToggle />
    </nav>
  );
}
