import { connection } from "../database/connection";
import { Product } from "../entities/Product";

export class ProductRepository {
  async createProduct(product: Product): Promise<Product> {
    await connection.query(
      `
      INSERT INTO products
      (id, name, price, stock, category_id)
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        product.id,
        product.name,
        product.price,
        product.stock,
        product.categoryId,
      ],
    );

    return product;
  }

  async getAllProducts(page: number, size: number): Promise<Product[]> {
    const offset = (page - 1) * size;

    const [rows] = await connection.query(
      `
      SELECT *
      FROM products
      LIMIT ? OFFSET ?
      `,
      [size, offset],
    );

    return rows as Product[];
  }

  async getProductById(id: string): Promise<Product | null> {
    const [rows]: any = await connection.query(
      `
      SELECT *
      FROM products
      WHERE id = ?
      `,
      [id],
    );

    if (rows.length === 0) {
      return null;
    }

    return rows[0] as Product;
  }

  async updateProduct(product: Product): Promise<Product> {
    await connection.query(
      `
      UPDATE products
      SET
        name = ?,
        price = ?,
        stock = ?,
        category_id = ?
      WHERE id = ?
      `,
      [
        product.name,
        product.price,
        product.stock,
        product.categoryId,
        product.id,
      ],
    );

    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    await connection.query(
      `
      DELETE FROM products
      WHERE id = ?
      `,
      [id],
    );
  }
}
