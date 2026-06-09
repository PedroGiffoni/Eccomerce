import { Router } from "express";

import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller";

import { validateData } from "../middlewares/validateData";

import {
  createProductSchema,
  productParamsSchema,
  productQuerySchema,
} from "../schemas/product.schema";

const router = Router();

router.get("/", validateData(productQuerySchema, "query"), getProducts);

router.post("/", validateData(createProductSchema), createProduct);

router.delete(
  "/:id",
  validateData(productParamsSchema, "params"),
  deleteProduct,
);

export default router;
