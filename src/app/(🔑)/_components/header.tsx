import { GuestButtons } from "@/components/common/header/guest-buttons";
import { Aperture } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b fixed top-0 left-0 right-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 justify-between">
        <div className="hidden md:block">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2"
          >
            <Aperture width={30} height={30} />
            <span>ping</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <GuestButtons />
        </div>
      </div>
    </header>
  );
};
