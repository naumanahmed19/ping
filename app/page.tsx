import { Metadata } from "next";
import HomeContent from "@/components/home/home-content";

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
export default function HomePage() {
  return <HomeContent />;
}
