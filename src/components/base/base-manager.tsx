"use client";
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
}

const BaseManager: React.FC<BaseManagerProps> = ({
  data,
  columns,
  form,
  reload,
  actions,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleRowClick = (row?: any) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };

  const actionsColumn = {
    id: "actions",
    enableHiding: false,

    cell: ({ row }: { row: { original: any } }) => {
      const item = row.original;
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
              <DropdownMenuSeparator />
              {actions && actions(item)}
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
    </>
  );
};

export default BaseManager;
