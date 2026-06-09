<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Gestão de Produtos</h1>

    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="id" header="ID" />
      <Column field="name" header="Produto" />
      <Column field="price" header="Preço" />
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default defineComponent({
  components: {
    DataTable,
    Column,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: "Notebook",
          price: 3500,
        },
        {
          id: 2,
          name: "Mouse Gamer",
          price: 150,
        },
        {
          id: 3,
          name: "Teclado Mecânico",
          price: 250,
        },
      ],
    };
  },
});
</script>
