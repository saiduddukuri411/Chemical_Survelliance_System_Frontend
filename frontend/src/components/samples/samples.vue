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
   ...mapGetters(["getLoaderState", "getSamplesList", "getPatientsList", "getLoginStatus"])
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
    if( !this.getLoginStatus){
        this.$router.push("/")
    }
    this.onComponentLoad();
    
  }
};
</script>

