"use server";
import { auth } from "@/auth";

export const useAuth = async () => {
  const session = await auth();
  const user = session?.user;
  const isAuthenticated = user !== null && user !== undefined;

  return { user, isAuthenticated };
};
