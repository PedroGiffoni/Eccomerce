<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card class="shadow-md">
        <template #content>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500">Total de Produtos</p>

              <h2 class="text-3xl font-bold">
                {{ products.length }}
              </h2>
            </div>

            <i class="pi pi-box text-4xl text-blue-600"></i>
          </div>
        </template>
      </Card>

      <Card class="shadow-md">
        <template #content>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500">Categorias</p>

              <h2 class="text-3xl font-bold">3</h2>
            </div>

            <i class="pi pi-tags text-4xl text-green-600"></i>
          </div>
        </template>
      </Card>

      <Card class="shadow-md">
        <template #content>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500">Estoque Total</p>

              <h2 class="text-3xl font-bold">128</h2>
            </div>

            <i class="pi pi-warehouse text-4xl text-purple-600"></i>
          </div>
        </template>
      </Card>
    </div>

    <Card class="shadow-md">
      <template #title>
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold">Gestão de Produtos</h2>

            <p class="text-gray-500 text-sm">Visualize e gerencie os produtos cadastrados.</p>
          </div>

          <Button label="Novo Produto" icon="pi pi-plus" />
        </div>
      </template>

      <template #content>
        <DataTable :value="products" stripedRows paginator :rows="5" tableStyle="min-width: 50rem">
          <Column field="id" header="ID" />

          <Column field="name" header="Produto" />

          <Column field="price" header="Preço">
            <template #body="{ data }"> R$ {{ data.price.toFixed(2) }} </template>
          </Column>

          <Column field="category" header="Categoria" />

          <Column header="Status">
            <template #body>
              <Tag value="Ativo" severity="success" />
            </template>
          </Column>

          <Column header="Ações">
            <template #body>
              <div class="flex gap-2">
                <Button icon="pi pi-pencil" severity="info" size="small" outlined />

                <Button icon="pi pi-trash" severity="danger" size="small" outlined />
              </div>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "primevue/card";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";

export default defineComponent({
  name: "AdminProductsView",

  components: {
    Card,
    Button,
    DataTable,
    Column,
    Tag,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: "Notebook",
          price: 3500,
          category: "Eletrônicos",
        },
        {
          id: 2,
          name: "Mouse Gamer",
          price: 150,
          category: "Eletrônicos",
        },
        {
          id: 3,
          name: "Teclado Mecânico",
          price: 250,
          category: "Eletrônicos",
        },
      ],
    };
  },
});
</script>
