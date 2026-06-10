import { Product } from "../entities/Product";

export class ProductResponseDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly stock: number,
    public readonly categoryId: string,
  ) {}

  static create(product: Product): ProductResponseDto {
    return new ProductResponseDto(
      product.id,
      product.name,
      product.price,
      product.stock,
      product.categoryId,
    );
  }
}

export class ProductListDto {
  constructor(
    public readonly data: ProductResponseDto[],
    public readonly page: number,
    public readonly size: number,
  ) {}

  static create(
    products: Product[],
    page: number,
    size: number,
  ): ProductListDto {
    return new ProductListDto(
      products.map(ProductResponseDto.create),
      page,
      size,
    );
  }
}
