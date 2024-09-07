import Image from "next/image";
import Link from "next/link";

import GoogleAuthButton from "@/components/common/auth/googe-auth-button";
import SignUpForm from "@/components/common/auth/sign-up";

export default function SingUpPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 ">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <div className="grid gap-4">
            <SignUpForm />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <GoogleAuthButton />
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
