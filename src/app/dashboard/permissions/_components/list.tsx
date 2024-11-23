"use client";
import BaseManager from "@/components/base/base-manager";
import { FormGenerator } from "@/components/common/form-generator";
import { Button } from "@/components/ui/button";
import { createPermission } from "../_actions/create-permission";
import { columns } from "../_constants/columns";
import { FIELDS, messages, schema } from "../_constants/fields";
import { Permission } from "../_types/Permission";

export function List({ permissions }: { permissions: Permission[] }) {
  return (
    <BaseManager
      data={permissions}
      columns={columns}
      form={(selectedItem) => (
        <FormGenerator
          defaultValues={selectedItem}
          schema={schema}
          fields={FIELDS}
          onSubmit={createPermission}
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
