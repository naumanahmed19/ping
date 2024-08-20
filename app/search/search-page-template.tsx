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
import PostHeader from "@/components/PostHeader";
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
import PostsResults from "./posts/posts-results";
import SearchNav from "@/components/search/search-nav";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/api/search";
export interface IBaseWrapperProps {
  children?: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}
const SearchPageTemplate = ({ children }: IBaseWrapperProps) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const { data, isLoading, isError } = useSearch(search);

  return (
    <Container>
      <pre>{JSON.stringify(data)}</pre>
      <div className="my-10">
        <SearchNav />
      </div>
      <div className="flex items-start justify-between gap-10">{children}</div>
    </Container>
  );
};

export default SearchPageTemplate;
