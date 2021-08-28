<template>
  <div class="globalCardContainer" v-if="verifyValidCard()">
    <div :class="[ 'circularNob',isClassActive ? 'darkCircle' : '']"></div>
    <p class="CardContent">{{ item.sampleNumber || `Sample ${item.cartridge}`}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GlobalCard",
  props: ["item", "activeIndex"],
  computed: {
    isClassActive() {
      return this.activeIndex === this.item.createdIndex;
    },
    ...mapGetters(["getSearchQuery"])
  },
  methods: {
    verifyValidCard: function() {
      let sampleName =
        ( this.item.sampleNumber || `Sample ${this.item.cartridge}`).toLowerCase();

      let isValid =
        this.getSearchQuery === "" ||
        sampleName.indexOf(this.getSearchQuery.toLowerCase()) !== -1;

      return isValid;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style/globalCard.scss";
</style>

