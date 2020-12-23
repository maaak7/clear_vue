import Vue from "vue"
import Vuex from "vuex"
import plugins from "@/plugins/vuex"

import config from "@/store/core/config.module";
import htmlClass from "@/store/core/htmlclass.module";
import loader from "@/store/loader/loader-store"
import notifyStore from "@/store/notify/notify-store"

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [plugins],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    config,
    htmlClass,
    loader,
    notifyStore,
  }
})
