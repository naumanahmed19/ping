"use client";

import { createCategory } from "@/actions/categories/create-category";
import BaseManager from "@/components/base/base-manager";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CATEGORIES_FORM, categorySchema } from "./fields";
// import { Category } from "@/types/Category";

export async function List({ categories, reload }) {
  const router = useRouter();
  interface Category {
    id: number;
    title: string;
    parentId: number | null;
  }

  const formState = {
    name: "",
    description: "",
    parentId: "",
  };

  const handleSave = async (data: any) => {
    console.log("Submitted data", data);
    if (data.id) {
      console.log("Updating category");
    }
    try {
      const response = await createCategory(data);
      console.log("Response", response);
      if (response.success) {
        console.log("Category created successfully");
        router.refresh();
      }
    } catch (error) {
      console.log;
    }
  };

  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "Title", accessorKey: "title" },
  ];

  console.log("Categories", categories);
  return (
    <BaseManager
      data={categories}
      columns={columns}
      reload={reload}
      form={(selectedItem) => (
        <FormGenerator
          defaultValues={selectedItem}
          schema={categorySchema}
          fields={CATEGORIES_FORM}
          onSubmit={handleSave}
          className="grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Button variant="outline" type="submit">
            Save
          </Button>
        </FormGenerator>
      )}
    />
  );
}
