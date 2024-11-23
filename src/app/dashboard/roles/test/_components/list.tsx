"use client";

import BaseManager from "@/components/base/base-manager";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// import { Category } from "@/types/Category";

import { useToast } from "@/components/ui/use-toast";
import { categorySchema } from "../../../categories/_constants/fields";
import { createRole } from "../actions/create-role";
import { Role } from "../types/Role";
export async function List({ roles }: { roles: Role[] }) {
  const router = useRouter();
  const { toast } = useToast();

  const handleSave = async (data: any) => {
    console.log("Submitted data", data);
    if (data.id) {
      console.log("Updating category");
    }
    try {
      const response = await createRole(data);
      console.log("Response", response);
      if (response.success) {
        console.log("Category created successfully");
        router.refresh();
      }
    } catch (error) {
      console.log;
    }
  };

  // const handleSave = (data: any) => {
  //   console.log(data, "pm save data");
  //   createRole(data)
  //     .then((res) => {
  //       if (res.success) {
  //         toast({ title: "Role saved successfully!" });
  //       }
  //     })
  //     .catch((err) => {
  //       toast({
  //         variant: "destructive",
  //         title: "Uh oh! Something went wrong.",
  //         description:
  //           err instanceof Error ? err.message : "An unknown error occurred",
  //       });
  //     });
  // };

  const columns = [
    { header: "Id", accessorKey: "id" },
    { header: "Role name", accessorKey: "name" },
    { header: "Description", accessorKey: "description" },
  ];

  return (
    <BaseManager
      data={roles}
      columns={columns}
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
