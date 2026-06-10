export class Product {
  private constructor(
    public readonly id: string,
    public name: string,
    public price: number,
    public stock: number,
    public categoryId: string,
  ) {}

  static create(
    id: string,
    name: string,
    price: number,
    stock: number,
    categoryId: string,
  ): Product {
    if (name.length < 3) {
      throw new Error(
        "O nome do produto deve possuir pelo menos 3 caracteres.",
      );
    }

    if (price <= 0) {
      throw new Error("O preço deve ser maior que zero.");
    }

    if (stock < 0) {
      throw new Error("O estoque não pode ser negativo.");
    }

    return new Product(id, name, price, stock, categoryId);
  }
}
