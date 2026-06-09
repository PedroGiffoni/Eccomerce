<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">E-commerce Vue</h1>

    <h2 class="text-2xl mb-4">Produtos</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-product="addToCart"
      />
    </div>

    <div class="mt-10 border-t pt-6">
      <h2 class="text-2xl mb-4">Carrinho</h2>

      <p>
        Total de itens:
        <strong>{{ totalItems }}</strong>
      </p>

      <p>
        Preço Final:
        <strong> R$ {{ finalPrice.toFixed(2) }} </strong>
      </p>

      <h3 class="mt-4 text-xl">Itens</h3>

      <div v-if="cartItems.length === 0">
        <Card>
          <template #content> Seu carrinho está vazio 🛒 </template>
        </Card>
      </div>

      <ul v-else class="list-disc pl-6">
        <li v-for="item in cartItems" :key="item.product.id" class="mb-2">
          {{ item.product.name }}
          x
          {{ item.quantity }}

          <Button
            icon="pi pi-minus"
            severity="warn"
            size="small"
            class="ml-2"
            @click="removeFromCart(item.product)"
          />

          <Button
            icon="pi pi-trash"
            severity="danger"
            size="small"
            class="ml-2"
            @click="removeItem(item.product)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import { defineComponent } from "vue";

import ProductCard from "../components/ProductCard.vue";

import type { Product } from "../models/Product";
import type { CartItem } from "../models/CartItem";

export default defineComponent({
  name: "HomeView",

  components: {
    ProductCard,
    Card,
    Button,
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
    removeFromCart(product: Product) {
      const item = this.cartItems.find((item) => item.product.id === product.id);

      if (!item) return;

      item.quantity--;

      if (item.quantity <= 0) {
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.product.id !== product.id);
      }
    },

    removeItem(product: Product) {
      this.cartItems = this.cartItems.filter((item) => item.product.id !== product.id);
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
