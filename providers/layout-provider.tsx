"use client";
import { Sidebar } from "@/components/sidebar";
import { usePathname } from "next/navigation";

type LayoutProviderProps = {
  children: React.ReactNode;
  excludeSidebarRoutes?: string[];
};

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  excludeSidebarRoutes = ["/chats"],
}) => {
  const pathname = usePathname();

  const isRouteHasSidebar = (routeName: string) => {
    return excludeSidebarRoutes?.includes(routeName);
  };

  return (
    <>
      {!isRouteHasSidebar(pathname) && <Sidebar />}
      {children}
    </>
  );
};
