<template>
  <h2 :style="{ color }">GreandChild</h2>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject } from "vue";

export default defineComponent({
  name: "GreandChild",
  setup() {
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>
