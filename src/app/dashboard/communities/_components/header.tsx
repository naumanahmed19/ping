import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="p-5 flex justify-between items-center">
      <h1 className=" text-2xl">Community </h1>
      <Button asChild>
        <Link href="/communities/create" target="_blank">
          Add New
        </Link>
      </Button>
    </header>
  );
};

export default Header;
