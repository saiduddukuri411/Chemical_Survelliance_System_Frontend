<template>
  <div class="AppContainer">
    <Header />
    <router-view />
    <div v-if="getLoaderState">
      <Loader />
    </div>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
import Loader from "./components/globalLoader/loader.vue";

import {mapGetters} from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Loader
  },
  computed:{
     ...mapGetters(["getLoaderState"])
  },
  mounted() {
       
       let token = localStorage.getItem("PATC_KEY");

       if( !token ){
         return
       }

       this.$store.commit("UPDATE_LOGIN", true )
       this.$store.commit("UPDATE_TOKEN", token)

       this.$router.push("/samples")
  },
};
</script>

<style scoped lang="scss">
@import "./App.scss";
</style>