import { useAuth } from "@/actions/use-auth";
import MainNavSearch from "@/components/common/header/nav-searchbar";
import { UserNav } from "@/components/common/header/user-nav";
import { ThemeCustomizer } from "@/components/theme/theme-customizer";
import Logo from "../logo";
import { GuestButtons } from "./guest-buttons";
import { MainNav } from "./main-nav";
import { NavSidebar } from "./nav-sidebar";

export const Header = async () => {
  const { isAuthenticated } = await useAuth();

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
          {isAuthenticated ? userButtons : <GuestButtons />}
        </div>
      </div>
    </header>
  );
};
