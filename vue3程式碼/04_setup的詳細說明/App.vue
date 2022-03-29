<template>
  <h2>App 父層</h2>
  <h3>msg : {{ msg }}</h3>
  <button @click="msg += '==='">更新數據</button>
  <hr />
  <Child :msg="msg" msg2="Raquel" @xxx="xxx" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const msg = ref("Hi!!!");
    function xxx(txt: string) {
      msg.value += txt;
    }
    return {
      msg,
      xxx,
    };
  },
});
</script>
