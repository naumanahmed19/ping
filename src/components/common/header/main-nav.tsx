import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import NavChats from "./nav-chats";
import NavNotifications from "./nav-notifications";

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
    </nav>
  );
}
