"use client";
import { Container } from "@/components/base/container";
import React from "react";

import SearchNav from "@/components/search/search-nav";
import { useSearchParams } from "next/navigation";

import CommuntiesResults from "./communities/page";
import PostsResults from "./posts/posts-results";
import { useSearch } from "@/queries/search.query";
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
