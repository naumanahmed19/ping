"use server";

import { getCommunities } from "@/actions/community/get-communities";
import Header from "./_components/header";
import { CommunitiesList } from "./_components/list";

// import { Category } from "@/types/Category";

export default async function Page() {
  const communities = await getCommunities();

  console.log(communities);

  if (!communities) return <>Failed to load categories</>;

  return (
    <>
      <Header />
      <CommunitiesList communities={communities} />
    </>
  );
}
