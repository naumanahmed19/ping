import { useNotifications } from "@/api/notifications";
import React, { useCallback, useState } from "react";

// import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import "@/styles/mdx.css";
import { BellIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import NotificationsListHeader from "@/app/notifications/components/notifications-list-header";
import { ScrollArea } from "../ui/scroll-area";
import { toast } from "../ui/use-toast";
import { useEffect, useRef } from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  LoaderCircle,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import CommunitiesWidget from "@/components/community/communities-widget";

import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCommunities } from "@/api/communities";
import { BaseDataPlaceholder } from "../base/base-data-placeholder";
import PostHeader from "../PostHeader";
import { useSearch, useSearchSuggestions } from "@/api/search";
import UserWidget from "../user/user-widget";
import PostsSuggestions from "../search/posts-suggestions";
export default function NavSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const entries = searchParams.entries();
  const {
    data: suggestions,
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

  useEffect(() => {
    if (!pathname.includes("/search")) {
      const s = searchParams.get("s");
      setSearchTerm(s || "");
    }
  }, [pathname]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("set params");
      createQueryString("s", e.target.value);
      router.push(`/search?s=${e.target.value}`);
      setIsOpen(false);
    }
  };

  function handleOnSelect(chip) {
    setSearchTerm(chip.title);
    setIsOpen(false);
  }

  return (
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
              <CommandList>
                {suggestions?.length == 0 && (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}
                <BaseDataPlaceholder
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
                        communities={suggestions?.communities?.slice(0, 4)}
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
  );
}
