import Vue from "vue";
import modules from "@/router/modules";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    ...modules,
    {
      path: "*",
      redirect: "/404"
    }
  ]
});

export default router;
