<template>
  <Card
    class="h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
  >
    <template #header>
      <div class="h-40 bg white flex items-center justify-center">
        <img :src="product.image" :alt="product.name" class="h-32 object-contain" />
      </div>
    </template>

    <template #title>
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-xl font-bold">
          {{ product.name }}
        </h3>

        <span class="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">
          {{ product.category.title }}
        </span>
      </div>
    </template>

    <template #content>
      <div class="space-y-4">
        <p class="text-gray-500 text-sm">
          Produto selecionado do nosso catálogo premium de tecnologia.
        </p>

        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-400">Preço</p>

            <p class="text-2xl font-bold text-green-600">R$ {{ product.price.toFixed(2) }}</p>
          </div>

          <div class="flex items-center gap-1 text-yellow-500">
            <i class="pi pi-star-fill"></i>
            <span class="text-sm font-semibold">4.9</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <Button
            label="Detalhes"
            icon="pi pi-eye"
            severity="secondary"
            outlined
            @click="$router.push(`/product/${product.id}`)"
          />

          <Button
            label="Comprar"
            icon="pi pi-shopping-cart"
            @click="$emit('add-product', product)"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Card from "primevue/card";
import Button from "primevue/button";

import type { Product } from "../models/Product";

export default defineComponent({
  name: "ProductCard",

  components: {
    Card,
    Button,
  },

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },

  emits: ["add-product"],
});
</script>
