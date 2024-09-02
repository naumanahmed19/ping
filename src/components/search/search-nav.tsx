// Avatar.tsx
import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();

  const searchParams = useSearchParams();

  const menuItems = [
    { label: "Posts", href: "posts", route: `/search` },
    {
      label: "Communities",
      href: "communities",
      route: `/search/communities`,
    },

    {
      label: "Comments",
      href: "comments",
      route: `/search/comments`,
    },
    {
      label: "Media",
      href: "media",
      route: `/search/media`,
    },
    {
      label: "People",
      href: "people",
      route: `/search/people`,
    },
  ];
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handelOnClick = (e, item) => {
    e.preventDefault();
    router.push(item.route + "?" + createQueryString("type", item.href));
  };

  return (
    <NavigationMenu className="mb-6">
      <NavigationMenuList>
        {menuItems.map((item) => {
          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                onClick={(e) => handelOnClick(e, item)}
                active={pathname === item.route}
                className={navigationMenuTriggerStyle()}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default SearchNav;
