"use client";

import { createCategory } from "@/actions/categories/create-category";
import BaseManager from "@/components/base/base-manager";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Community } from "@/types/Community";
import { useRouter } from "next/navigation";
// import { Category } from "@/types/Category";

export async function CommunitiesList({
  communities,
}: {
  communities: Community[];
}) {
  const router = useRouter();

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
    {
      id: "avatar",
      header: "Avatar",
      enableHiding: true,
      cell: ({ row }: { row: { original: any } }) => {
        const community = row.original;
        return (
          <div className="w-0">
            <Avatar className="">
              <AvatarImage src={community?.icon_img} alt={community?.name} />
              <AvatarFallback>{community?.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
        );
      },
    },
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Title", accessorKey: "title" },
  ];

  return (
    <BaseManager
      data={communities}
      columns={columns}
      actions={(item) => (
        <>
          <Button
            variant="ghost"
            onClick={() => router.push(`/communities/${item.name}`)}
          >
            View
          </Button>
          <Button variant="ghost" onClick={() => console.log("Edit action")}>
            Edit
          </Button>
        </>
      )}
    />
  );
}
