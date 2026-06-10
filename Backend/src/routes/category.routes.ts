import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryService } from "../services/CategoryService";
import { CategoryController } from "../controllers/category.controller";

import { authMiddleware } from "../middlewares/authMiddleware";
import { authorize } from "../middlewares/authorize";

const router = Router();

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

router.get("/", categoryController.getAll);

router.get("/:id", categoryController.getById);

router.post("/", authMiddleware, authorize("admin"), categoryController.create);

router.put(
  "/:id",
  authMiddleware,
  authorize("admin"),
  categoryController.update,
);

router.delete(
  "/:id",
  authMiddleware,
  authorize("admin"),
  categoryController.delete,
);

export default router;
