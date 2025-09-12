"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import { Card } from "../ui/card";
import DataTable from "./data-table";
interface Column<T = any> {
  header: string;
  accessor?: string;
  render?: (value: any, row: any) => React.ReactNode;
  custom?: (row: any) => React.ReactNode;
}

interface Action {
  label: string;
  onClick: () => void;
}

interface BaseManagerProps<T = any> {
  data: T[];
  columns: Column[];
  form?: (item: T, index: number) => React.ReactNode;
  actions?: (item: T) => React.ReactNode;
  reload?: () => void;
  // Simplified delete pattern
  onDelete?: (item: T) => Promise<{ success?: string; error?: string }>;
  resourceName?: string;
}

const BaseManager: React.FC<BaseManagerProps> = ({
  data,
  columns,
  form,
  reload,
  actions,
  onDelete,
  resourceName,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null);
  const [deletingIds, setDeletingIds] = useState<(string | number)[]>([]);
  const { toast } = useToast();

  const handleRowClick = (row?: any) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (item: any) => {
    if (!onDelete) return;
    setItemToDelete(item);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!itemToDelete || !onDelete) return;

    // Use convention: try id first, then fall back to _id
    const itemId = itemToDelete.id || itemToDelete._id;
    setDeletingIds((prev) => [...prev, itemId]);
    setDeleteDialogOpen(false);

    try {
      const response = await onDelete(itemToDelete);
      if (response && response.success) {
        toast({ title: response.success });
        if (reload) reload();
      } else if (response && response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: `Failed to delete ${resourceName || "item"}`,
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    } finally {
      setDeletingIds((prev) =>
        prev.filter((deletingId) => deletingId !== itemId),
      );
      setItemToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const actionsColumn = {
    id: "actions",
    enableHiding: false,

    cell: ({ row }: { row: { original: any } }) => {
      const item = row.original;
      // Use convention: try id first, then fall back to _id
      const itemId = item.id || item._id;
      const isDeleting = itemId !== null && deletingIds.includes(itemId);
      const hasDelete = !!onDelete;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {form && (
                <DropdownMenuItem onClick={() => handleRowClick(item)}>
                  Edit
                </DropdownMenuItem>
              )}
              {(form || hasDelete) && actions && <DropdownMenuSeparator />}
              {actions && actions(item)}
              {hasDelete && (
                <>
                  {actions && <DropdownMenuSeparator />}
                  <DropdownMenuItem
                    onClick={() => handleDeleteClick(item)}
                    disabled={isDeleting}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  };

  return (
    <>
      <div className="flex py-2">
        {form && (
          <Button
            variant="default"
            className="ml-auto"
            onClick={() => handleRowClick()}
          >
            Add New
          </Button>
        )}
      </div>
      <Card>
        <DataTable columns={[...columns, actionsColumn]} data={data} />
      </Card>

      {isDialogOpen && form && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogTitle>{selectedRow ? "Edit" : "Create New"} </DialogTitle>
            <DialogClose />

            {form && form(selectedRow, 0)}
          </DialogContent>
        </Dialog>
      )}

      {onDelete && (
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Delete {resourceName || "Item"}
              </AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete "
                {itemToDelete
                  ? itemToDelete.title || itemToDelete.name || itemToDelete.id
                  : ""}
                "? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleDeleteCancel}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default BaseManager;
