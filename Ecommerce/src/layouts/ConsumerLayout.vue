<template>
  <div class="min-h-screen bg-slate">
    <Menubar :model="items" class="shadow-md">
      <template #start>
        <div class="flex items-center gap-2">
          <i class="pi pi-shopping-bag text-2xl text-blue-600"></i>
          <span class="font-bold text-xl"> Eletrocommerce </span>
        </div>
      </template>

      <template #end>
        <Button
          v-if="authStore.isAuthenticated"
          label="Logout"
          icon="pi pi-sign-out"
          severity="danger"
          @click="logout"
        />
      </template>
    </Menubar>

    <div class="p-6">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Menubar from "primevue/menubar";
import Button from "primevue/button";

import { useAuthStore } from "../stores/authStore";

export default defineComponent({
  name: "ConsumerLayout",

  components: {
    Menubar,
    Button,
  },

  data() {
    return {
      items: [
        {
          label: "Home",
          command: () => {
            this.$router.push("/");
          },
        },

        {
          label: "Checkout",
          command: () => {
            this.$router.push("/checkout");
          },
        },

        {
          label: "Login",
          command: () => {
            this.$router.push("/login");
          },
        },

        {
          label: "Cadastro",
          command: () => {
            this.$router.push("/register");
          },
        },
      ],
    };
  },

  computed: {
    authStore() {
      return useAuthStore();
    },
  },

  methods: {
    logout() {
      this.authStore.logout();

      this.$router.push("/login");
    },
  },
});
</script>
