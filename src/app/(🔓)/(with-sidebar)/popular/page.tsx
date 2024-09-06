import { Metadata } from "next";
import LatestPosts from "./_components/latest-posts";

export const metadata: Metadata = {
  title: "Popular",
  description: "Popular items from the community.",
};
export default function PopularPage() {
  return <LatestPosts />;
}
