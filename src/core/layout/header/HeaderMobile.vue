<template>
  <div id="kt_header_mobile" class="header-mobile align-items-center" :class="headerClasses">
    <!--begin::Logo-->
    <router-link to="/">
      <img class="orbi-logo" src="/media/custom/orbi-bds-horizontal.min.png" alt="Logo" />
    </router-link>
    <!--end::Logo-->
    <!--begin::Toolbar-->
    <div class="d-flex align-items-center">
      <!--begin::Aside Mobile Toggle-->
      <button v-if="asideEnabled" class="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
        <span></span>
      </button>

      <button
        v-if="withFilters"
        class="filters-btn btn p-0 ml-4"
        id="filters-icon-custom"
        @click="$emit('filtersBtnClick')"
      >
        <span class="svg-icon svg-icon-xl">
          <inline-svg class="svg-icon mr-0" src="/media/svg/icons/Text/Filter.svg" />
        </span>
      </button>

      <!--end::Aside Mobile Toggle-->
      <!--begin::Topbar Mobile Toggle-->
      <button
        class="btn btn-hover-text-primary p-0 ml-2"
        id="kt_header_mobile_topbar_toggle"
        ref="kt_header_mobile_topbar_toggle"
      >
        <span class="svg-icon svg-icon-xl">
          <!--begin::Svg Icon | path:svg/icons/General/User.svg-->
          <inline-svg class="svg-icon" src="/media/svg/icons/General/User.svg" />
          <!--end::Svg Icon-->
        </span>
      </button>
      <!--end::Topbar Mobile Toggle-->
    </div>
    <!--end::Toolbar-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTLayoutHeaderTopbar from "@/assets/js/layout/base/header-topbar.js";

export default {
  name: "KTHeaderMobile",
  props: {
    withFilters: Boolean
  },

  components: {},
  mounted() {
    // Init Header Topbar For Mobile Mode
    KTLayoutHeaderTopbar.init(this.$refs["kt_header_mobile_topbar_toggle"]);
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Get classes for mobile header
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header_mobile");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    }
  }
};
</script>

<style lang="scss" scoped>
.orbi-logo {
  width: 130px;
}

.filters-btn {
  width: 24px;
}
</style>
