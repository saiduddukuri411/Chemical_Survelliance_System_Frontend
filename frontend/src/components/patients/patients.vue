<template>
    <SharedUi title="Patient" :getData ="getData"/>
</template>


<script>
import SharedUi from "../sharedUi/sharedUi.vue";
import { mapGetters } from "vuex";

export default {
    name: "PatientsComponent",
    components:{
      SharedUi
    },
    computed:{
   ...mapGetters(["getLoaderState", "getSamplesList", "getPatientsList"])
  },
  methods: {
    onComponentLoad() {
      if( this.getPatientsList === null ){ 
      this.$store.dispatch("getInitialPatientsData");
      }
    },

    getData(){
      return this.getPatientsList;
    }
  },
  mounted() {
    this.onComponentLoad();
  }
}
</script>