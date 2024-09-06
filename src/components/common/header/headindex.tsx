"use client";
import { MainNav } from "@/components/common/header/main-nav";
import MainNavSearch from "@/components/common/header/nav-searchbar";
import { UserNav } from "@/components/common/header/user-nav";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@radix-ui/react-separator";
import { Aperture, MenuIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Sidebar } from "../sidebar";

export const Header = () => {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";

  const guestButtons = (
    <>
      <Button asChild variant="ghost" className="text-sm">
        <Link href="/login">Sign In</Link>
      </Button>
      <Separator orientation="vertical" className="h-6" />
      <Button asChild variant="ghost" className="text-sm">
        <Link href="/signup">Sign Up</Link>
      </Button>
    </>
  );

  const userButtons = (
    <>
      <MainNav className="hidden md:flex" />
      <TooltipProvider>
        <ThemeCustomizer />
      </TooltipProvider>

      <UserNav />
    </>
  );

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
          {isAuthenticated ? userButtons : guestButtons}
        </div>
      </div>
    </header>
  );
};
