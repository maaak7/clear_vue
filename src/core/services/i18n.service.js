import i18n from "@/core/plugins/vue-i18n";

const i18nService = {
  defaultLanguage: "en",

  languages: [
    {
      lang: "en",
      name: i18n.t("lang.en"),
      flag: process.env.BASE_URL + "media/svg/flags/216-england.svg"
    },
    {
      lang: "uk",
      name: i18n.t("lang.uk"),
      flag: process.env.BASE_URL + "media/svg/flags/145-ukraine.svg"
    }
  ],

  /**
   * Keep the active language in the localStorage
   * @param lang
   */
  setActiveLanguage(lang) {
    localStorage.setItem("language", lang);
  },

  /**
   * Get the current active language
   * @returns {string | string}
   */
  getActiveLanguage() {
    return localStorage.getItem("language") || this.defaultLanguage;
  }
};

export default i18nService;
