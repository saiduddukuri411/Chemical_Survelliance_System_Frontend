<template>
  <SharedUi title="Sample" :getData ="getData" />
</template>

<script>
import SharedUi from "../sharedUi/sharedUi.vue";
import { mapGetters } from "vuex";

export default {
  name: "SamplesComponent",
  components: {
    SharedUi
  },
  computed:{
   ...mapGetters(["getLoaderState", "getSamplesList", "getPatientsList"])
  },
  methods: {
    onComponentLoad() {

      if( this.getSamplesList === null ){ 
      this.$store.dispatch("getInitialSamplesData");
      }
    },

    getData(){
      return this.getSamplesList;
    }
  },
  mounted() {
    this.onComponentLoad();
  }
};
</script>

