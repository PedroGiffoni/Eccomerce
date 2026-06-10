import { z } from "zod";

export const productQueryPaginationSchema = z.object({
  page: z.coerce.number().positive().default(1),
  size: z.coerce.number().positive().default(10),
});

export const productParamsSchema = z.object({
  id: z.uuid(),
});

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, "O nome do produto deve possuir pelo menos 3 caracteres."),

  price: z.number().positive("O preço deve ser maior que zero."),

  stock: z
    .number()
    .int("O estoque deve ser um número inteiro.")
    .min(0, "O estoque não pode ser negativo."),

  categoryId: z.uuid("A categoria deve possuir um UUID válido."),
});

export const updateProductSchema = z.object({
  name: z
    .string()
    .min(3, "O nome do produto deve possuir pelo menos 3 caracteres."),

  price: z.number().positive("O preço deve ser maior que zero."),

  stock: z
    .number()
    .int("O estoque deve ser um número inteiro.")
    .min(0, "O estoque não pode ser negativo."),

  categoryId: z.uuid("A categoria deve possuir um UUID válido."),
});
