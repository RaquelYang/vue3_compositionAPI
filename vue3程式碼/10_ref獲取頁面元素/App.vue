<template>
  <h2>ref 的另外一個作用：可以獲取頁面中的元素</h2>
  <input type="text" ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  // 需求：當頁面加載完畢後，頁面的輸入框可以直接 focus 在輸入框
  setup() {
    // 預設值是空的，頁面加載完畢代表組件已經存在，獲取 input
    const inputRef = ref<HTMLElement | null>(null);
    // 頁面加載後的生命週期組合 API
    onMounted(() => {
      inputRef.value && inputRef.value.focus(); // 自動獲取焦點
    });
    return {
      inputRef,
    };
  },
});
</script>
