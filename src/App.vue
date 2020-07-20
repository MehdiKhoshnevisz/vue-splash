<template>
  <div id="app">
    <Splash :logo="logo" />
  </div>
</template>

<script>
import VueLogo from "@/assets/vue.svg";

export default {
  name: "App",
  computed: {
    logo() {
      return VueLogo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
