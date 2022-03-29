<template>
  <h2>readonly 與 shallowReadonly</h2>
  <h3>state:{{ state2 }}</h3>
  <button @click="update">更新數據</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, ref, shallowReadonly } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "raq",
      age: 18,
      car: {
        name: "barz",
        color: "black",
      },
    });
    // readonly 深度只讀數據
    // const state2 = readonly(state);
    // shallowReadonly 淺度只讀數據
    const state2 = shallowReadonly(state);
    const update = () => {
      console.log("test");
      // state2.name += "===";
      state2.car.name += "===";
    };
    return {
      state,
      state2,
      update,
    };
  },
});
</script>
