<template>
  <h2>provide 與 inject</h2>
  <p>當前顏色:{{ color }}</p>
  <button @click="color = 'red'">紅色</button>
  <button @click="color = 'yellow'">黃色</button>
  <button @click="color = 'green'">綠色</button>
  <hr />
  <Child />
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: { Child },
  setup() {
    const color = ref("red");
    // 提供數據
    provide("color", color);
    return {
      color,
    };
  },
});
</script>
