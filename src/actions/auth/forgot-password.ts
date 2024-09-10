"use server";

import { ForgotPassowrdSchema } from "@/lib/schemas/auth.schema";

import { z } from "zod";

export const forgotPassword = async (
  values: z.infer<typeof ForgotPassowrdSchema>,
) => {
  const validateFields = ForgotPassowrdSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid credentials." };
  }

  const { email } = validateFields.data;

  try {
    // Send reset link to email
  } catch (error) {
    return { error: "Something went wrong." };
  }
};
