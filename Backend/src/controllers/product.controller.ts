import { Request, Response } from "express";

import { products } from "../data/products";

export function getProducts(req: Request, res: Response) {
  const { category } = req.query;

  if (category) {
    const filteredProducts = products.filter(
      (product) => product.categoryId === category,
    );

    return res.status(200).json({
      data: filteredProducts,
    });
  }

  return res.status(200).json({
    data: products,
  });
}

export function createProduct(req: Request, res: Response) {
  return res.status(201).json({
    message: "Produto criado com sucesso.",
    data: req.body,
  });
}

export function deleteProduct(req: Request, res: Response) {
  return res.status(204).send();
}
