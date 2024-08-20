// atoms/formAtoms.ts
import { atom, useAtom } from "jotai";

const query = atom({
  s: "",
});

export const useSearch = () => {
  return useAtom(query);
};
