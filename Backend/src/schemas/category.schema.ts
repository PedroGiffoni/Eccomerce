import { z } from "zod";

export const categoryQueryPaginationSchema = z.object({
  page: z.coerce.number().positive().default(1),
  size: z.coerce.number().positive().default(10),
});

export const categoryParamsSchema = z.object({
  id: z.uuid(),
});

export const createCategorySchema = z.object({
  name: z
    .string()
    .min(3, "O nome da categoria deve possuir pelo menos 3 caracteres."),
});
