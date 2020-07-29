<template>
  <div class="vue-splash-browser">
    <div class="vue-splash-browser__header">
      <span class="vue-splash-browser__header-action" id="action-danger"></span>
      <span
        class="vue-splash-browser__header-action"
        id="action-warning"
      ></span>
      <span
        class="vue-splash-browser__header-action"
        id="action-success"
      ></span>
      <div
        :class="[
          'vue-splash-browser__loader',
          { 'vue-splash-browser__loader--end': completeLoader },
        ]"
        :style="loaderStyle"
      ></div>
    </div>

    <div v-if="!isLoaded" class="vue-splash-browser__splash-wrapper">
      <slot></slot>
    </div>

    <div v-else class="vue-splash-browser__content">
      <span>browser content</span>
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    startTimeout() {
      let miliSeconds = 4000;
      let intervalMiliSeconds = miliSeconds / 100;

      setTimeout(() => {
        this.isLoaded = true;
      }, miliSeconds);

      setInterval(() => {
        if (this.isLoaded) {
          this.loaderWidth = 100;
          this.completeLoader = true;
          return;
        }

        this.loaderWidth++;
      }, intervalMiliSeconds);
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
    display: flex;
    padding: 1rem;
    position: relative;
    background-color: #f3f3f3;

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
  }

  &__loader {
    left: 0;
    right: 0;
    width: 0;
    opacity: 1;
    height: 2px;
    bottom: -1px;
    position: absolute;
    background: #41b883;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px #41b883;

    &--end {
      opacity: 0;
    }
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
