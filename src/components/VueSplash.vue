<template>
  <div class="vue-splash">
    <div>
      <div class="vue-splash__anim mb-3">
        <img :src="logo" />
      </div>
      <div v-if="caption" class="vue-splash__text">
        <span>{{ caption }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueSplash",
  props: {
    logo: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      default: `Your Magnificent App Name`
    }
  },
};
</script>

<style scoped>
.vue-splash {
  top: 0;
  left: 0;
  flex: 1;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
}

.vue-splash__anim {
  text-align: center;
  animation: loadingAnimation 1.3s infinite;
}

.vue-splash__anim img {
  margin: auto;
  max-width: 200px;
}

.vue-splash__text {
  margin-top: 50px;
  font-size: 1rem;
  text-align: center;
}

@keyframes loadingAnimation {
  0% {
    filter: drop-shadow(0px 0px 0px #00bfa5);
  }
  100% {
    filter: drop-shadow(0px 0px 200px #00bfa5);
  }
}

@keyframes loadingAnimation1 {
  0% {
    filter: drop-shadow(0px 0px 0px #00bfa5);
  }
  50% {
    filter: drop-shadow(0px 0px 50px #00bfa5);
  }
  100% {
    filter: drop-shadow(0px 0px 0px #00bfa5);
  }
}

@keyframes loadingAnimation2 {
  0% {
    filter: drop-shadow(0px -1000px 200px #00bfa5);
  }
  50% {
    filter: drop-shadow(0px 0px 0px #00bfa5);
  }
  100% {
    filter: drop-shadow(0px 0px 200px #00bfa5);
  }
}
</style>
