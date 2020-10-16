# Vue Splash
Splash Your App Logo 💦

show the splash, until your app is loaded...


## Demo

[see demo](https://mehdikhoshnevisz.github.io/vue-splash/)

## Installation
```bash
npm i vue-splash
```

## Usage

Plugin install:

```js
import Vue from 'vue';
import VueSplash from 'vue-splash';

Vue.use(VueSplash);
```

Import in template:

```vue
<template>
  <vue-splash
    :show="true"
    :logo="logo"
    title="Your Magnificent App Name"
    color="#00bfa5"
    :size="300"
    :fixed="true"
  />
</template>

<script>
import YourLogo from "<Your Magnificent Logo Path>";

export default {
  name: "YourMagnificentVueComponent",
  computed: {
    logo() {
      return YourLogo;
    }
  }
}
</script>
```

## Props

| name              | type                             | default                          | description                                                            |
| ----------------- | -------------------------------- | -------------------------------- | ---------------------------------------------------------------------- |
| show              | Boolean                          | true                             | decide to show component                                               |
| logo              | String                           | https://svgshare.com/i/NRE.svg   | image source to load your logo                                         |
| title             | String                           | Your Magnificent App Name        | define app name                                                        |
| custom-text       | String                           |                                  | write your custom text or html instead of title prop                   |
| color             | String                           | #00bfa5                          | define splash color                                                    |
| size              | String, Number                   | 180                              | define splash logo size (px)                                           |
| fixed             | Boolean                          | true                             | fixed to full screen                                                   |
| background-color  | String                           |                                  | set background color (it works if the "fixed" property is set to true) |


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
