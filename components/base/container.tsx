"use client";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/data/playlists";

import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/nav/main-nav";
import MainNavSearch from "@/components/nav/main-nav-search";
import { MenuIcon, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";

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
      <header className="border-b fixed top-0 left-0 right-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 justify-between">
          <div className="xl:hidden mr-3">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="mt-2" />
              </SheetTrigger>
              <SheetContent className="p-0" side={"left"}>
                <Sidebar playlists={playlists} />
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:block">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2"
            >
              <TrendingUp width={20} height={20} />
              <span>bizbiz</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <MainNavSearch />
          </div>
          <div className="flex items-center space-x-4">
            <MainNav className="hidden md:flex" />

            <UserNav />
            <TooltipProvider>
              <ThemeCustomizer />
            </TooltipProvider>
          </div>
        </div>
      </header>
      <main className="pt-16 flex">
        <aside className="bg-background fixed top-16 left-0 bottom-0 w-64 h-full border-r hidden xl:block">
          <Sidebar playlists={playlists} className="" />
        </aside>

        <div
          className={cn(
            "p-4",
            !isGridView ? "md:w-[700px] lg:w-[1000px] mx-auto" : "ml-64",
            className
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
