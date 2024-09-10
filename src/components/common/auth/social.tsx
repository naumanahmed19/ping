"use client";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export function Social() {
  const onClick = async (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <Button variant="ghost" size="sm" onClick={() => onClick("google")}>
      Signin with Google
    </Button>
  );
}
