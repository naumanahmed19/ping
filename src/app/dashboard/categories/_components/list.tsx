"use client"; // Mark the component as a client component

import BaseManager from "@/components/base/base-manager";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { Category } from "@/types/Category";
import { useRouter } from "next/navigation";
import { createCategory } from "../_actions/create-category";
import { deleteCategory } from "../_actions/delete-category";
import { columns } from "../_constants/columns";
import { CATEGORIES_FORM, categorySchema } from "../_constants/fields";

export function List({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const { toast } = useToast();

  const handleSave = async (data: any) => {
    try {
      const response = await createCategory(data);
      if (response && response.success) {
        toast({ title: "Category saved successfully!" });
        router.refresh();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  };

  const handleDelete = async (category: Category) => {
    try {
      const response = await deleteCategory(category.id);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const reload = () => {
    router.refresh();
  };

  return (
    <BaseManager
      data={categories}
      columns={columns}
      reload={reload}
      onDelete={handleDelete}
      resourceName="category"
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
      actions={(item) => (
        <>
          <DropdownMenuItem
            onClick={() => router.push(`/categories/${item.id}`)}
          >
            View
          </DropdownMenuItem>
        </>
      )}
    />
  );
}
