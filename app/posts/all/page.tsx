import { Metadata } from "next";
import ItemsList from "@/components/home/items-list";
import React from "react";
export const metadata: Metadata = {
  title: "Popular",
  description: "Popular items from the community.",
};
export default function HomePage() {
  return <ItemsList />;
}
