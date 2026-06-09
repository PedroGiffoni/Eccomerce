<template>
  <h1>E-commerce Vue</h1>

  <h2>Produtos</h2>

  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
    @add-product="addToCart"
  />

  <hr />

  <h2>Carrinho</h2>

  <p>
    Total de itens:
    {{ totalItems }}
  </p>

  <p>Preço Final: R$ {{ finalPrice.toFixed(2) }}</p>

  <h3>Itens no Carrinho</h3>

  <ul>
    <li v-for="item in cartItems" :key="item.product.id">
      {{ item.product.name }}
      x
      {{ item.quantity }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductCard from "./components/ProductCard.vue";

import type { Product } from "./models/Product";
import type { CartItem } from "./models/CartItem";

export default defineComponent({
  name: "App",

  components: {
    ProductCard,
  },

  data() {
    const products: Product[] = [
      {
        id: 1,
        name: "Notebook",
        price: 3500,
        category: {
          id: 1,
          title: "Eletrônicos",
        },
      },

      {
        id: 2,
        name: "Mouse Gamer",
        price: 150,
        category: {
          id: 1,
          title: "Eletrônicos",
        },
      },

      {
        id: 3,
        name: "Teclado Mecânico",
        price: 250,
        category: {
          id: 1,
          title: "Eletrônicos",
        },
      },
    ];

    return {
      products,

      cartItems: [] as CartItem[],
    };
  },

  methods: {
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
  },

  computed: {
    totalItems(): number {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },

    finalPrice(): number {
      return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
  },
});
</script>
