"use client";

import {
  Atom,
  Bird,
  BookOpen,
  Bot,
  Code2,
  Eclipse,
  Frame,
  History,
  LifeBuoy,
  Map,
  PieChart,
  Rabbit,
  Settings2,
  SquareTerminal,
  Star,
  Turtle,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { StorageCard } from "@/components/storage-card";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
const data = {
  teams: [
    {
      name: "ping panel",
      logo: Atom,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Eclipse,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Rabbit,
      plan: "Free",
    },
  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Auth",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Users",
          url: "/dashboard/users",
          icon: History,
          description: "View your recent prompts",
        },
        {
          title: "Roles",
          url: "/dashboard/roles",
          icon: Star,
          description: "Browse your starred prompts",
        },
        {
          title: "Permissions",
          url: "/dashboard/permissions",
          icon: Settings2,
          description: "Configure your playground",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Categories",
          url: "/dashboard/categories",
          icon: Rabbit,
          description: "Our fastest model for general use cases.",
        },
        {
          title: "Communities",
          url: "/dashboard/communities",
          icon: Bird,
          description: "Performance and speed for efficiency.",
        },
        {
          title: "Posts",
          url: "/dashboard/posts",
          icon: Turtle,
          description: "The most powerful model for complex computations.",
        },
        {
          title: "Comments",
          url: "/dashboard/comments",
          icon: Turtle,
          description: "The most powerful model for complex computations.",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "API",
      url: "#",
      icon: Code2,
      items: [
        {
          title: "Chat",
          url: "#",
        },
        {
          title: "Completion",
          url: "#",
        },
        {
          title: "Images",
          url: "#",
        },
        {
          title: "Video",
          url: "#",
        },
        {
          title: "Speech",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: "View Site",
      url: "/",
      icon: LifeBuoy,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  searchResults: [
    {
      title: "Routing Fundamentals",
      teaser:
        "The skeleton of every application is routing. This page will introduce you to the fundamental concepts routing for web and how handle in Next.js.",
      url: "#",
    },
    {
      title: "Layouts and Templates",
      teaser:
        "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide through how when use these files.",
      url: "#",
    },
    {
      title: "Data Fetching, Caching, and Revalidating",
      teaser:
        "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React Next.js.",
      url: "#",
    },
    {
      title: "Server and Client Composition Patterns",
      teaser:
        "When building React applications, you will need to consider what parts of your application should be rendered on the server or client.",
      url: "#",
    },
    {
      title: "Server Actions and Mutations",
      teaser:
        "Server Actions are asynchronous functions that executed on the server. They can be used in and Client Components to handle form submissions data mutations Next.js applications.",
      url: "#",
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} searchResults={data.searchResults} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Projects</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
        <SidebarItem>
          <StorageCard />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
