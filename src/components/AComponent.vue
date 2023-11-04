<template>
  <div>AComponent</div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
onMounted(() => {
  console.log("AComponent onMounted");
});
onBeforeUnmount(() => {
  console.log("AComponent onBeforeUnmount");
});
defineOptions({
  name: "AComponent",
});
</script>
