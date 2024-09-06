import { useAuth } from "@/actions/use-auth";
import MainNavSearch from "@/components/common/header/nav-searchbar";
import { UserNav } from "@/components/common/header/user-nav";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Logo from "../logo";
import { MainNav } from "./main-nav";
import { NavSidebar } from "./nav-sidebar";

export const Header = async () => {
  const { isAuthenticated } = await useAuth();
  const guestButtons = (
    <>
      <Button asChild className="text-sm">
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
      <ThemeCustomizer />
      <UserNav />
    </>
  );

  return (
    <header className="border-b fixed top-0 left-0 right-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 justify-between">
        <NavSidebar className="xl:hidden mr-3" />
        <Logo />
        <MainNavSearch className="flex-1 flex justify-center" />
        <div className="flex items-center space-x-4">
          {isAuthenticated ? userButtons : guestButtons}
        </div>
      </div>
    </header>
  );
};
