import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
export function SignOutButton() {
  return (
    <form
      className="px-0 py-0"
      action={async () => {
        "use server";
        await signOut();
        // await nextAuthSignOut({ redirect: false });
      }}
    >
      <Button
        type="submit"
        variant="ghost"
        size="sm"
        className="w-full justify-start  relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      >
        Sign Out
      </Button>
    </form>
  );
}
