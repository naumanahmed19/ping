"use client";
import { Container } from "@/components/base/container";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Calendar,
  Smile,
  Calculator,
  User,
  CreditCard,
  Settings,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { Children, useEffect, useState } from "react";
import PostHeader from "@/components/posts/PostHeader";
import { ContainerContent } from "@/components/base/container-content";
import { ContainerAside } from "@/components/base/container-aside";
import { PostsRightSidebar } from "@/components/PostsRightSidebar";
import PostsList from "@/components/posts/posts-lists";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/api";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePosts } from "@/api/posts";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SearchNav from "@/components/search/search-nav";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/api/search";
import CommuntiesResults from "./communities/page";
import PostsResults from "./posts/posts-results";
export interface IBaseWrapperProps {
  children?: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}
const SearchPageTemplate = ({ children }: IBaseWrapperProps) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const type = searchParams.get("type") || "posts";
  const { data, isLoading, isError } = useSearch(search);

  const types = [PostsResults, CommuntiesResults];

  const Component = types.find((item) => item.name.toLowerCase() === type);

  return (
    <Container>
      <pre>{JSON.stringify(data)}</pre>
      <div className="my-10">
        <SearchNav />
      </div>
      <div className="flex items-start justify-between gap-10">
        {children}
        {/* {Component ? <Component searchTerm={search} /> : null}
        <div className="w-80">
          <PostsRightSidebar />
        </div> */}
      </div>
    </Container>
  );
};

export default SearchPageTemplate;
