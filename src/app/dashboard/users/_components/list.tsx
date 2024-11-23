"use client";

import BaseManager from "@/components/base/base-manager";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CATEGORIES_FORM, categorySchema } from "./fields";
// import { Category } from "@/types/Category";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export async function List({ users }: { users: User[] }) {
  const router = useRouter();

  const handleSave = async (data: any) => {};

  const columns = [
    {
      header: "Avatar",
      id: "avatar",
      enableHiding: false,
      cell: ({ row }: { row: { original: any } }) => {
        const user = row.original;
        return (
          <div className="w-0">
            <Avatar className="">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback>{user?.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
        );
      },
    },
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
  ];

  return (
    <BaseManager
      data={users}
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
