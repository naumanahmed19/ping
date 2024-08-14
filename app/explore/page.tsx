
import { Metadata } from "next"
import Explore from "./explore"
export const metadata: Metadata = {
  title: "Explore",
  description: "Explore new communities",
}
export default function Page() {
  return (
    <Explore />
  )
}
