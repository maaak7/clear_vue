<template>
  <!-- begin:: Aside -->
  <div class="brand flex-column-auto" id="kt_brand" ref="kt_brand">
<!--    <div class="brand-logo">-->
<!--      <router-link to="/">-->
<!--        <img class="app-logo" src="@/assets/app-logo.png" alt="Logo" />-->
<!--      </router-link>-->
<!--    </div>-->
    <div class="brand-tools" v-if="allowMinimize">
      <button class="aside-toggle" id="kt_aside_toggle" ref="kt_aside_toggle">
        <span class="svg-icon svg-icon svg-icon-xl">
          <inline-svg class="svg-icon" src="/media/svg/icons/Navigation/Angle-double-left.svg" />
        </span>
      </button>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import { mapGetters } from "vuex";
import KTLayoutBrand from "@/assets/js/layout/base/brand.js";
import KTLayoutAsideToggle from "@/assets/js/layout/base/aside-toggle.js";

export default {
  name: "KTBrand",
  mounted() {
    // Init Brand Panel For Logo
    KTLayoutBrand.init(this.$refs["kt_brand"]);

    // Init Aside Menu Toggle
    KTLayoutAsideToggle.init(this.$refs["kt_aside_toggle"]);
  },

  computed: {
    ...mapGetters(["layoutConfig"]),

    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    }
  }
};
</script>

<style lang="scss" scoped>
.app-logo {
  width: 125px;
}
</style>
