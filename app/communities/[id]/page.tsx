
import { Metadata } from "next"
import Community from "./community";


export const metadata: Metadata = {
  title: "Create Post",
  description: "Example music app using the components.",
}
export default function Page(): JSX.Element {
  return <Community />;
}

