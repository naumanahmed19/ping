"use server";

import { Category } from "@/types/Category";
import { getCategories } from "./_actions/get-categories";
import { List as CategoriesList } from "./_components/list";

export default async function Page() {
  const result = await getCategories();

  if (!result || "error" in result) return <>Failed to load categories</>;

  const categories: Category[] = result;

  return (
    <>
      <h1 className="text-2xl">Categories</h1>
      <CategoriesList categories={categories} />
    </>
  );
}
