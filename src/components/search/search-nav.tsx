// Avatar.tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const SearchNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();

  interface MenuItem {
    label: string;
    href: string;
    route: string;
  }

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

  const handelOnClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: MenuItem,
  ) => {
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
