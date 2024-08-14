
import { Metadata } from "next"
import ItemsList from "@/components/items-list"
export const metadata: Metadata = {
  title: "Create Post",
  description: "Example music app using the components.",
}
export default function HomePage() {
  return (
    <ItemsList />
  )
}
