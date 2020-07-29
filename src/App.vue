<template>
  <div id="app">
    <ForkMe />
    <header class="vue-splash-header">
      <span class="vue-splash-header__text">Vue Splash</span>
      <span class="vue-splash-header__caption">splash your app logo 💦</span>
    </header>
    <main class="vue-splash-content">
      <Browser :key="BrowserComponentKey" @update="forceRerender" />
    </main>
  </div>
</template>

<script>
import ForkMe from "@/components/ForkMe";
import Browser from "@/components/Browser";

export default {
  name: "App",
  components: {
    ForkMe,
    Browser,
  },
  data() {
    return {
      BrowserComponentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.BrowserComponentKey += 1;
    },
  },
};
</script>
