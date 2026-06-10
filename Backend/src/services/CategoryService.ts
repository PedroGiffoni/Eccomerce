import { randomUUID } from "crypto";

import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getAll(page: number, size: number) {
    return this.categoryRepository.getAllCategories(page, size);
  }

  async getById(id: string) {
    return this.categoryRepository.getCategoryById(id);
  }

  async create(name: string) {
    const category = Category.create(randomUUID(), name);

    return this.categoryRepository.createCategory(category);
  }

  async update(id: string, newName: string) {
    const category = await this.categoryRepository.getCategoryById(id);

    if (!category) {
      throw new Error("Categoria não encontrada.");
    }

    category.rename(newName);

    return this.categoryRepository.updateCategory(category);
  }

  async delete(id: string) {
    const category = await this.categoryRepository.getCategoryById(id);

    if (!category) {
      throw new Error("Categoria não encontrada.");
    }

    await this.categoryRepository.deleteCategory(id);
  }
}
