"use client";

import { useCallback, useState } from "react";

// import { copyToClipboardWithMeta } from "@/components/copy-button"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import "@/styles/mdx.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import CommunitiesWidget from "@/components/community/communities-widget";
import { useEffect, useRef } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BaseDataPlaceholder } from "../../base/base-data-placeholder";

import { searchState } from "@/lib/atoms";
import { useSearchSuggestions } from "@/queries/search.query";
import { useAtom } from "jotai";
import PostsSuggestions from "../../search/posts-suggestions";
import UserWidget from "../../user/user-widget";

export default function NavSearchBar({ className }: { className?: string }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchQuery, setSearchQuery] = useAtom(searchState);

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const entries = searchParams.entries();
  const {
    data: suggestions = {},
    isLoading,
    isError,
  } = useSearchSuggestions(searchTerm);

  useEffect(() => {
    setIsOpen(false);
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  //On page load, if the pathname includes /search, get the query string and set the search term and search query
  useEffect(() => {
    if (pathname.includes("/search")) {
      const params = Object.fromEntries(searchParams.entries());

      setSearchQuery({
        q: params.q || "",
        type: params.type || "posts",
      });
    } else {
      setSearchTerm("");
      setSearchQuery({
        q: "",
        type: "posts",
      });
    }
  }, [searchParams, pathname]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const query = e.currentTarget.value;
      createQueryString("q", query);

      setSearchQuery({
        ...searchQuery,
        q: query,
      });
      router.push(`/search?q=${query}`);

      setIsOpen(false);
    }
  };

  function handleOnSelect(chip: { title: string }) {
    setSearchTerm(chip.title);
    setIsOpen(false);
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <div className=" items-center md:flex">
          <div
            onClick={() => setIsOpen(true)}
            className="flex items-center h-12 px-3 rounded-md bg-background border md:w-[400px] shadow-sm :hover:cursor-text"
            cmdk-input-wrapper=""
          >
            <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <div className="flex  w-full border-nonebg-transparent text-sm text-muted-foreground :hover:cursor-text ">
              {searchTerm || "Type to search..."}
            </div>
          </div>
          {isOpen && (
            <div ref={ref} className="fixed top-2  md:w-[400px]  p-0  ">
              <Command
                className="rounded-md shadow-lg border"
                onKeyDown={handleKeyDown}
                shouldFilter={false}
                onValueChange={(e) => {
                  // console.log(e, "testzzzz");
                  // createQueryString("s", e);
                  // setSearchTerm(e);
                }}
              >
                <CommandInput
                  className="h-12 text-md"
                  autoFocus
                  value={searchTerm}
                  placeholder={searchTerm}
                  onValueChange={(e) => {
                    // createQueryString("s", e);
                    setSearchTerm(e);
                  }}
                />

                <CommandList className="min-h-64">
                  <BaseDataPlaceholder
                    dataLength={Object?.keys(suggestions).length}
                    isLoading={isLoading}
                    isError={isError}
                    variant="avatar-list"
                  >
                    {suggestions?.users?.length > 0 && (
                      <CommandGroup heading="People">
                        <UserWidget
                          users={suggestions?.users}
                          onSelect={handleOnSelect}
                        />
                      </CommandGroup>
                    )}
                    {suggestions?.communities?.length > 0 && (
                      <CommandGroup heading="Communities">
                        <CommunitiesWidget
                          communities={suggestions?.communities}
                          hasSubscribers={false}
                        />
                      </CommandGroup>
                    )}
                    {suggestions?.posts?.length > 0 && (
                      <CommandGroup heading="Trending Posts">
                        <PostsSuggestions
                          posts={suggestions?.posts}
                          onSelect={function (): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
                      </CommandGroup>
                    )}
                    <CommandSeparator />
                  </BaseDataPlaceholder>
                </CommandList>
              </Command>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
