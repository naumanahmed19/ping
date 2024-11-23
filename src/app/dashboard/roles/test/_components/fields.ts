import { Field } from "@/components/common/form-generator/Field";

export const ROLES_FIELDS: Field[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Role name",
    name: "name",
    type: "text",
  },
  {
    id: "2",
    inputType: "textarea",
    placeholder: "Role description",
    name: "description",
    type: "text",
  },
];

import { z } from "zod";

export const rolesSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});
