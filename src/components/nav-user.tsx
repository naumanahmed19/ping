import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md outline-none ring-slate-950 hover:bg-slate-100 focus-visible:ring-2 data-[state=open]:bg-slate-100 dark:ring-slate-300 dark:hover:bg-slate-800 dark:data-[state=open]:bg-slate-800">
        <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm transition-all">
          <Avatar className="h-7 w-7 rounded-md border">
            <AvatarImage
              src={user.avatar}
              alt={user.name}
              className="animate-in fade-in-50 zoom-in-90"
            />
            <AvatarFallback className="rounded-md">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 leading-none">
            <div className="font-medium">{user.name}</div>
            <div className="overflow-hidden text-xs text-slate-500 dark:text-slate-400">
              <div className="line-clamp-1">{user.email}</div>
            </div>
          </div>
          <ChevronsUpDown className="ml-auto mr-0.5 h-4 w-4 text-slate-500/50 dark:text-slate-400/50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
            <Avatar className="h-7 w-7 rounded-md">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1">
              <div className="font-medium">{user.name}</div>
              <div className="overflow-hidden text-xs text-slate-500 dark:text-slate-400">
                <div className="line-clamp-1">{user.email}</div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <BadgeCheck className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <CreditCard className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Bell className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LogOut className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
