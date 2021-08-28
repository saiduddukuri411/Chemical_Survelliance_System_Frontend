<template>
  <div class="HeaderContainer">
    <router-link
      class="ProjectName"
      style="text-decoration:none"
      to="/samples"
    >Chemical Survelliance System</router-link>
    <input
      class="HeaderSearchBar"
      placeholder="Search Sample"
      v-if="$route.fullPath!='/'"
      @keyup="updateSearchQuery"
      :value="getSearchQuery"
    />
    <div
      class="NavContainer"
      :style="
        $route.fullPath !== '/'
          ? 'justify-content: space-between'
          : 'justify-content: flex-end'
      "
    >
      <router-link
        v-if="$route.fullPath !== '/'"
        class="NavElement"
        active-class="ActiveNavIcon"
        to="/samples"
        @click="() => clearSearch()"
      >Samples</router-link>
      <router-link
        v-if="$route.fullPath !== '/'"
        class="NavElement"
        active-class="ActiveNavIcon"
        to="/patients"
        @click="() => clearSearch()"
      >Patients</router-link>
      <router-link
        v-if="$route.fullPath !== '/'"
        class="NavElement"
        active-class="ActiveNavIcon"
        to="/uploads"
        @click="() => clearSearch()"
      >Uploads</router-link>
      <div class="NavElement" v-if="$route.fullPath !== '/'" @click="() => logoutHandler()">Logout</div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  methods: {
    logoutHandler() {
      this.$store.commit("UPDATE_LOGIN", false);
      localStorage.removeItem("PATC_KEY");
      this.$router.push("/");
    },
    clearSearch() {
      this.$store.commit("UPDATE_SEARCH_QUERY", "");
    },
    updateSearchQuery: function(event) {
      console.log( event.target.value )
      this.$store.commit("UPDATE_SEARCH_QUERY", event.target.value);
    },
    computed: {
      ...mapGetters(["getSearchQuery"])
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style/header.scss";
</style>