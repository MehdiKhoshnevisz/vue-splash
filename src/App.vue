<template>
  <div id="app">
    <ForkMe />
    <header class="vue-splash-header">
      <span class="vue-splash-header__text">Vue Splash</span>
      <span class="vue-splash-header__caption">splash your app logo 💦</span>
    </header>
    <main class="vue-splash-content">
      <Browser>
        <Splash :logo="logo" />
      </Browser>
    </main>
  </div>
</template>

<script>
import VueLogo from "@/assets/vue.svg";
import ForkMe from "@/components/ForkMe";
import Browser from '@/components/Browser';

export default {
  name: "App",
  components: {
    ForkMe,
    Browser
  },
  data() {
    return {
      isLoaded: false
    };
  },
  computed: {
    logo() {
      return VueLogo;
    },
  },
};
</script>