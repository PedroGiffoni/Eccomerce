<template>
  <div class="flex">
    <div class="w-64 min-h-screen bg-gray-200 p-4">
      <h2 class="font-bold text-xl mb-4">Admin</h2>

      <ul>
        <li>
          <RouterLink to="/admin/products"> Produtos </RouterLink>
        </li>

        <li>
          <RouterLink to="/admin/reports"> Relatórios </RouterLink>
        </li>
      </ul>
    </div>

    <div class="flex-1 p-6">
      <RouterView />
    </div>
  </div>
</template>
