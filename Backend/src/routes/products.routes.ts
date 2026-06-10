import { Router } from "express";

import { ProductRepository } from "../repositories/ProductRepository";
import { CategoryRepository } from "../repositories/CategoryRepository";

import { ProductService } from "../services/ProductService";
import { ProductController } from "../controllers/product.controller";

import { authMiddleware } from "../middlewares/authMiddleware";
import { authorize } from "../middlewares/authorize";

const router = Router();

const productRepository = new ProductRepository();
const categoryRepository = new CategoryRepository();

const productService = new ProductService(
  productRepository,
  categoryRepository,
);

const productController = new ProductController(productService);

router.get("/", productController.getAll);

router.get("/:id", productController.getById);

router.post("/", authMiddleware, authorize("admin"), productController.create);

router.put(
  "/:id",
  authMiddleware,
  authorize("admin"),
  productController.update,
);

router.delete(
  "/:id",
  authMiddleware,
  authorize("admin"),
  productController.delete,
);

export default router;
