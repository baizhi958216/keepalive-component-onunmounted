<template>
  <div>CComponent</div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
onMounted(() => {
  console.log("CComponent onMounted");
});
onBeforeUnmount(() => {
  console.log("CComponent onBeforeUnmount");
});
defineOptions({
  name: "CComponent",
});
</script>
