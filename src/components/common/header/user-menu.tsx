"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { USER_MENU } from "@/constants/nav";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const router = useRouter();

  return (
    <>
      {USER_MENU.map((item) => (
        <DropdownMenuItem
          key={item.title}
          onClick={() => router.push(item.href)}
        >
          {item.title}
        </DropdownMenuItem>
      ))}
    </>
  );
}
