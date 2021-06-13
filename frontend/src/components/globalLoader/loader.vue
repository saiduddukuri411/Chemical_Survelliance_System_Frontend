<template>
  <div class="BackDrop"></div>
  <div class="LoaderHolder">
    <vue-loaders name="line-scale" color="rgb(127, 219, 202)" scale="2" />
  </div>
</template>

<script>
export default {
  name: "GlobalLoader"
};
</script>

<style scoped lang="scss">
@import "./styles/loader.scss";
</style>