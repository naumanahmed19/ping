import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function GuestButtons() {
  return (
    <>
      <Button asChild className="text-sm">
        <Link href="/login">Sign In</Link>
      </Button>
      <Separator orientation="vertical" className="h-6" />
      <Button asChild variant="ghost" className="text-sm">
        <Link href="/signup">Sign Up</Link>
      </Button>
    </>
  );
}
