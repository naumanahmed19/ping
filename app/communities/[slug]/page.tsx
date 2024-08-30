import { Metadata } from "next";
import CommunityPageContnet from "./page-content";

export const metadata: Metadata = {
  title: "Community Title",
  description: "Community Description",
};
export default function Page(): JSX.Element {
  return <CommunityPageContnet />;
}
