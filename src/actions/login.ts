"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/lib/schemas/auth.schema";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid credentials." };
  }

  const { email, password } = validateFields.data;

  console.log("Submitted", email);

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };

        default:
          return { error: "Something went wrong." };
      }
    }
    throw error;
  }
};
