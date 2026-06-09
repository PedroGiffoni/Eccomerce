import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, "O nome do produto deve possuir pelo menos 3 caracteres."),

  price: z.number().positive("O preço deve ser maior que zero."),

  categoryId: z.uuid("A categoria deve possuir um UUID válido."),
});

export const productParamsSchema = z.object({
  id: z.uuid(),
});

export const productQuerySchema = z.object({
  category: z.string().optional(),
});
