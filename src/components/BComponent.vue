<template>
  <div>BComponent</div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
onMounted(() => {
  console.log("BComponent onMounted");
});
onBeforeUnmount(() => {
  console.log("BComponent onBeforeUnmount");
});
defineOptions({
  name: "BComponent",
});
</script>
