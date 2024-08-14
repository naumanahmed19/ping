import Link from "next/link"

import { cn } from "@/lib/utils"
import { Delete, Loader2, MessageCircleIcon, Pencil, Plus, Search as SearchIcon } from "lucide-react";
import { BellIcon, ChatBubbleIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4", className)}
      {...props}
    >
      <Button asChild>
      <Link
        href="/create"
    
      >
        <PlusCircledIcon  className="mr-2 h-4 w-4" />
        <span>Create</span>
      </Link>
      </Button>
      <Button asChild variant="ghost" size="icon">
      <Link
        href="/examples/dashboard"
       className="text-muted-foreground"
      >
        <ChatBubbleIcon  width={20} height={20} />
        
      </Link>
      </Button>
      <Button asChild variant="ghost" size="icon">
      <Link
        href="/examples/dashboard"
        className="text-muted-foreground"
      >
         <BellIcon  width={20} height={20} />
      </Link>
      </Button>
      <ModeToggle />
    </nav>
  )
}
