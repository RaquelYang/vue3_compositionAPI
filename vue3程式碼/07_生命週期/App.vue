<template>
  <h2>App 父級組件</h2>
  <button @click="isShow = !isShow">切換顯示</button>
  <hr />
  <Child v-if="isShow" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: { Child },
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    };
  },
});
</script>
