import VueSplash from "@/components/VueSplash";

const plugin =  {
  install(Vue) {
    Vue.component(VueSplash.name, VueSplash);
  }
}

VueSplash.install = plugin.install;

// Automatic installation if Vue has been added to the global scope
let GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(VueSplash);
}

export default VueSplash;
