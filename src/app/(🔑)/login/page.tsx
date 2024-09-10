import SignInForm from "@/components/common/auth/signin-form";
import { Social } from "@/components/common/auth/social";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const SignInPage = () => {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignInForm />
          {/* <GoogleAuthButton /> */}
          <Social />

          <div className="flex justify-between mt-4">
            <Button asChild variant="ghost">
              <Link href="/forgot-password" className="underline">
                Forgot password?
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?
        <Link href="/signup" className="underline">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
