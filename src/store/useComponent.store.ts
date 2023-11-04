import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";
import AComponent from "../components/AComponent.vue";
import BComponent from "../components/BComponent.vue";
import CComponent from "../components/CComponent.vue";

type componentName = "AComponent" | "BComponent" | "CComponent";

export const useComponentStore = defineStore("componentStore", () => {
  const ComponentList = [AComponent, BComponent, CComponent];
  const componentStoreList = shallowRef([AComponent, BComponent, CComponent]);
  const componentKeepList = ref(["AComponent", "BComponent", "CComponent"]);
  const Component = shallowRef(componentStoreList.value[0]);

  const switchComponent = (componentName: componentName) => {
    if (!componentKeepList.value.includes(componentName)) {
      componentKeepList.value.push(componentName);
      const temp_component = ComponentList.find(
        (component) => component.name === componentName
      );
      if (temp_component) {
        componentStoreList.value.push(temp_component);
        Component.value = temp_component;
      }
      return;
    }

    Component.value = componentStoreList.value.find(
      (component) => component.name === componentName
    )!;

    componentKeepList.value = componentKeepList.value.filter(
      (component) => component !== componentName
    );

    componentStoreList.value = componentStoreList.value.filter(
      (component) => component.name !== componentName
    );
  };

  return {
    componentKeepList,
    componentStoreList,
    Component,
    switchComponent,
    ComponentList,
  };
});
