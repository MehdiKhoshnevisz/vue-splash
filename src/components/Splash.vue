<template>
  <div class="vue-splash">
    <div>
      <div class="vue-splash__anim mb-3">
        <img :src="logo" />
      </div>
      <div class="vue-splash__text">
        <span>Splash Your Logo</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Splash",
  props: {
    logo: {
      type: String,
      default: "",
    },
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
  position: fixed;
  align-items: center;
  justify-content: center;
}

.vue-splash__anim {
  animation: loadingAnimation2 1.3s infinite;
}

.vue-splash__anim img {
  max-width: 230px;
}

.vue-splash__text {
  margin-top: 60px;
  font-size: 20px;
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
