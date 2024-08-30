import { Metadata } from "next";
import ExplorePageContnet from "./page-content";
export const metadata: Metadata = {
  title: "Explore",
  description: "Explore new communities",
};
export default function Page() {
  return <ExplorePageContnet />;
}
