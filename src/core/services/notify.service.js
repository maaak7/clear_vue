import store from "@/store";
import i18n from "@/core/plugins/vue-i18n";

export default {
  success: (message) => {
    store
      .dispatch(
        "notifyStore/NOTIFY",
        {
          type: "success",
          title: i18n.t("title.success"),
          text: message ? message : i18n.t("notify.default_success"),
          duration: 60000
        },
        { root: true }
      )
      .catch(() => ({}));
  },

  warning: (message) => {
    store
      .dispatch(
        "notifyStore/NOTIFY",
        {
          type: "warning",
          title: i18n.t("title.warning"),
          text: message ? message : i18n.t("notify.default_warning"),
          duration: 60000
        },
        { root: true }
      )
      .catch(() => ({}));
  },

  error: (message) => {
    store
      .dispatch(
        "notifyStore/NOTIFY",
        {
          type: "error",
          title: i18n.t("title.error"),
          text: message ? message : i18n.t("notify.default_error"),
          duration: 60000
        },
        { root: true }
      )
      .catch(() => ({}));
  }
};
