import { auth } from "@/auth";
import { UserHeader } from "@/components/common/header";
import { GuestHeader } from "@/components/common/header/GuestHeader";
import { Header } from "@/components/common/header/headindex";
import { Sidebar } from "@/components/common/sidebar";
import { GUEST_ROUTES, NO_SIDEBAR_ROUTES } from "@/constants/layout.constants";
// import { getPathname } from "@/lib/utils";

import { Session } from "next-auth";
import { headers } from "next/headers";
import { ReactQueryProvider } from "./react-query-provider";

type LayoutProviderProps = {
  children: React.ReactNode;
  session?: Session | null;
};

export async function getPathname() {
  const heads = headers();
  const pathname = headers().get("x-nextjs-pathname") || "";

  return pathname;
}
export const LayoutProvider: React.FC<LayoutProviderProps> = async ({
  children,
}) => {
  const session = await auth();
  const pathname = await getPathname();

  console.log(pathname, "ccccccccccccccccccc");

  const isAuthenticated = session?.user !== null;
  const isRouteHasSidebar = NO_SIDEBAR_ROUTES?.includes(pathname);
  const isGuestRoute = GUEST_ROUTES.includes(pathname);

  const SiteHeader = () => {
    if (isGuestRoute) return <GuestHeader />;
    if (isAuthenticated) return <UserHeader user={session?.user} />;
    return <Header />;
  };

  const SiteSidebar = () => {
    return !isRouteHasSidebar && <Sidebar />;
  };

  return (
    <>
      {/* <SiteHeader /> */}
      <ReactQueryProvider>
        <SiteSidebar />
        {children}
      </ReactQueryProvider>
    </>
  );
};
