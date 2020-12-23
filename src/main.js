import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Vue 3rd party plugins
import i18n from "./core/plugins/vue-i18n";
import "./core/plugins/bootstrap-vue";
import "./core/plugins/inline-svg";
import "./core/plugins/metronic";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
Vue.use(Notifications, { velocity });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
