<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card class="shadow-md">
        <template #content>
          <p class="text-gray-500">Receita Total</p>

          <h2 class="text-3xl font-bold text-green-600">R$ 18.450</h2>
        </template>
      </Card>

      <Card class="shadow-md">
        <template #content>
          <p class="text-gray-500">Pedidos</p>

          <h2 class="text-3xl font-bold">42</h2>
        </template>
      </Card>

      <Card class="shadow-md">
        <template #content>
          <p class="text-gray-500">Ticket Médio</p>

          <h2 class="text-3xl font-bold">R$ 439</h2>
        </template>
      </Card>

      <Card class="shadow-md">
        <template #content>
          <p class="text-gray-500">Conversão</p>

          <h2 class="text-3xl font-bold text-blue-600">12%</h2>
        </template>
      </Card>
    </div>

    <Card class="shadow-md">
      <template #title> Relatório de Vendas </template>

      <template #content>
        <DataTable :value="sales" stripedRows tableStyle="min-width: 50rem">
          <Column field="id" header="Pedido" />

          <Column field="customer" header="Cliente" />

          <Column field="product" header="Produto" />

          <Column field="total" header="Total">
            <template #body="{ data }"> R$ {{ data.total.toFixed(2) }} </template>
          </Column>

          <Column header="Status">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.status === 'Pago' ? 'success' : 'warn'" />
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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";

export default defineComponent({
  name: "SalesReportView",

  components: {
    Card,
    DataTable,
    Column,
    Tag,
  },

  data() {
    return {
      sales: [
        {
          id: "#1001",
          customer: "Pedro Melo",
          product: "Notebook",
          total: 3500,
          status: "Pago",
        },
        {
          id: "#1002",
          customer: "Ana Lima",
          product: "Mouse Gamer",
          total: 150,
          status: "Pendente",
        },
        {
          id: "#1003",
          customer: "Carlos Souza",
          product: "Teclado Mecânico",
          total: 250,
          status: "Pago",
        },
      ],
    };
  },
});
</script>
