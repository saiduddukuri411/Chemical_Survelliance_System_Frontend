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
  }
};
</script>

<style scoped lang="scss">
@import "./App.scss";
</style>