import MainVue from "../views/MainVue.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
