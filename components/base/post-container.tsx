"use client";
import { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "@/data/playlists";

import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/main-nav";
import MainNavSearch from "@/components/main-nav-search";
import { MenuIcon, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ThemeWrapper } from "@/components/theme/theme-wrapper";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export interface PostContainerProps {
  children?: React.ReactNode;
  className?: string;
  route?: string;
}

export function PostContainer({
  children,
  className,
  route = "",
}: PostContainerProps) {
  const router = useRouter();

  const handleClick = (e, route: string) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(route); // Navigate to the post page
  };

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  return (
    <div
      onClick={(e) => handleClick(e, route)}
      className="relative p-3 rounded-md cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      {children}
    </div>
  );
}
