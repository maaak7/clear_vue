<template>
  <div class="ml-5 d-flex align-items-center">
    <div class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
      <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
        {{ $t("label.hi") }},
      </span>
      <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
        {{ user ? user.name : $t("label.guest") }}
      </span>
    </div>

<!--    <a v-if="isAuthenticated"-->
<!--       href="javascript:void(0);"-->
<!--       class="btn btn-light-danger font-weight-bold mr-2"-->
<!--       style="height: 35px"-->
<!--       @click="onLogout"-->
<!--    >-->
<!--      {{ $t("btn.logout") }}-->
<!--    </a>-->
<!--    <a v-else-->
<!--       href="javascript:void(0);"-->
<!--       class="btn btn-light-primary font-weight-bold mr-2"-->
<!--       style="height: 35px"-->
<!--       @click="onLogin"-->
<!--    >-->
<!--      {{ $t("btn.login") }}-->
<!--    </a>-->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import LocalStorageService from "@/core/services/local-storage.service";
// import { LOGOUT } from "@/store/core/auth.module";

export default {
  name: "KTQuickUser",

  data: () => ({
    user: null,
  }),

  created() {
    // this.user = LocalStorageService.getUser();
  },

  computed: {
    // ...mapGetters({
    //   isAuthenticated: "isAuthenticated"
    // }),
  },

  methods: {
    onLogin() {
      // this.$router.push({ name: "login" });
    },

    onLogout() {
      // this.$store.dispatch(LOGOUT);
    }
  }
};
</script>
