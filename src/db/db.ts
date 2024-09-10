import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
// config({ path: ".env.local" }); // or .env.local
const sql = neon(
  "postgresql://ping_owner:GghT0ZF1DRHb@ep-rough-poetry-a20p3rq8.eu-central-1.aws.neon.tech/ping?sslmode=require"!,
);
export const db = drizzle(sql, { schema });
