import { Metadata } from "next";
import CommmunitesList from "./_components/communities-list";
export const metadata: Metadata = {
  title: "Explore",
  description: "Explore new communities",
};
export default function Page() {
  return <CommmunitesList />;
}
