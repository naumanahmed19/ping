import { Metadata } from "next";
import PopularPageContnet from "./page-content";

export const metadata: Metadata = {
  title: "Popular",
  description: "Popular items from the community.",
};
export default function PopularPage() {
  return <PopularPageContnet />;
}
