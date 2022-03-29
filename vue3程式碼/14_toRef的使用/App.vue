<template>
  <h2>toRef 的使用與特點：</h2>
  <h3>state:{{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <button @click="update">更新數據</button>
  <hr />
  <Child :age="age" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: { Child },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    });
    // 把響應式數據 state 對象中的 age 屬性變成 ref 對象
    const age = toRef(state, "age");
    // 把響應式數據中的某個屬性使用 ref 進行包裝，變成一個 ref 對象
    const money = ref(state.money);
    console.log(age);
    console.log(money);
    const update = () => {
      console.log("test");
      state.age += 2;
      // age.value += 3;
      // state.money += 10;
      // money.value += 10;
    };
    return {
      state,
      age,
      money,
      update,
    };
  },
});
</script>
