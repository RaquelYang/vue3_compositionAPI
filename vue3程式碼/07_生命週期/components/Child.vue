<template>
  <h2>Child 子級組件</h2>
  <h4>msg:{{ msg }}</h4>
  <button @click="update">更新數據</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "Child",
  // vue2.x lifecycle hooks
  beforeCreate() {
    console.log("vue2.x 的 beforeCreate.");
  },
  created() {
    console.log("vue2.x 的 created.");
  },
  beforeMount() {
    console.log("vue2.x 的 beforeMount.");
  },
  mounted() {
    console.log("vue2.x 的 mounted.");
  },
  beforeUpdate() {
    console.log("vue2.x 的 beforeUpdate.");
  },
  updated() {
    console.log("vue2.x 的 updated.");
  },
  // vue2.x 中的 beforeDestory, destoryed 已經在 vue3 中改名了已經無法再使用
  beforeUnmount() {
    console.log("vue2.x 的 beforeUnmount.");
  },
  unmounted() {
    console.log("vue2.x 的 unmounted.");
  },
  setup() {
    console.log("3.0 的 setup");
    const msg = ref("abc");
    const update = () => {
      msg.value += "===";
    };
    onBeforeMount(() => {
      console.log("3.0 中的 onBeforeMount.");
    });
    onMounted(() => {
      console.log("3.0 中的 onMounted.");
    });
    onBeforeUpdate(() => {
      console.log("3.0 中的 onBeforeUpdate.");
    });
    onUpdated(() => {
      console.log("3.0 中的 onUpdated.");
    });
    onBeforeUnmount(() => {
      console.log("3.0 中的 onBeforeUnmount.");
    });
    onUnmounted(() => {
      console.log("3.0 中的 onUnmounted.");
    });
    return {
      msg,
      update,
    };
  },
});
</script>
