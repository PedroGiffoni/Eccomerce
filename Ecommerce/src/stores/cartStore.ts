import { defineStore } from "pinia";
import type { Product } from "../models/Product";
import type { CartItem } from "../models/CartItem";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),

    finalPrice: (state) =>
      state.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
  },

  actions: {
    addToCart(product: Product) {
      const item = this.cartItems.find((item) => item.product.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        this.cartItems.push({
          product,
          quantity: 1,
        });
      }
    },

    removeFromCart(product: Product) {
      const item = this.cartItems.find((item) => item.product.id === product.id);

      if (!item) return;

      item.quantity--;

      if (item.quantity <= 0) {
        this.removeItem(product);
      }
    },

    removeItem(product: Product) {
      this.cartItems = this.cartItems.filter((item) => item.product.id !== product.id);
    },

    clearCart() {
      this.cartItems = [];
    },
  },
});
