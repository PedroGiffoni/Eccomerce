import { Request, Response, NextFunction } from "express";

import { ProductService } from "../services/ProductService";

import { ProductListDto, ProductResponseDto } from "../dtos/product.dto";

import {
  createProductSchema,
  productParamsSchema,
  productQueryPaginationSchema,
  updateProductSchema,
} from "../schemas/product.schema";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = productQueryPaginationSchema.parse(req.query);

      const products = await this.productService.getAll(query.page, query.size);

      return res
        .status(200)
        .json(ProductListDto.create(products, query.page, query.size));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = productParamsSchema.parse(req.params);

      const product = await this.productService.getById(params.id);

      if (!product) {
        return res.status(404).json({
          message: "Produto não encontrado.",
        });
      }

      return res.status(200).json(ProductResponseDto.create(product));
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = createProductSchema.parse(req.body);

      const product = await this.productService.create(
        body.name,
        body.price,
        body.stock,
        body.categoryId,
      );

      return res.status(201).json(ProductResponseDto.create(product));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = productParamsSchema.parse(req.params);
      const body = updateProductSchema.parse(req.body);

      const product = await this.productService.update(
        params.id,
        body.name,
        body.price,
        body.stock,
        body.categoryId,
      );

      return res.status(200).json(ProductResponseDto.create(product));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params = productParamsSchema.parse(req.params);

      await this.productService.delete(params.id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
