<template>
  <h2>CustomRef 的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent, reactive, ref } from "vue";
// value 傳入的數據類型不確定，使用泛型、delay 為延遲時間
function useDebouncedRef<T>(value: T, delay = 200) {
  // 準備一個存儲定時器 id 的變量
  let timeOutId: number;
  return customRef((track, trigger) => {
    return {
      get() {
        // 告訴 vue 追蹤數據
        track();
        return value;
      },
      set(newValue: T) {
        // 清除計時器
        clearTimeout(timeOutId);
        // 開啟定時器
        setTimeout(() => {
          value = newValue;
          // 告訴 vue 更新介面
          trigger();
        }, delay);
      },
    };
  });
}

export default defineComponent({
  name: "App",
  setup() {
    // const keyword = ref("abc");
    const keyword = useDebouncedRef("abc", 500);
    return {
      keyword,
    };
  },
});
</script>
