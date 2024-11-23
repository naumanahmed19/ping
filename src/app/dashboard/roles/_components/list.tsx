"use client";
import BaseManager from "@/components/base/base-manager";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { createRole } from "../_actions/create-role";
import { columns } from "../_constants/columns";
import { FIELDS, messages, schema } from "../_constants/fields";
import { Role } from "../_types/Role";

export function List({ roles }: { roles: Role[] }) {
  return (
    <BaseManager
      data={roles}
      columns={columns}
      form={(selectedItem) => (
        <FormGenerator
          defaultValues={selectedItem}
          schema={schema}
          fields={FIELDS}
          onSubmit={createRole}
          messages={messages}
          className="grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Button variant="outline" type="submit">
            Save
          </Button>
        </FormGenerator>
      )}
    />
  );
}
