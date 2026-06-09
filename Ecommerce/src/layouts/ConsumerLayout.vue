<template>
  <div>
    <Menubar :model="items" />

    <div class="p-6">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menubar from "primevue/menubar";

export default defineComponent({
  name: "ConsumerLayout",

  components: {
    Menubar,
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
      ],
    };
  },
});
</script>
