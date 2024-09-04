"use client";

import { Header } from "@/components/common/header";
import { Sidebar } from "@/components/common/sidebar";
import { usePathname } from "next/navigation";

type LayoutProviderProps = {
  children: React.ReactNode;
  excludeSidebarRoutes?: string[];
};

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  excludeSidebarRoutes = ["/chats", "/explore"],
}) => {
  const pathname = usePathname();

  const isRouteHasSidebar = (routeName: string) => {
    return excludeSidebarRoutes?.includes(routeName);
  };

  return (
    <>
      <Header />
      {!isRouteHasSidebar(pathname) && <Sidebar />}
      {children}
    </>
  );
};
