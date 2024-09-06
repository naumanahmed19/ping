"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotificationNav = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Notifications",
      href: "/notifications",
    },
    {
      label: "Messages",
      href: "/notifications/messages",
    },
  ];

  return (
    <NavigationMenu className="mb-6">
      <NavigationMenuList>
        {menuItems.map((item) => {
          return (
            <NavigationMenuItem key={item.label}>
              <Link href={item?.href} legacyBehavior passHref>
                <NavigationMenuLink
                  active={pathname === item.href}
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

export default NotificationNav;
