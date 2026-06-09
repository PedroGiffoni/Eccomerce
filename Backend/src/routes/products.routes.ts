import { Router } from "express";
import type { Request, Response } from "express";

import { products } from "../data/products";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const category = req.query.category as string | undefined;

  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category === category,
    );

    return res.status(200).json(filteredProducts);
  }

  return res.status(200).json(products);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (id < 0) {
    return res.status(400).json({
      message: "O ID do produto não pode ser negativo.",
    });
  }

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Produto não encontrado.",
    });
  }

  return res.status(200).json(product);
});

export default router;
