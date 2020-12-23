<template>
  <div class="app-root">
    <AppLoader v-if="isLoading" />
    <AppNotify />
    <router-view></router-view>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
import AppLoader from "@/components/elements/loaders/AppLoader";
import AppNotify from "@/components/elements/notifications/AppNotify";

export default {
  components: {
    AppLoader,
    AppNotify
  },
  created() {
    ApiService.init();
  },
  computed: {
    isLoading() {
      return this.$store.getters["loaderStore/IS_LOADING"];
    }
  }
}
</script>

<style lang="scss">
// Main demo style scss
@import "assets/sass/style.vue";
@import "~@fortawesome/fontawesome-free/css/all.css";
</style>

<style lang="scss">
* {
  outline: none;
}

.app-root {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  height: 100%;
}

.card .card-header {
  padding: 25px 20px;
}

.card .card-body,
.card .card-footer {
  padding: 20px;
}

.modal-backdrop {
  opacity: 0.5;
}
</style>
