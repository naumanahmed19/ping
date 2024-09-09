"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { User } from "@/types/User";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserNav = ({ user }: { user: User }) => {
  const pathname = usePathname();

  const menuItems = [
    { label: "Overview", href: "", route: `/users/${user?.id}` },
    { label: "Posts", href: "posts", route: `/users/${user?.id}/posts` },
    {
      label: "Comments",
      href: "comments",
      route: `/users/${user?.id}/comments`,
    },
  ];

  return (
    <NavigationMenu className="mb-6">
      <NavigationMenuList>
        {menuItems.map((item) => {
          return (
            <NavigationMenuItem key={item.label}>
              <Link
                href={`/users/${user?.id}/${item?.href}`}
                legacyBehavior
                passHref
              >
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

export default UserNav;
