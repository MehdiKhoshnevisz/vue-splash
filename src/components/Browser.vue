<template>
  <div class="vue-splash-browser">
    <div class="vue-splash-browser__header">
      <div class="vue-splash-browser__header__actions">
        <span
          class="vue-splash-browser__header-action"
          id="action-danger"
        ></span>
        <span
          class="vue-splash-browser__header-action"
          id="action-warning"
        ></span>
        <span
          class="vue-splash-browser__header-action"
          id="action-success"
        ></span>

        <transition name="fade">
          <div
            v-if="!completeLoader"
            class="vue-splash-browser__loader"
            :style="loaderStyle"
          ></div>
        </transition>
      </div>

      <div class="vue-splash-browser__header__buttons">
        <img
          class="vue-splash-browser__header-button"
          src="@/assets/images/reload.svg"
          @click="reloadBrowser"
        />
      </div>
    </div>

    <transition name="fade">
      <div v-if="isLoaded" class="vue-splash-browser__splash-wrapper">
        <vue-splash :logo="logo" />
      </div>
    </transition>

    <transition name="fade">
      <div v-if="!isLoaded" class="vue-splash-browser__content">
        <span>browser content</span>
      </div>
    </transition>
  </div>
</template>

<script>
import VueLogo from "@/assets/vue.svg";

export default {
  name: "Browser",
  data() {
    return {
      loaderWidth: 0,
      isLoaded: false,
      completeLoader: false
    };
  },
  mounted() {
    this.startTimeout();
  },
  computed: {
    loaderStyle() {
      return {
        width: this.loaderWidth + "%",
      };
    },
    logo() {
      return VueLogo;
    },
  },
  methods: {
    startTimeout() {
      this.isLoaded = true;

      let miliSeconds = 4000;
      let intervalMiliSeconds = miliSeconds / 100;

      setTimeout(() => {
        this.isLoaded = false;
      }, miliSeconds);

      setInterval(() => {
        if (!this.isLoaded) {
          this.loaderWidth = 100;

          setTimeout(() => {
            this.completeLoader = true;
          }, 0);

          return;
        }

        this.loaderWidth++;
      }, intervalMiliSeconds);
    },
    reloadBrowser() {
      this.$emit("update");
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-splash-browser {
  width: 65%;
  height: 65vh;
  overflow: hidden;
  border-radius: 10px;
  background: white;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);

  &__header {
    padding: 1rem;
    display: flex;
    position: relative;
    align-items: center;
    background-color: #f3f3f3;
    justify-content: space-between;

    &__actions {
      display: flex;
    }

    &-action {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 100%;
      margin-right: 0.5rem;
    }

    #action-danger {
      background-color: #ff6058;
    }

    #action-warning {
      background-color: #ffc130;
    }

    #action-success {
      background-color: #28c940;
    }

    &-button {
      width: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:active {
        transform: scale(0.8);
      }
    }
  }

  &__loader {
    left: 0;
    right: 0;
    width: 0;
    height: 2px;
    bottom: -1px;
    position: absolute;
    background: #41b883;
    box-shadow: 0 0 10px #41b883;
  }

  &__splash-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }
}
</style>
