import { FormMessages } from "@/components/common/form-generator";
import { Field } from "@/components/common/form-generator/Field";
import { z } from "zod";
import { getPermissions } from "../../permissions/_actions/get-permissions";

async function getPermissionsOptions() {
  const permissions: any = await getPermissions();
  const permissionOptions: { value: string; label: string }[] = [];
  permissions.forEach((permission: { id: any; name: any }) => {
    permissionOptions.push({
      value: permission.id,
      label: permission.name,
    });
  });
  return permissionOptions;
}

export const FIELDS: Field[] = [
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
  {
    id: "3",
    placeholder: "Select Permissions",
    name: "permissions",
    inputType: "multiselect",
    getOptions: getPermissionsOptions,
  },
];

export const schema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  permissions: z.array(z.number()).optional(),
});

export const messages: FormMessages = {
  success: "Category saved successfully!",
  error: "Uh oh! Something went wrong.",
};
