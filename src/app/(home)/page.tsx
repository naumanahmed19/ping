import { Metadata } from "next";
import LatestPosts from "./_components/latest-posts";

/**
 * Metadata for the HomePage component.
 * This includes the title and description for the page.
 */
export const metadata: Metadata = {
  title: "Whats New",
  description: "Stay updated with the latest news and updates.",
};

/**
 * HomePage component.
 * This component renders the HomeContent component.
 *
 * @returns {JSX.Element} The rendered HomeContent component.
 */
export default function Home() {
  return <LatestPosts />;
}
