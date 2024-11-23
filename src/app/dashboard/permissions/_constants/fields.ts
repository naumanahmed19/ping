import { FormMessages } from "@/components/common/form-generator";
import { Field } from "@/components/common/form-generator/Field";

export const FIELDS: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Permission name",
    name: "name",
    type: "text",
  },
  {
    id: "2",
    inputType: "textarea",
    placeholder: "Permission description",
    name: "description",
    type: "text",
  },
];

import { z } from "zod";

export const schema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export const messages: FormMessages = {
  success: "Permission saved successfully!",
  error: "Uh oh! Something went wrong.",
};
