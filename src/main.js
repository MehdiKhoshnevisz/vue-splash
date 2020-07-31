import Vue from "vue";
import App from "./App.vue";
import VueSplash from "@/plugin/vue-splash";

import "@/assets/styles/main.scss";

Vue.use(VueSplash);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
