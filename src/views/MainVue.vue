<template>
  <div>
    <KeepAlive :include="componentStore.componentKeepList">
      <Component :is="componentStore.Component" />
    </KeepAlive>

    <div style="display: flex;flex-direction: column;width: 10rem;margin-top: 2rem;gap: 1rem;">
      切换组件
      <button @click="componentStore.switchComponent('AComponent')">
        AComponent
      </button>
      <button @click="componentStore.switchComponent('BComponent')">
        BComponent
      </button>
      <button @click="componentStore.switchComponent('CComponent')">
        CComponent
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useComponentStore } from "../store/useComponent.store";
const componentStore = useComponentStore();
</script>
