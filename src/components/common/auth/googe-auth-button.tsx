import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function GoogleAuthButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <Button variant="outline" className="w-full">
        Signin with Google
      </Button>
    </form>
  );
}
