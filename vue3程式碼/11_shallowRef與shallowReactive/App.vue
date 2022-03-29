<template>
  <h2>shallowReactive 與 shallowRef</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>
  <hr />
  <button @click="update">更新數據</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    // 深度響應式
    const m1 = reactive({
      name: "名人",
      age: 20,
      car: {
        name: "Benz",
        color: "red",
      },
    });
    // 淺度響應式
    const m2 = shallowReactive({
      name: "名人",
      age: 20,
      car: {
        name: "Benz",
        color: "red",
      },
    });
    // 深度響應式 --- 做了 reactive 處理
    const m3 = ref({
      name: "名人",
      age: 20,
      car: {
        name: "Benz",
        color: "red",
      },
    });
    // 淺度響應式
    const m4 = shallowRef({
      name: "名人",
      age: 20,
      car: {
        name: "Benz",
        color: "red",
      },
    });
    const update = () => {
      // 更改 m1 的數據 --- reactive
      // m1.name += "==";
      // m1.car.name += "==";
      // 更改 m2 的數據 --- shallowReactive
      // m2.name += "==";
      // m2.car.name += "==";
      // 更改 m3 的數據 --- ref
      //m3.value.name += "===";
      // m3.value.car.name += "===";
      // 更改 m4 的數據 --- shallowRef
      // m4.value.name += "===";
      // m4.value.car.name += "===";
      console.log(m3, m4);
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>
