"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useGetUserCommunities } from "@/queries/users.query";
import { Community } from "@/types/Community";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {
  value?: number;
  onSelect?: (team: any) => void;
  className?: string;
}

export default function TeamSwitcher({
  className,
  value,
  onSelect,
}: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  // const [selectedTeam, setSelectedTeam] = React.useState<Team>(

  // )
  const { data: communities, isLoading, isError } = useGetUserCommunities(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const selectedTeam = communities.find((c: Community) => c.id === value);

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
      teams: communities,
    },
  ];

  type Team = (typeof groups)[number]["teams"][number] & {
    id: string;
    image?: string;
  };

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
                {group.teams.map((team: Team) => (
                  <CommandItem
                    value={team.label}
                    key={team.value}
                    onSelect={() => {
                      // setSelectedTeam(team)
                      setOpen(false);

                      if (onSelect) {
                        onSelect(team);
                      }
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
