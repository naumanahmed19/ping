"use client";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/data/playlists";

import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/nav/main-nav";
import MainNavSearch from "@/components/nav/nav-searchbar";
import { Aperture, MenuIcon, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ThemeWrapper } from "@/components/theme/theme-wrapper";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="border-b fixed top-0 left-0 right-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="xl:hidden mr-3">
          <Sheet>
            <SheetTrigger>
              <MenuIcon className="mt-2" />
            </SheetTrigger>
            <SheetContent className="p-0" side={"left"}>
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:block">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2"
          >
            <Aperture width={30} height={30} />
            <span>ping</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <MainNavSearch />
        </div>
        <div className="flex items-center space-x-4">
          <MainNav className="hidden md:flex" />
          <TooltipProvider>
            <ThemeCustomizer />
          </TooltipProvider>
          <UserNav />
        </div>
      </div>
    </header>
  );
};
