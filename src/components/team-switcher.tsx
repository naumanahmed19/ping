"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md ring-slate-950 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 data-[state=open]:bg-slate-100 dark:ring-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:data-[state=open]:bg-slate-800">
        <div className="flex items-center gap-1.5 overflow-hidden px-2 py-1.5 text-left text-sm transition-all">
          <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
            <activeTeam.logo className="h-3.5 w-3.5 shrink-0" />
          </div>
          <div className="line-clamp-1 flex-1 pr-2 font-medium">
            {activeTeam.name}
          </div>
          <ChevronsUpDown className="ml-auto h-4 w-4 text-slate-500/50 dark:text-slate-400/50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64"
        align="start"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-slate-500 dark:text-slate-400">
          Teams
        </DropdownMenuLabel>
        {teams.map((team, index) => (
          <DropdownMenuItem
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className="items-start gap-2 px-1.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
              <team.logo className="h-5 w-5 shrink-0" />
            </div>
            <div className="grid flex-1 leading-tight">
              <div className="line-clamp-1 font-medium">{team.name}</div>
              <div className="overflow-hidden text-xs text-slate-500 dark:text-slate-400">
                <div className="line-clamp-1">{team.plan}</div>
              </div>
            </div>
            <DropdownMenuShortcut className="self-center">
              ⌘{index + 1}
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 px-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <Plus className="h-5 w-5" />
          </div>
          <div className="font-medium text-slate-500 dark:text-slate-400">Add workspace</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
