"use client";

import BaseManager from "@/components/base/base-manager";
import { FormGenerator } from "@/components/common/form-generator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { Community } from "@/types/Community";
import { useRouter } from "next/navigation";
import { createCommunity } from "../_actions/create-community";
import { deleteCommunity } from "../_actions/delete-community";
import { columns as baseColumns } from "../_constants/columns";
import { COMMUNITIES_FORM, communitySchema } from "../_constants/fields";

export function CommunitiesList({ communities }: { communities: Community[] }) {
  const router = useRouter();
  const { toast } = useToast();

  // Add avatar column to the base columns
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
    ...baseColumns,
  ];

  const handleSave = async (data: any) => {
    try {
      const response = await createCommunity(data);
      if (response && response.success) {
        toast({ title: "Community saved successfully!" });
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

  const handleDelete = async (community: Community) => {
    try {
      const response = await deleteCommunity(community.id);
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
      data={communities}
      columns={columns}
      reload={reload}
      onDelete={handleDelete}
      resourceName="community"
      form={(selectedItem) => (
        <FormGenerator
          defaultValues={selectedItem}
          schema={communitySchema}
          fields={COMMUNITIES_FORM}
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
            onClick={() => router.push(`/communities/${item.name}`)}
          >
            View
          </DropdownMenuItem>
        </>
      )}
    />
  );
}
