"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Sidebar } from "../sidebar";

export function NavSidebar({ className }: { className: string }) {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="mt-2" />
        </SheetTrigger>
        <SheetContent className="p-0" side={"left"}>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
