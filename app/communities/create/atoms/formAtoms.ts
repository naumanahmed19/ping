// atoms/formAtoms.ts
import { atom } from "jotai";

export const step1State = atom({
  name: "",
  description: "",
});

export const step2State = atom({
  icon_img: "",
  banner_img: "",
});

export const step3State = atom({
  topics: [],
});

export const step4State = atom({
  privacy: "public",
  mature: false,
  terms: undefined,
});
