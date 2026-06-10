<template>
  <div class="space-y-10 min-h-screen bg-gradient-to-br from-black to-black p-6 rounded-3xl">
    <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
      <h1 class="text-4xl font-bold mb-2">Finalização de Compra</h1>

      <p class="text-lg opacity-90">Revise seus dados e confirme o pedido com segurança.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card class="lg:col-span-2 shadow-md">
        <template #title> Dados do Cliente </template>

        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-1 font-medium"> Nome completo </label>

              <InputText placeholder="Digite seu nome" class="w-full" />
            </div>

            <div>
              <label class="block mb-1 font-medium"> E-mail </label>

              <InputText placeholder="email@exemplo.com" class="w-full" />
            </div>

            <div class="md:col-span-2">
              <label class="block mb-1 font-medium"> Endereço </label>

              <InputText placeholder="Rua, número, bairro" class="w-full" />
            </div>

            <div>
              <label class="block mb-1 font-medium"> Forma de pagamento </label>

              <Dropdown
                v-model="paymentMethod"
                :options="paymentOptions"
                optionLabel="label"
                placeholder="Selecione"
                class="w-full"
              />
            </div>

            <div>
              <label class="block mb-1 font-medium"> Cupom </label>

              <InputText placeholder="Digite seu cupom" class="w-full" />
            </div>
          </div>
        </template>
      </Card>

      <Card class="shadow-md">
        <template #title> Resumo do Pedido </template>

        <template #content>
          <div v-if="cartItems.length === 0" class="text-center text-gray-500 py-6">
            <i class="pi pi-shopping-cart text-5xl mb-4"></i>

            <p class="font-medium">Seu carrinho está vazio.</p>

            <Button
              label="Voltar para loja"
              icon="pi pi-arrow-left"
              severity="secondary"
              outlined
              class="w-full mt-4"
              @click="$router.push('/')"
            />
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="item in cartItems"
              :key="item.product.id"
              class="flex justify-between border-b pb-3"
            >
              <div>
                <p class="font-semibold">
                  {{ item.product.name }}
                </p>

                <p class="text-sm text-gray-500">Quantidade: {{ item.quantity }}</p>
              </div>

              <strong> R$ {{ (item.product.price * item.quantity).toFixed(2) }} </strong>
            </div>

            <div class="flex justify-between">
              <span>Total de itens</span>
              <strong>{{ totalItems }}</strong>
            </div>

            <div class="flex justify-between">
              <span>Frete</span>
              <strong class="text-green-600">Grátis</strong>
            </div>

            <hr />

            <div class="flex justify-between text-xl">
              <span>Total</span>
              <strong class="text-green-600"> R$ {{ finalPrice.toFixed(2) }} </strong>
            </div>

            <Button
              label="Confirmar Pedido"
              icon="pi pi-check"
              severity="success"
              class="w-full"
              @click="confirmOrder"
            />

            <Button
              label="Voltar para loja"
              icon="pi pi-arrow-left"
              severity="secondary"
              outlined
              class="w-full"
              @click="$router.push('/')"
            />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

import { useCartStore } from "../stores/cartStore";

export default defineComponent({
  name: "CheckoutView",

  components: {
    Card,
    Button,
    InputText,
    Dropdown,
  },

  data() {
    return {
      paymentMethod: null,

      paymentOptions: [
        {
          label: "Cartão de Crédito",
          value: "credit-card",
        },
        {
          label: "Pix",
          value: "pix",
        },
        {
          label: "Boleto",
          value: "boleto",
        },
      ],
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },

    cartItems() {
      return this.cartStore.cartItems;
    },

    totalItems(): number {
      return this.cartStore.totalItems;
    },

    finalPrice(): number {
      return this.cartStore.finalPrice;
    },
  },

  methods: {
    confirmOrder() {
      alert("Pedido confirmado com sucesso!");

      this.cartStore.clearCart();

      this.$router.push("/");
    },
  },
});
</script>
