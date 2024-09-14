// run seed npx ts-node seed.ts

import { db } from "./db"; // Adjust the import based on your setup
import { permissions, rolePermissions, roles } from "./schema"; // Adjust the import based on your setup

async function seed() {
  // Insert roles
  await db.insert(roles).values([{ name: "admin" }, { name: "user" }]);

  // Insert permissions
  await db
    .insert(permissions)
    .values([{ name: "read" }, { name: "write" }, { name: "delete" }]);

  // Associate roles with permissions
  await db.insert(rolePermissions).values([
    { roleId: 1, permissionId: 1 },
    { roleId: 1, permissionId: 2 },
    { roleId: 1, permissionId: 3 },
    { roleId: 2, permissionId: 1 },
  ]);

  console.log("Seeding completed.");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
});
