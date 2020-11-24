<template>
  <div>
    hello, world
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  beforeMount() {
    // this.$store.dispatch('myStore/GET_ITEMS');
  },
  computed: {
    ...mapGetters({
      // apartmentsList: 'myStore/ITEMS'
    })
  },
}
</script>