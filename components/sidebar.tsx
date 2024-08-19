// for tree view https://github.com/shadcn-ui/ui/issues/355#issuecomment-1703767574
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Playlist } from "../data/playlists";
import { MouseEvent, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Favourites from "./community/favourites";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  BadgeHelpIcon,
  BellDotIcon,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Home,
  Newspaper,
  Plus,
  Rocket,
  Rss,
  Telescope,
  Users,
} from "lucide-react";
// import { communities } from "@/data/communities";
import { usePathname, useRouter } from "next/navigation";
import CommunitiesWidget from "./community/communities-widget";
import { useCommunities } from "@/api/communities";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { data: communities, isLoading, isError } = useCommunities();

  const handleNavigation = (
    e: MouseEvent<HTMLButtonElement, MouseEvent>,
    route: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(route);
  };

  const bottomNav = [
    { href: "/chats", icon: ChatBubbleIcon, label: "Chats" },
    { href: "/notifications", icon: BellDotIcon, label: "Notifications" },
    { href: "", icon: Users, label: "Careers" },
    { href: "", icon: Newspaper, label: "Press" },
  ];
  const topNav = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/popular", icon: Rocket, label: "Popular" },
    { href: "/explore", icon: Telescope, label: "Explore" },
    { href: "/posts/all", icon: GalleryVerticalEnd, label: "All" },
  ];

  return (
    <aside className="overflow-y-auto bg-background fixed top-16 left-0 bottom-0 w-64 h-full border-r hidden xl:block">
      <div className={cn("pb-12", className)}>
        <div className="space-y-4 py-3">
          <TopNavItems items={topNav} pathname={pathname} />
          <Separator />

          <CollapsibleSection title="Communities">
            <div className="space-y-1 px-3 py-2">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/communities/create">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-transparent">
                      <Plus />
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-2 mr-2 text-xs text-ellipsis overflow-hidden">
                    Add Community
                  </span>
                </Link>
              </Button>
              <BaseDataPlaceholder
                isLoading={isLoading}
                isError={isError}
                variant="avatar-list"
              >
                <CommunitiesWidget
                  communities={communities?.slice(0, 5)}
                  hasFavourites
                />
              </BaseDataPlaceholder>
            </div>
          </CollapsibleSection>

          <Separator />
          <CollapsibleSection title="Resources">
            <TopNavItems items={bottomNav} pathname={pathname} />
          </CollapsibleSection>
        </div>
      </div>
    </aside>
  );
}

function CollapsibleSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div className="px-3 py-2">
          <Button variant="ghost" className="w-full justify-start ">
            {title}
            <ChevronsUpDown className="h-4 w-4 ml-auto" />
          </Button>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}

interface TopNavItemsProps {
  pathname: string;
  items: { href: string; icon: React.ComponentType<any>; label: string }[];
}

function TopNavItems({ pathname, items = [] }: TopNavItemsProps) {
  return (
    <div className="px-3 py-2">
      <div className="space-y-1">
        {items?.map(({ href, icon: Icon, label }) => (
          <Button
            variant={pathname === href ? "secondary" : "ghost"}
            className={cn("w-full justify-start")}
            asChild
            key={href}
          >
            <Link href={href}>
              <Icon
                className={cn(
                  "h-4 w-4 mr-2 text-muted-foreground",
                  pathname === href && "text-primary",
                )}
              />

              {label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
