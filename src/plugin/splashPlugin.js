import Splash from "@/components/Splash";

export default {
  install(Vue, options) {
    console.log(options);
    Vue.component("Splash", Splash);
  }
};
