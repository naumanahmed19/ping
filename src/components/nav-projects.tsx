import { MoreHorizontal, PlusSquare, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function NavProjects({
  projects,
  className,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {projects.map((item) => (
        <li
          key={item.name}
          className="has-[[data-state=open]]:bg-slate-100 has-[[data-state=open]]:text-slate-900 group relative rounded-md hover:bg-slate-100 hover:text-slate-900 dark:has-[[data-state=open]]:bg-slate-800 dark:has-[[data-state=open]]:text-slate-50 dark:hover:bg-slate-800 dark:hover:text-slate-50"
        >
          <Link
            href={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs outline-none ring-slate-950 transition-all hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 dark:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-slate-500 dark:text-slate-400" />
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium">
              {item.name}
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="peer absolute right-1 top-0.5 h-6 w-6 shrink-0 rounded-md bg-slate-100 p-0 text-slate-900 opacity-0 ring-slate-950 transition-all focus-visible:ring-2 group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:bg-slate-100 data-[state=open]:opacity-100 dark:bg-slate-800 dark:text-slate-50 dark:ring-slate-300 dark:data-[state=open]:bg-slate-800"
              >
                <MoreHorizontal className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                <span className="sr-only">Toggle</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start" sideOffset={20}>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      ))}
      <li>
        <button className="flex h-7 w-full items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-left text-xs ring-slate-950 transition-all hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 dark:ring-slate-300 dark:hover:bg-slate-800">
          <PlusSquare className="h-4 w-4 shrink-0 translate-x-0.5 text-slate-500 dark:text-slate-400" />
          <div className="line-clamp-1 overflow-hidden font-medium text-slate-500 dark:text-slate-400">
            Add Project
          </div>
        </button>
      </li>
    </ul>
  );
}
