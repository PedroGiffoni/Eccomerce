<template>
  <div class="min-h-screen bg-gray-100 flex">
    <aside class="w-72 bg-slate-900 text-white min-h-screen p-6 hidden md:block">
      <div class="flex items-center gap-3 mb-10">
        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <i class="pi pi-chart-line text-2xl"></i>
        </div>

        <div>
          <h2 class="text-xl font-bold">Admin Pro</h2>

          <p class="text-sm text-slate-400">Painel de controle</p>
        </div>
      </div>

      <nav class="space-y-3">
        <RouterLink
          to="/admin/products"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <i class="pi pi-box"></i>
          <span>Produtos</span>
        </RouterLink>

        <RouterLink
          to="/admin/reports"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <i class="pi pi-chart-bar"></i>
          <span>Relatórios</span>
        </RouterLink>

        <RouterLink
          to="/"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <i class="pi pi-home"></i>
          <span>Voltar para loja</span>
        </RouterLink>
      </nav>
    </aside>

    <main class="flex-1">
      <header class="bg-white shadow-sm p-5 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold">Dashboard Administrativo</h1>

          <p class="text-gray-500">Gerencie produtos, categorias e relatórios da loja.</p>
        </div>

        <Button label="Admin" icon="pi pi-user" severity="secondary" outlined />
      </header>

      <section class="p-6">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from "primevue/button";

export default defineComponent({
  name: "AdminLayout",

  components: {
    Button,
  },
});
</script>
