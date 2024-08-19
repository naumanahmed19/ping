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
import React, { useState } from "react";

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <Container>
      <div
        onClick={() => setIsOpen(true)}
        role="button"
        className="flex items-center  px-3 rounded-md bg-gray-100"
        cmdk-input-wrapper=""
      >
        <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <div className="flex h-10 w-full border-none rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50">
          Type a command or search...
        </div>
      </div>

      {isOpen && <SearchCommand />}
    </Container>
  );
};

export default SearchPage;

function SearchCommand() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />

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
  );
}
