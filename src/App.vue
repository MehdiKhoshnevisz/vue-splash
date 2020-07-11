<template>
  <div id="app">
    <Splash />
  </div>
</template>

<script>
import Splash from '@/components/Splash';
export default {
  name: "App",
  components: {
    Splash
  }
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
