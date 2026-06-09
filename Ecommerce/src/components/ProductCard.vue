<template>
  <Card class="shadow-lg">
    <template #title>
      {{ product.name }}
    </template>

    <template #content>
      <p>
        Categoria:
        {{ product.category.title }}
      </p>

      <p class="font-bold">R$ {{ product.price.toFixed(2) }}</p>

      <Button label="Adicionar" icon="pi pi-shopping-cart" @click="$emit('add-product', product)" />
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
