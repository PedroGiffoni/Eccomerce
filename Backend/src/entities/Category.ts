export class Category {
  private constructor(
    public readonly id: string,
    public name: string,
  ) {}

  static create(id: string, name: string): Category {
    if (name.length < 3) {
      throw new Error(
        "O nome da categoria deve possuir pelo menos 3 caracteres.",
      );
    }

    return new Category(id, name);
  }

  rename(newName: string) {
    if (newName.length < 3) {
      throw new Error(
        "O nome da categoria deve possuir pelo menos 3 caracteres.",
      );
    }

    this.name = newName;
  }
}
