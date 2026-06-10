import { Category } from "../entities/Category";

export class CategoryResponseDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {}

  static create(category: Category): CategoryResponseDto {
    return new CategoryResponseDto(category.id, category.name);
  }
}

export class CategoryListDto {
  constructor(
    public readonly data: CategoryResponseDto[],
    public readonly page: number,
    public readonly size: number,
  ) {}

  static create(
    categories: Category[],
    page: number,
    size: number,
  ): CategoryListDto {
    return new CategoryListDto(
      categories.map(CategoryResponseDto.create),
      page,
      size,
    );
  }
}
