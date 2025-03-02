import { z } from "zod";

export const STEP1_VALIDATIONS = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

export const STEP3_VALIDATIONS = z.object({
  topics: z.array(z.number()).min(3, "You must select at least three tag."),
});

export const STEP2_VALIDATIONS = z.object({
  icon_img: z.string().min(1, "Icon is required"),
  banner_img: z.string().min(1, "Banner is required"),
});

export const STEP4_VALIDATIONS = z.object({
  terms: z.boolean().refine((v) => v === true, { message: "Required" }),
  privacy: z.string().min(1, {
    message: "Required",
  }),
  mature: z.boolean().default(false),
});
