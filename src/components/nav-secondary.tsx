"use client";

import { cn } from "@/lib/utils";
import { LogOutIcon, type LucideIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function NavSecondary({
  className,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
} & React.ComponentProps<"ul">) {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs ring-slate-950 transition-all hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 dark:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-slate-500 dark:text-slate-400" />
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium text-slate-500 dark:text-slate-400">
              {item.title}
            </div>
          </Link>
        </li>
      ))}
      <li>
        <Link
          className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs ring-slate-950 transition-all hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 dark:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
          href="#"
          onClick={() => signOut()}
        >
          <LogOutIcon className="h-4 w-4 shrink-0 translate-x-0.5 text-slate-500 dark:text-slate-400" />
          <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium text-slate-500 dark:text-slate-400">
            Sign Out
          </div>
        </Link>
      </li>
    </ul>
  );
}
