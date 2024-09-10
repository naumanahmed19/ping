import ForgotPasswordForm from "@/components/common/auth/forgot-password-form";
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
          <CardTitle className="text-2xl">Forgot Password?</CardTitle>
          <CardDescription>
            Enter your email below to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ForgotPasswordForm />
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
