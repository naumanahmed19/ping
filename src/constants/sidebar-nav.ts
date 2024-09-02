import {
  BellDotIcon,
  GalleryVerticalEnd,
  Home,
  Newspaper,
  Rocket,
  Telescope,
  Users,
} from "lucide-react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

interface MenuItem {
  href: string;
  icon: React.ComponentType;
  label: string;
}

export const BOTTOM_MENU: MenuItem[] = [
  { href: "/chats", icon: ChatBubbleIcon, label: "Chats" },
  { href: "/notifications", icon: BellDotIcon, label: "Notifications" },
  { href: "/careers", icon: Users, label: "Careers" },
  { href: "/press", icon: Newspaper, label: "Press" },
];

export const TOP_MENU: MenuItem[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/popular", icon: Rocket, label: "Popular" },
  { href: "/explore", icon: Telescope, label: "Explore" },
  { href: "/posts/all", icon: GalleryVerticalEnd, label: "All" },
];
