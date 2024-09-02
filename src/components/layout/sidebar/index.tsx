"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

import { ChevronsUpDown, Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import CommunitiesWidget from "@/components/community/communities-widget";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { useGetCommunities } from "@/queries/communities.query";
import { BOTTOM_MENU, TOP_MENU } from "@/constants/sidebar-nav";
import { Menu } from "./menu";
import { CollapsibleSection } from "./collapsible-section";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { data: communities, isLoading, isError } = useGetCommunities();

  return (
    <aside className="overflow-y-auto bg-background fixed top-16 left-0 bottom-0 w-64 h-full border-r hidden xl:block">
      <div className={cn("pb-12", className)}>
        <div className="space-y-4 py-3">
          <Menu items={TOP_MENU} pathname={pathname} />
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
            <Menu items={BOTTOM_MENU} pathname={pathname} />
          </CollapsibleSection>
        </div>
      </div>
    </aside>
  );
}
