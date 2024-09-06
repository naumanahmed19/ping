import { auth } from "@/auth";
import { atom } from "jotai";

const userAtom = atom<any>(null);

export const useAuth = async () => {
  const session = await auth();
  const user = session?.user;

  const isAuthenticated = user !== null && user !== undefined;

  return { user, isAuthenticated };
};
