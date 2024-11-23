import { Field } from "@/components/common/form-generator/Field";

export interface FormProps {
  id: string;
  inputType: string;
  placeholder: string;
  name: string;
  type: string;
}

export const CATEGORIES_FORM: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Category title",
    name: "title",
    type: "text",
  },
  {
    id: "2",
    inputType: "textarea",
    placeholder: "Category description",
    name: "description",
    type: "text",
  },
  {
    id: "3",
    inputType: "select",
    placeholder: "Parent Category",
    name: "parentId",
    type: "text",
  },
];

import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});
