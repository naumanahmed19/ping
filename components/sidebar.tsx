// for tree view https://github.com/shadcn-ui/ui/issues/355#issuecomment-1703767574
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Playlist } from "../data/playlists";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Favourites from "./favourites";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  ChevronsUpDown,
  GalleryVerticalEnd,
  Home,
  Plus,
  Rocket,
  Telescope,
} from "lucide-react";
import { communities } from "@/data/communities";
import CommunityHoverCard from "./CommunityHoverCard";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  function handleAddCommunity(): void {
    throw new Error("Function not implemented.");
  }

  const handleNavigation = (e, route: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(route);
  };

  const buttons = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/popular", icon: Rocket, label: "Popular" },
    { href: "/explore", icon: Telescope, label: "Explore" },
    { href: "/posts/all", icon: GalleryVerticalEnd, label: "All" },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-3">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {buttons.map(({ href, icon: Icon, label }) => (
              <Button
                variant={pathname === href ? "secondary" : "ghost"}
                className={cn("w-full justify-start")}
                asChild
                key={href}
              >
                <Link href={href}>
                  <Icon
                    className={cn(
                      "h-4 w-4 mr-2 text-primary/40",
                      pathname === href && "text-primary",
                    )}
                  />

                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <Separator />
        <div className="px-3 py-2">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-start mb-3">
                Communities
                <ChevronsUpDown className="h-4 w-4 ml-auto" />
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start"
                >
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
                {communities.slice(0, 5).map((community, index) => (
                  <CommunityHoverCard community={community}>
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={(e) =>
                        handleNavigation(e, `/communities/${community.id}`)
                      }
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={community.icon_img}
                          alt={community.name}
                        />
                        <AvatarFallback>
                          {community.title.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>

                      <span className="ml-2 mr-2 text-xs text-ellipsis overflow-hidden">
                        {community.name}
                      </span>

                      <Favourites className="ml-auto" />
                    </Button>
                  </CommunityHoverCard>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
