<template>
  <h2>Child</h2>
  <hr />
  <GreandChild />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import GreandChild from "./GreandChild.vue";

export default defineComponent({
  name: "Child",
  components: { GreandChild },
});
</script>
