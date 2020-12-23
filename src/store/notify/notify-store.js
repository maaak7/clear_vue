import Vue from "vue";

export default {
  namespaced: true,

  state: {
    notifications: []
  },

  getters: {},
  mutations: {},

  actions: {
    NOTIFY(context, notification) {
      Vue.notify({
        group: "notify",
        type: notification.type,
        title: notification.title,
        text: notification.text,
        duration: notification.duration,
        ignoreDuplicates: true,
        closeOnClick: false
      });
    }
  }
};
