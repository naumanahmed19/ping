import { Metadata } from "next";
import ItemsList from "@/components/home/items-list";
import { useGetPosts } from "@/api/posts";
// export const metadata: Metadata = {
//   title: "Popular",
//   description: "Popular items from the community.",
// };
export default function Metadata() {
  const { data: posts, isLoading, isError } = useGetPosts();

  return <ItemsList />;
}
