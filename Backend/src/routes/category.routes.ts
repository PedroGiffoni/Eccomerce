import { Router } from "express";

import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";

import { validateData } from "../middlewares/validateData";

import {
  categoryQueryPaginationSchema,
  categoryParamsSchema,
  createCategorySchema,
} from "../schemas/category.schema";

const router = Router();

router.get(
  "/",
  validateData(categoryQueryPaginationSchema, "query"),
  getCategories,
);

router.get(
  "/:id",
  validateData(categoryParamsSchema, "params"),
  getCategoryById,
);

router.post("/", validateData(createCategorySchema), createCategory);

router.put(
  "/:id",
  validateData(categoryParamsSchema, "params"),
  updateCategory,
);

router.delete(
  "/:id",
  validateData(categoryParamsSchema, "params"),
  deleteCategory,
);

export default router;
