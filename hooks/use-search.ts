// atoms/formAtoms.ts
import { atom, useAtom } from "jotai";

const query = atom({
  q: "",
});

export const useSearchAtom = () => {
  return useAtom(query);
};

export const step1State = atom({
  name: "",
  description: "",
});
