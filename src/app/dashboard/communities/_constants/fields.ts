import { FormMessages } from "@/components/common/form-generator";
import { Field } from "@/components/common/form-generator/Field";
import { z } from "zod";

export const COMMUNITIES_FORM: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Community name",
    name: "name",
    type: "text",
  },
  {
    id: "2",
    inputType: "input",
    placeholder: "Community title",
    name: "title",
    type: "text",
  },
];

export const communitySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
});

export const messages: FormMessages = {
  success: "Community saved successfully!",
  error: "Uh oh! Something went wrong.",
};
