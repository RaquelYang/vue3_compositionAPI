<template>
  <div>setup and ref 基本使用</div>
  <h3>{{ count }}</h3>
  <button @click="add">click</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  // vue3 組合 api 第一個要使用的函數
  // setup() 只在初始化時執行一次
  // setup() {}
  // 使用 vue2
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   add() {
  //     this.count++;
  //   },
  // },
  // -----------
  // 使用 vue3
  setup() {
    // 此時數據增加時畫面無法跟著改變
    // let count = 0;
    // ref 是一個函數，作用：定義一個響應式數據
    // 返回一個 ref 對象，對象中有一個 value 屬性，如需對數據進行操作，需使用 ref 對象調用 value 屬性的方式進行數據的操作
    // html 模板不需使用 .value 屬性的寫法
    // ref 一般用來定義一個基本類型的響應式數據
    // count 是 ref 類型
    const count = ref(0);
    function add() {
      // count++;
      // 使用 ref 不能直接 count++, 因為 ref 是一個對象,對象無法直接進行 ++
      count.value++;
    }
    return {
      count,
      add,
    };
  },
});
</script>
