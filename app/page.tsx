
import { Metadata } from "next"
import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { AlbumArtwork } from "@/components/album-artwork"
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder"
import { Sidebar } from "@/components/sidebar"
import { Sidebar as RighSidebar} from "@/components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums"
import { playlists } from "@/data/playlists"

import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import MainNavSearch from "@/components/main-nav-search"
import { Container } from "@/components/base/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import ItemsList from "@/components/items-list"
export const metadata: Metadata = {
  title: "Create Post",
  description: "Example music app using the components.",
}

export default function HomePage() {
  return (
    <>
       

       <ItemsList />
       
    



    </>
  )
}
