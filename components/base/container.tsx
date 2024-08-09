
import { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { playlists } from "@/data/playlists"

import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import MainNavSearch from "@/components/main-nav-search"
import { MenuIcon, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
export const metadata: Metadata = {
    title: "Create Post",
    description: "Example music app using the components.",
}

export interface IBaseWrapperProps {
    children?: React.ReactNode;
}

export function Container({ children }: IBaseWrapperProps) {
    return (
        <>
            <header className="border-b fixed top-0 left-0 right-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center px-4 justify-between">
                    <div className=" lg:hidden">
                        <Sheet>
                            <SheetTrigger><MenuIcon /></SheetTrigger>
                            <SheetContent className=" p-0" side={"left"}>
                                <Sidebar playlists={playlists} />
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/"
                            className="text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2"
                        >
                            <TrendingUp width={20} height={20} />
                            <span>bizbiz</span>
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <MainNavSearch />
                    </div>
                    <div className="flex items-center space-x-4">
                        <MainNav className="hidden md:flex" />
              
                        <UserNav />
                        
                    </div>
                </div>
            </header>
            <main className="pt-16 flex">
                <aside className="bg-background fixed top-16 left-0 bottom-0 w-64 h-full border-r hidden lg:block">
                    <Sidebar playlists={playlists} className="" />
                </aside>
                <div className="ml-64 w-full ">
                    {children}
                </div>
            </main>
        </>
    )
}
