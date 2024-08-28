"use client";

import { Metadata } from "next";
import ItemsList from "@/components/items-list";
import { usePosts } from "@/api/posts";
export const metadata: Metadata = {
  title: "Popular",
  description: "Popular items from the community.",
};
export default function HomePage() {
  const { data: posts, isLoading, isError } = usePosts();

  return <ItemsList />;
}
