import { Request, Response, NextFunction } from "express";

import { CategoryService } from "../services/CategoryService";

import { CategoryListDto, CategoryResponseDto } from "../dtos/category.dto";

import {
  categoryParamsSchema,
  categoryQueryPaginationSchema,
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/category.schema";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = categoryQueryPaginationSchema.parse(req.query);

      const categories = await this.categoryService.getAll(
        query.page,
        query.size,
      );

      return res
        .status(200)
        .json(CategoryListDto.create(categories, query.page, query.size));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = categoryParamsSchema.parse(req.params);

      const category = await this.categoryService.getById(params.id);

      if (!category) {
        return res.status(404).json({
          message: "Categoria não encontrada.",
        });
      }

      return res.status(200).json(CategoryResponseDto.create(category));
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = createCategorySchema.parse(req.body);

      const category = await this.categoryService.create(body.name);

      return res.status(201).json(CategoryResponseDto.create(category));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = categoryParamsSchema.parse(req.params);
      const body = updateCategorySchema.parse(req.body);

      const category = await this.categoryService.update(params.id, body.name);

      return res.status(200).json(CategoryResponseDto.create(category));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = categoryParamsSchema.parse(req.params);

      await this.categoryService.delete(params.id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
