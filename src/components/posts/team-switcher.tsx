"use client";

import * as React from "react";
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { communities } from "@/data/communities";

const yourCommunities = communities.map((c) => ({
  id: c.id,
  label: c.title,
  value: c.name,
  image: c.icon_img,
}));

console.log(yourCommunities);

const groups = [
  {
    label: "Your profile",
    teams: [
      {
        label: "@doe-joe",
        value: "profile",
      },
    ],
  },
  {
    label: "Your communities",
    teams: yourCommunities,
  },
];

type Team = (typeof groups)[number]["teams"][number] & {
  id: string;
  image?: string;
};

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({
  className,
  value,
  onSelect,
}: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  // const [selectedTeam, setSelectedTeam] = React.useState<Team>(

  // )

  const selectedTeam = yourCommunities.find((c) => c.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a team"
          className={cn("w-[300px] justify-between", className)}
        >
          <Avatar className="mr-2 h-5 w-5">
            {selectedTeam && (
              <AvatarImage
                src={selectedTeam?.image}
                alt={selectedTeam?.label}
                className="grayscale"
              />
            )}
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {selectedTeam?.label || "Select a community"}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search a community..." />
            <CommandEmpty>No team found.</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.teams.map((team) => (
                  <CommandItem
                    value={team.label}
                    key={team.value}
                    onSelect={() => {
                      // setSelectedTeam(team)
                      setOpen(false);

                      onSelect(team);
                    }}
                    className="text-sm"
                  >
                    <Avatar className="mr-2 h-8 w-8">
                      <AvatarImage
                        src={team?.image}
                        alt={team?.label}
                        className="grayscale"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {team.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedTeam?.value === team.value
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <CommandSeparator />
        </Command>
      </PopoverContent>
    </Popover>
  );
}
