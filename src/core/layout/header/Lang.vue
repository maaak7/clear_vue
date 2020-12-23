<template>
  <!--begin: Language bar -->
  <div class="topbar-item">
    <b-dropdown
      size="sm"
      variant="link"
      toggle-class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <img class="h-20px w-20px rounded-sm" :src="languageFlag || getLanguageFlag" alt="" />
      </template>
      <b-dropdown-text class="app-lang-dropdown" tag="div">
        <KTDropdownLanguage @language-changed="onLanguageChanged"></KTDropdownLanguage>
      </b-dropdown-text>
    </b-dropdown>
  </div>
  <!--end: Language bar -->
</template>

<script>
import KTDropdownLanguage from "@/core/layout/extras/dropdown/DropdownLanguage.vue";
import i18nService from "@/core/services/i18n.service.js";

export default {
  name: "Lang",
  data() {
    return {
      languageFlag: "",
      languages: i18nService.languages
    };
  },
  components: {
    KTDropdownLanguage
  },
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find((val) => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    }
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    }
  }
};
</script>

<style lang="scss">
.topbar-item {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    .b-dropdown-text {
      padding: 0;
    }
  }
}

.app-lang-dropdown {
  min-width: 175px;
}
</style>
