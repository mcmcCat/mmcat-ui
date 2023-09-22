import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/TableFrame.vue"),
    },
    {
      path: "/new",
      name: "localTable",
      component: () => import("../views/LocalEditTableFrame.vue"),
    },
  ],
});

export default router;
