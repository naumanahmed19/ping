"use client";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/data/playlists";

import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/nav/main-nav";
import MainNavSearch from "@/components/nav/main-nav-search";
import { MenuIcon, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ThemeWrapper } from "@/components/theme/theme-wrapper";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";
import { Header } from "./header";

export interface IBaseWrapperProps {
  children?: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export function Container({
  children,
  className,
  isFullWidth,
}: IBaseWrapperProps) {
  const [{ postLayout }] = useConfig();
  let isGridView = postLayout === "card";

  return (
    <div>
      <Header />
      <main className="flex">
        <aside className="bg-background fixed top-16 left-0 bottom-0 w-64 h-full border-r hidden xl:block">
          <Sidebar playlists={playlists} className="" />
        </aside>

        <div
          className={cn(
            "p-4 mt-16",
            !isGridView ? "md:w-[700px] lg:w-[1000px] mx-auto" : "ml-64",
            className,
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
