import { createApp } from "vue";

import App from "./App.vue";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import { createPinia } from "pinia";
import router from "./router";

import ToastService from "primevue/toastservice";

import "./style.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(createPinia());

app.use(router);

app.use(ToastService);

app.mount("#app");
