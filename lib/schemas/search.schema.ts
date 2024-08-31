import { z } from "zod";

export const searchParamsSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  page: z.number().optional(),
  limit: z.number().optional(),
  sort: z.string().optional(),
});

export type SearchParams = z.infer<typeof searchParamsSchema>;
