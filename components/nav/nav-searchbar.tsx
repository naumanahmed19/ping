import { useNotifications } from "@/api/notifications";
import React, { useState } from "react";

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

import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
export default function NavSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
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

  useEffect(() => {
    if (!pathname.includes("/search")) {
      const search = searchParams.get("s");
      setSearchTerm(search || "");
    }
  }, [pathname]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?s=${searchTerm}`);
      setIsOpen(false);
    }
  };
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
            >
              <CommandInput
                className="h-12 text-md"
                autoFocus
                value={searchTerm}
                onKeyDown={handleKeyDown}
                placeholder={searchTerm}
                onValueChange={(e) => {
                  setSearchTerm(e);
                }}
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem disabled>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </div>
    </div>
  );
}
