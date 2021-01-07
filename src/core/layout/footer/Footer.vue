<template>
  <!-- begin:: Footer -->
  <div class="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
    <div
      class="d-flex align-items-center justify-content-between"
      :class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="text-dark"></div>
      <div>
        <span class="text-muted font-weight-bold">
          2021 &nbsp;&copy;&nbsp;
        </span>
        <span>maaak7</span>
      </div>
    </div>
  </div>
  <!-- end:: Footer -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTFooter",
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if footer container is fluid
     */
    widthFluid() {
      return this.layoutConfig("footer.width") === "fluid";
    }
  }
};
</script>
