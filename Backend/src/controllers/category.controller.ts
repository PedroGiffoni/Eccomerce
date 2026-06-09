import { Request, Response } from "express";

import { categories } from "../data/categories";

export function getCategories(req: Request, res: Response) {
  const { page, size } = req.query;

  return res.status(200).json({
    message: "Lista de categorias",
    page,
    size,
    data: categories,
  });
}

export function getCategoryById(req: Request, res: Response) {
  const { id } = req.params;

  const category = categories.find((category) => category.id === id);

  return res.status(200).json({
    data: category,
  });
}

export function createCategory(req: Request, res: Response) {
  const category = req.body;

  return res.status(201).json({
    message: "Categoria criada com sucesso.",
    data: category,
  });
}

export function updateCategory(req: Request, res: Response) {
  const { id } = req.params;

  return res.status(200).json({
    message: "Categoria atualizada com sucesso.",
    id,
    data: req.body,
  });
}

export function deleteCategory(req: Request, res: Response) {
  return res.status(204).send();
}
