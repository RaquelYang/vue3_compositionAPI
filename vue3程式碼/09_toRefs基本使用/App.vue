<template>
  <h2>toRefs 的使用</h2>
  <!-- <h3>name:{{ state.name }}</h3>
  <h3>age:{{ state.age }}</h3> -->
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "Raqqq",
      age: 53,
    });
    // toRefs 可以把一個響應式對象轉換成普通對象，該普通對象每個 property 都是一個 ref
    // const state2 = toRefs(state); --
    // console.log(state2); --
    const { name, age } = toRefs(state);
    // 計時器更新數據（如果數據變化，介面會隨之變化，數據為響應式數據）
    setInterval(() => {
      // state.name += "===";
      // state2.name.value += "==="; --
      name.value += "===";
    }, 2000);
    return {
      // state,
      // 數據被解構後就不是響應式數據了 -> { name:'Raqqq',age: 53}
      //...state,
      // ...state2, --
      name,
      age,
    };
  },
});
</script>
