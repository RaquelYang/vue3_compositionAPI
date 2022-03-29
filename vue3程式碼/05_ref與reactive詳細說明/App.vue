<template>
  <h2>title</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <hr />
  <button @click="update">更新數據</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  // vue3 的 composition API 有兩個重要的響應式 API (ref, reactive)
  // ref 是用來處理基礎數據(value)、 reactive 用來處理對象(object)
  // 若 ref 處理對象(object)，內部會將對象(object)自動轉換成 reactive 的代理對象
  // ref 內部通過 getter, setter 來更改數據
  // reactive 內部通過 proxy 來更改數據(通過 reflect 來更改)
  // ref 在 js 中取的值需要加 .value 在 html 則不需要(html 會自動添加 .value)
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({
      name: "raquel",
      cars: {
        red: "bex",
      },
    });
    // ref 可以傳入對象嗎
    const m3 = ref({
      name: "raquel",
      cars: {
        red: "bex",
      },
    });
    const update = () => {
      // ref 中如果放入的事一個對象，那麼是經過了 reactive 處理，變成 proxy
      console.log(m3);
      m1.value += "===";
      m2.cars.red += "===";
      m3.value.cars.red += "===";
    };
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>
