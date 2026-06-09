<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <Toast />

    <Card class="w-full max-w-md shadow-lg">
      <template #title>Login</template>

      <template #content>
        <form @submit.prevent="submitLogin" class="space-y-4">
          <div>
            <label class="block mb-1">E-mail</label>

            <InputText
              v-model="form.email"
              class="w-full"
              :class="{ 'border-red-500': v$.form.email.$error }"
            />

            <small v-if="v$.form.email.$error" class="text-red-500">
              Informe um e-mail válido.
            </small>
          </div>

          <div>
            <label class="block mb-1">Senha</label>

            <Password
              v-model="form.password"
              toggleMask
              :feedback="false"
              class="w-full"
              inputClass="w-full"
              :class="{ 'border-red-500': v$.form.password.$error }"
            />

            <small v-if="v$.form.password.$error" class="text-red-500">
              A senha é obrigatória.
            </small>
          </div>

          <Button type="submit" label="Entrar" class="w-full" :loading="authStore.loading" />

          <RouterLink to="/register" class="block text-center text-blue-600">
            Criar conta
          </RouterLink>
        </form>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Toast from "primevue/toast";

import { useToast } from "primevue/usetoast";
import { useAuthStore } from "../stores/authStore";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default defineComponent({
  name: "LoginView",

  components: {
    Card,
    InputText,
    Password,
    Button,
    Toast,
  },

  setup() {
    const toast = useToast();
    const authStore = useAuthStore();

    return {
      v$: useVuelidate(),
      toast,
      authStore,
    };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },

        password: {
          required,
        },
      },
    };
  },

  methods: {
    async submitLogin() {
      const isValid = await this.v$.$validate();

      if (!isValid) return;

      const success = await this.authStore.login({
        email: this.form.email,
        password: this.form.password,
      });

      if (!success) {
        this.toast.add({
          severity: "error",
          summary: "Erro",
          detail: "Credenciais inválidas",
          life: 3000,
        });

        return;
      }

      this.toast.add({
        severity: "success",
        summary: "Sucesso",
        detail: "Login realizado!",
        life: 3000,
      });

      this.$router.push("/");
    },
  },
});
</script>
