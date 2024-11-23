"use client";
import { createCategory } from "@/actions/categories/create-category";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CATEGORIES_FORM, categorySchema } from "./fields";

// import { Category } from "@/types/Category";

export async function CategoriesForm() {
  const formState = {
    name: "",
    description: "",
    parentId: "",
  };

  const onSubmit = async (data: any) => {
    const response = await createCategory(data);
    if (response.success) {
      console.log("Category created successfully");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Category</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <FormGenerator
            defaultValues={formState}
            schema={categorySchema}
            fields={CATEGORIES_FORM}
            onSubmit={onSubmit}
            className="grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Button variant="outline" type="submit">
              Save
            </Button>
          </FormGenerator>
        </div>
      </SheetContent>
    </Sheet>
  );
}
