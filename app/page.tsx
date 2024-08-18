
import { Metadata } from "next"
import ItemsList from "@/components/items-list"
export const metadata: Metadata = {
  title: "Popular",
  description: "Popular items from the community.",
}
export default function HomePage() {
  return (
    <ItemsList />
  )
}
