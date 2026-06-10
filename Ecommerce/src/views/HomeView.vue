<template>
  <div class="space-y-10 min-h-screen bg-slate p-6 rounded-3xl">
    <section
      class="bg-gradient-to-r from-blue-400 to-indigo-700 text-white rounded-2xl p-10 shadow-xl"
    >
      <div class="max-w-3xl">
        <p class="uppercase tracking-widest text-sm mb-3 opacity-80">
          Tecnologia, performance e estilo
        </p>

        <h1 class="text-5xl font-bold mb-4">Bem-vindo a Eletrocommerce</h1>

        <p class="text-xl mb-6">
          Os melhores produtos de tecnologia para você comprar com praticidade.
        </p>

        <Button label="Ver Produtos" icon="pi pi-shopping-bag" severity="secondary" />
      </div>
    </section>

    <section>
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-3xl font-bold text-white">Produtos em destaque</h2>

          <p class="text-white-500">Escolha seus produtos favoritos e adicione ao carrinho.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-product="addToCart"
        />
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card class="lg:col-span-2 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <template #title>
          <div class="flex items-center gap-2">
            <i class="pi pi-shopping-cart text-blue-600"></i>
            <span>Carrinho de Compras</span>
          </div>
        </template>

        <template #content>
          <div v-if="cartItems.length === 0" class="text-center py-8 text-gray-500">
            <i class="pi pi-shopping-cart text-5xl mb-4"></i>

            <p class="text-lg">Seu carrinho está vazio.</p>

            <p class="text-sm">Adicione produtos para visualizar seu pedido aqui.</p>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="item in cartItems"
              :key="item.product.id"
              class="flex items-center justify-between border rounded-xl p-4"
            >
              <div>
                <p class="font-bold">
                  {{ item.product.name }}
                </p>

                <p class="text-sm text-gray-500">Quantidade: {{ item.quantity }}</p>
              </div>

              <div class="flex items-center gap-2">
                <Button
                  icon="pi pi-minus"
                  severity="warn"
                  size="small"
                  @click="removeFromCart(item.product)"
                />

                <Button
                  icon="pi pi-trash"
                  severity="danger"
                  size="small"
                  @click="removeItem(item.product)"
                />
              </div>
            </div>
          </div>
        </template>
      </Card>

      <Card class="shadow-md">
        <template #title> Resumo do Pedido </template>

        <template #content>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span>Total de itens</span>
              <strong>{{ totalItems }}</strong>
            </div>

            <div class="flex justify-between text-xl">
              <span>Total</span>
              <strong class="text-green-600"> R$ {{ finalPrice.toFixed(2) }} </strong>
            </div>

            <Button
              label="Finalizar Compra"
              icon="pi pi-credit-card"
              class="w-full"
              :disabled="cartItems.length === 0"
              @click="$router.push('/checkout')"
            />
          </div>
        </template>
      </Card>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "primevue/card";
import Button from "primevue/button";

import ProductCard from "../components/ProductCard.vue";

import { useCartStore } from "../stores/cartStore";

import type { Product } from "../models/Product";

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
        image: "/products/notebook1.png",
        images: [
          "/products/notebook1.png",
          "/products/notebook2.png",
          "/products/notebook3.png",
          "/products/notebook4.png",
          "/products/notebook5.png",
        ],
        category: {
          id: 1,
          title: "Eletrônicos",
        },
      },

      {
        id: 2,
        name: "Mouse Gamer",
        price: 150,
        image: "/products/mouse1.png",
        images: [
          "/products/mouse1.png",
          "/products/mouse2.png",
          "/products/mouse3.png",
          "/products/mouse4.png",
          "/products/mouse5.png",
        ],
        category: {
          id: 1,
          title: "Eletrônicos",
        },
      },

      {
        id: 3,
        name: "Teclado Mecânico",
        price: 250,
        image: "/products/teclado1.png",
        images: [
          "/products/teclado1.png",
          "/products/teclado2.png",
          "/products/teclado3.png",
          "/products/teclado4.png",
          "/products/teclado5.png",
        ],
        category: {
          id: 1,
          title: "Eletrônicos",
        },
      },
    ];

    return {
      products,
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },

    cartItems() {
      return this.cartStore.cartItems;
    },

    totalItems(): number {
      return this.cartStore.totalItems;
    },

    finalPrice(): number {
      return this.cartStore.finalPrice;
    },
  },

  methods: {
    addToCart(product: Product) {
      this.cartStore.addToCart(product);
    },

    removeFromCart(product: Product) {
      this.cartStore.removeFromCart(product);
    },

    removeItem(product: Product) {
      this.cartStore.removeItem(product);
    },
  },
});
</script>
