"use client";

import { Container } from "@/components/base/container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="md:flex items-center justify-between">
        <h1 className="text-2xl font-bold my-10">Explore Communities</h1>

        <Button asChild variant="outline">
          <Link href="/communities/create">
            <Plus className="mr-2 h-4 w-4" /> Add Community
          </Link>
        </Button>
      </div>

      {children}
    </Container>
  );
};

export default Layout;
