"use server";

import { getCategories } from "@/actions/categories/get-categories";
import { List as CategoriesList } from "./_components/list";
// import { Category } from "@/types/Category";

export default async function Page() {
  const result = await getCategories();

  if (!result || "error" in result) return <>Failed to load categories</>;

  interface Category {
    id: number;
    title: string;
    parentId: number | null;
  }

  const categories: Category[] = result;

  return (
    <>
      <h1 className="text-2xl">Categories</h1>
      <CategoriesList categories={categories} reload={getCategories} />
    </>
  );
}
