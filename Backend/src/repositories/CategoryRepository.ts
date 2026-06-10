import { connection } from "../database/connection";
import { Category } from "../entities/Category";

export class CategoryRepository {
  async createCategory(category: Category): Promise<Category> {
    await connection.query("INSERT INTO categories (id, name) VALUES (?, ?)", [
      category.id,
      category.name,
    ]);

    return category;
  }

  async getAllCategories(page: number, size: number): Promise<Category[]> {
    const offset = (page - 1) * size;

    const [rows] = await connection.query(
      "SELECT * FROM categories LIMIT ? OFFSET ?",
      [size, offset],
    );

    return rows as Category[];
  }

  async getCategoryById(id: string): Promise<Category | null> {
    const [rows]: any = await connection.query(
      "SELECT * FROM categories WHERE id = ?",
      [id],
    );

    if (rows.length === 0) {
      return null;
    }

    return rows[0] as Category;
  }

  async updateCategory(category: Category): Promise<Category> {
    await connection.query("UPDATE categories SET name = ? WHERE id = ?", [
      category.name,
      category.id,
    ]);

    return category;
  }

  async deleteCategory(id: string): Promise<void> {
    await connection.query("DELETE FROM categories WHERE id = ?", [id]);
  }
}
