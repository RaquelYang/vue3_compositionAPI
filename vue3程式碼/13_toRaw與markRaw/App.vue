<template>
  <h2>toRaw 與 markRaw</h2>
  <h3>state:{{ state }}</h3>
  <hr />
  <button @click="textToRaw">測試toRaw</button>
  <button @click="textMarkRaw">測試MarkRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw, markRaw } from "vue";
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: "Ming",
      age: 20,
    });
    const textToRaw = () => {
      // 把代理對象變成一般對象，數據就不是響應式數據，介面不會更改，數據會更改
      const user = toRaw(state);
      user.name += "===";
    };
    const textMarkRaw = () => {
      // state.likes = ["吃", "喝"];
      // state.likes[0] += "==";
      // console.log(state);
      const likes = ["吃", "喝"];
      // markRaw 標記的對象數據，從此就不能成為代理對象，介面不會更改，數據會更改
      state.likes = markRaw(likes);
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += "==";
          console.log("timer");
        }
      }, 1000);
    };
    return {
      state,
      textToRaw,
      textMarkRaw,
    };
  },
});
</script>
