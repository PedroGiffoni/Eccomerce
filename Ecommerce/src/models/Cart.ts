import type { Product } from "./Product";
import type { CartItem } from "./CartItem";

export class Cart {
  private items: CartItem[] = [];

  addItem(product: Product, quantity: number): void {
    const productExists = this.items.some((item) => item.product.id === product.id);

    if (productExists) {
      const item = this.items.find((item) => item.product.id === product.id);

      if (item) {
        item.quantity += quantity;
      }
    } else {
      this.items.push({
        product,
        quantity,
      });
    }
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getFinalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  getItems(): CartItem[] {
    return this.items;
  }
}
