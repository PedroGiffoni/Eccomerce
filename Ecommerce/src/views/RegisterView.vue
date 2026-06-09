<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <Toast />

    <Card class="w-full max-w-md shadow-lg">
      <template #title>Criar Conta</template>

      <template #content>
        <form @submit.prevent="submitRegister" class="space-y-4">
          <div>
            <label class="block mb-1">Nome</label>

            <InputText
              v-model="form.name"
              class="w-full"
              :class="{ 'border-red-500': v$.form.name.$error }"
            />

            <small v-if="v$.form.name.$error" class="text-red-500"> O nome é obrigatório. </small>
          </div>

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
              class="w-full"
              inputClass="w-full"
              :class="{ 'border-red-500': v$.form.password.$error }"
            />

            <small v-if="v$.form.password.$error" class="text-red-500">
              A senha deve ter no mínimo 6 caracteres.
            </small>
          </div>

          <div>
            <label class="block mb-1">Confirmar Senha</label>

            <Password
              v-model="form.confirmPassword"
              toggleMask
              :feedback="false"
              class="w-full"
              inputClass="w-full"
              :class="{ 'border-red-500': v$.form.confirmPassword.$error }"
            />

            <small v-if="v$.form.confirmPassword.$error" class="text-red-500">
              As senhas não coincidem.
            </small>
          </div>

          <Button type="submit" label="Cadastrar" class="w-full" :loading="authStore.loading" />

          <RouterLink to="/login" class="block text-center text-blue-600">
            Já tenho conta
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
import { required, email, minLength, sameAs } from "@vuelidate/validators";

export default defineComponent({
  name: "RegisterView",

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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  validations() {
    return {
      form: {
        name: {
          required,
        },

        email: {
          required,
          email,
        },

        password: {
          required,
          minLength: minLength(6),
        },

        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.form.password),
        },
      },
    };
  },

  methods: {
    async submitRegister() {
      const isValid = await this.v$.$validate();

      if (!isValid) return;

      const success = await this.authStore.register({
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      });

      if (success) {
        this.toast.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Conta criada com sucesso!",
          life: 3000,
        });

        this.$router.push("/");
      }
    },
  },
});
</script>
