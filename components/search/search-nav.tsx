// Avatar.tsx
import React from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { User } from "@/data/users";

const SearchNav = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: "Posts", href: "/search", route: `/search` },
    {
      label: "Communities",
      href: "/communities",
      route: `/search/communities`,
    },

    {
      label: "Comments",
      href: "/comments",
      route: `/search/comments`,
    },
    {
      label: "Media",
      href: "/media",
      route: `/search/media`,
    },
    {
      label: "People",
      href: "/people",
      route: `/search/people`,
    },
  ];

  return (
    <NavigationMenu className="mb-6">
      <NavigationMenuList>
        {menuItems.map((item) => {
          return (
            <NavigationMenuItem key={item.label}>
              <Link href={`${item.route}`}>
                <NavigationMenuLink
                  active={pathname === item.route}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default SearchNav;
