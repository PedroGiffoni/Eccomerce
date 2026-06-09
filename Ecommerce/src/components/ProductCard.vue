<template>
  <div>
    <h3>{{ product.name }}</h3>

    <p>
      Categoria:
      {{ product.category.title }}
    </p>

    <p>Preço: R$ {{ product.price.toFixed(2) }}</p>

    <button @click="$emit('add-product', product)">Adicionar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Product } from "../models/Product";

export default defineComponent({
  name: "ProductCard",

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },

  emits: ["add-product"],
});
</script>
