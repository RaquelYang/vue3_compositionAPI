<template>
  <h2>響應式數據的判斷</h2>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
  readonly,
} from "vue";

export default defineComponent({
  name: "App",
  // isRef 檢查數據是否為 ref 對象
  // isReactive 檢查數據是否為由 reactive 創建的響應式代理
  // isReadonly 檢查數據是否為 readonly 創建的只讀代理
  // isProxy 檢查數據是否為 readonly 或 reactive 創建的響應式代理
  setup() {
    console.log(isRef(ref({})));
    console.log(isReactive(reactive({})));
    console.log(isReadonly(readonly({})));
    console.log(isProxy(readonly({})));
    console.log(isProxy(reactive({})));
    return {};
  },
});
</script>
