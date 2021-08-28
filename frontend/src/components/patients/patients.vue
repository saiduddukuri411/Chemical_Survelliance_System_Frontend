<template>
    <SharedUi title="Patient" :getData ="getData" :value="getSearchQuery"/>
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
   ...mapGetters(["getLoaderState", "getSamplesList", "getPatientsList", "getLoginStatus","getSearchQuery"]),
   searchQuery: function(){
     return this.$store.state.SearchQuery.query
   }
  },
  methods: {
    onComponentLoad() {
      if( !this.getLoginStatus){
        this.$router.push("/")
    }
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