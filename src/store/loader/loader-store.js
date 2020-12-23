const debounce = require("lodash/debounce");

export default {
  namespaced: true,

  state: {
    isLoading: false
  },

  getters: {
    IS_LOADING(state) {
      return state.isLoading;
    }
  },

  mutations: {
    SET_LOADING: debounce(
      (state, status) => {
        state.isLoading = status;
      },
      400,
      {
        leading: true
      }
    )
  },

  actions: {}
};
