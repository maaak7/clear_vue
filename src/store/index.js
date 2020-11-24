import Vue from 'vue'
import Vuex from 'vuex'
import plugins from '@/plugins/vuex'

// import myStore from '@/store/modules/my-store'

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
    // myStore
  }
})
