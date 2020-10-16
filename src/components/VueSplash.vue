<template>
  <transition name="fade">
    <div v-if="show" :class="['vue-splash', { 'vue-splash--fixed': fixed }]" :style="vueSplashStyle">
      <div>
        <div class="vue-splash__anim">
          <img :src="logo" :style="imageStyle" />
        </div>
        <div v-if="title" class="vue-splash__text">
          <span>{{ title }}</span>
        </div>
        <div v-if="customText" class="vue-splash__custom-text" v-html="customText"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VueSplash",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    logo: {
      type: String,
      default: "https://svgshare.com/i/NRE.svg",
    },
    title: {
      type: String,
      default: "",
    },
    customText: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#00bfa5",
    },
    size: {
      type: [Number, String],
      default: 180,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    backgroundColor: {
      type: String,
      default: '',
    }
  },
  created() {
    this.setColor();
  },
  computed: {
    imageStyle() {
      let width = this.size + "px";

      return {
        width,
      };
    },

    vueSplashStyle() {
      let backgroundColor = '';

      if (this.fixed && this.backgroundColor) {
        backgroundColor = this.backgroundColor;
      } else if (this.fixed) {
        backgroundColor = '#ffffff';
      } else {
        backgroundColor = 'transparent';
      }

      return {
        backgroundColor
      }
    }
  },
  methods: {
    setColor() {
      document.documentElement.style.setProperty("--splash-color", this.color);
    }
  }
};
</script>

<style lang="scss" scoped>
$splash-color: var(--splash-color);

.vue-splash {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &--fixed {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
  }
}

.vue-splash__anim {
  text-align: center;
  animation: splashAnimation 1.3s infinite;

  img {
    margin: auto;
  }
}

.vue-splash__text {
  margin-top: 50px;
  font-size: 1rem;
  text-align: center;
}

.vue-splash__custom-text {
  margin-top: 50px;
  text-align: center;
}

@keyframes splashAnimation {
  0% {
    filter: drop-shadow(0px 0px 0px $splash-color);
  }
  100% {
    filter: drop-shadow(0px 0px 200px $splash-color);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
