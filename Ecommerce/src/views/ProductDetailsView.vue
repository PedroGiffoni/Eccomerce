<template>
  <div class="space-y-6">
    <Button
      label="Voltar"
      icon="pi pi-arrow-left"
      severity="secondary"
      outlined
      @click="$router.push('/')"
    />

    <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card class="shadow-xl rounded-2xl overflow-hidden border-0">
        <template #content>
          <div
            class="h-96 bg-white border border-gray-200 flex items-center justify-center rounded-xl"
          >
            <img :src="selectedImage" :alt="product.name" class="max-h-80 object-contain" />
          </div>

          <div class="flex gap-3 justify-center mt-4">
            <button
              v-for="image in product.images"
              :key="image"
              class="w-20 h-20 border rounded-lg p-2 bg-white hover:scale-105 transition"
              :class="
                selectedImage === image ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
              "
              @click="selectedImage = image"
            >
              <img :src="image" :alt="product.name" class="w-full h-full object-contain" />
            </button>
          </div>
        </template>
      </Card>

      <Card class="shadow-xl rounded-2xl border-0">
        <template #title>
          <div>
            <span class="text-sm text-blue-600 font-semibold"> Produto #{{ product.id }} </span>

            <h1 class="text-4xl font-bold mt-2">
              {{ product.name }}
            </h1>
          </div>
        </template>

        <template #content>
          <div class="space-y-6">
            <p class="text-gray-600 text-lg">
              Produto selecionado do nosso catálogo premium, com alta qualidade, ótima performance e
              excelente custo-benefício.
            </p>

            <div class="flex items-center gap-2 text-yellow-500">
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>

              <span class="text-gray-600 ml-2"> 4.9 avaliações </span>
            </div>

            <div class="bg-gray-50 rounded-xl p-5">
              <p class="text-gray-500">Preço</p>

              <p class="text-4xl font-bold text-green-600">R$ {{ product.price.toFixed(2) }}</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="border rounded-xl p-4">
                <p class="text-sm text-gray-500">Categoria</p>

                <p class="font-semibold">
                  {{ product.category.title }}
                </p>
              </div>

              <div class="border rounded-xl p-4">
                <p class="text-sm text-gray-500">Disponibilidade</p>

                <p class="font-semibold text-green-600">Em estoque</p>
              </div>
            </div>

            <div class="flex gap-3">
              <Button
                label="Adicionar ao Carrinho"
                icon="pi pi-shopping-cart"
                class="flex-1"
                @click="addToCart"
              />

              <Button icon="pi pi-heart" severity="secondary" outlined />
            </div>
          </div>
        </template>
      </Card>
    </div>

    <Card v-else class="shadow-md">
      <template #content>
        <div class="text-center py-10">
          <i class="pi pi-exclamation-triangle text-5xl text-yellow-500"></i>

          <h2 class="text-2xl font-bold mt-4">Produto não encontrado</h2>

          <p class="text-gray-500 mt-2">O produto solicitado não existe no catálogo.</p>

          <Button
            label="Voltar para Home"
            icon="pi pi-home"
            class="mt-4"
            @click="$router.push('/')"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "primevue/card";
import Button from "primevue/button";

import { useCartStore } from "../stores/cartStore";

import type { Product } from "../models/Product";

export default defineComponent({
  name: "ProductDetailsView",

  components: {
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
      selectedImage: "",
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },

    product(): Product | undefined {
      const id = Number(this.$route.params.id);

      return this.products.find((product) => product.id === id);
    },
  },

  mounted() {
    if (this.product) {
      this.selectedImage = this.product.images[0];
    }
  },

  methods: {
    addToCart() {
      if (!this.product) return;

      this.cartStore.addToCart(this.product);

      this.$router.push("/checkout");
    },
  },
});
</script>
