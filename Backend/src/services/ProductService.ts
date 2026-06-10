import { randomUUID } from "crypto";

import { Product } from "../entities/Product";

import { ProductRepository } from "../repositories/ProductRepository";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async getAll(page: number, size: number) {
    return this.productRepository.getAllProducts(page, size);
  }

  async getById(id: string) {
    return this.productRepository.getProductById(id);
  }

  async create(name: string, price: number, stock: number, categoryId: string) {
    const category = await this.categoryRepository.getCategoryById(categoryId);

    if (!category) {
      throw new Error("Categoria não encontrada.");
    }

    const product = Product.create(
      randomUUID(),
      name,
      price,
      stock,
      categoryId,
    );

    return this.productRepository.createProduct(product);
  }

  async delete(id: string) {
    const product = await this.productRepository.getProductById(id);

    if (!product) {
      throw new Error("Produto não encontrado.");
    }

    await this.productRepository.deleteProduct(id);
  }
  async update(
    id: string,
    name: string,
    price: number,
    stock: number,
    categoryId: string,
  ) {
    const product = await this.productRepository.getProductById(id);

    if (!product) {
      throw new Error("Produto não encontrado.");
    }

    const category = await this.categoryRepository.getCategoryById(categoryId);

    if (!category) {
      throw new Error("Categoria não encontrada.");
    }

    const updatedProduct = Product.create(id, name, price, stock, categoryId);

    return this.productRepository.updateProduct(updatedProduct);
  }
}
