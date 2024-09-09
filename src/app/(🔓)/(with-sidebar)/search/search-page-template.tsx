"use client";
import { Container } from "@/components/base/container";
import React from "react";

import SearchNav from "@/components/search/search-nav";
import { useSearchParams } from "next/navigation";

import { useSearch } from "@/queries/search.query";
import CommuntiesResults from "./communities/page";
import PostsResults from "./posts/posts-results";
export interface IBaseWrapperProps {
  children?: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}
const SearchPageTemplate = ({ children }: IBaseWrapperProps) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("s") || "";
  const type = searchParams.get("type") || "posts";
  const { data, isLoading, isError } = useSearch({ q: search, type });

  const types = [PostsResults, CommuntiesResults];

  const Component = types.find((item) => item.name.toLowerCase() === type);

  return (
    <Container>
      <div className="my-10">
        <SearchNav />
      </div>
      <div className="flex items-start justify-between gap-10">{children}</div>
    </Container>
  );
};

export default SearchPageTemplate;
