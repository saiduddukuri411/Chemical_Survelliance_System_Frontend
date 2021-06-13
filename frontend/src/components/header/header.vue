<template>
  <div class="HeaderContainer">
    <router-link class="ProjectName" style="text-decoration:none" to="/">Chemical Survelliance System</router-link>
    <div class="NavContainer">
      <router-link class="NavElement" active-class="ActiveNavIcon" to="/samples"
        >Samples</router-link
      >
      <router-link class="NavElement" active-class="ActiveNavIcon" to="/patients"
        >Patients</router-link
      >
      <div class="NavElement">Logout</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
@import "./style/header.scss";
</style>