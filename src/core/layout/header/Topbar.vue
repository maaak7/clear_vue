<template>
  <div class="topbar">
    <Lang />
    <KTQuickUser />
  </div>
</template>

<script>
import Lang from "@/core/layout/header/Lang";
import KTQuickUser from "@/core/layout/extras/offcanvas/QuickUser.vue";

export default {
  name: "KTTopbar",
  components: {
    KTQuickUser,
    Lang
  }
};
</script>
