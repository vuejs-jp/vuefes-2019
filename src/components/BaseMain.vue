<template>
  <main class="base-main">
    <div class="main-container">
      <h1 v-if="$slots.heading" class="heading">
        <slot name="heading" />
      </h1>

      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseMain extends Vue {}
</script>

<style lang="scss" scoped>
.base-main {
  padding: 110px 7.8% 100px;
  background-image: url('~assets/images/texture.png');
}

.heading {
  margin-bottom: 34px;
  font-size: 10.41vw;
  font-weight: bold;
  line-height: 1;
}

.description,
section {
  margin-bottom: 65px;
}

h2 {
  margin-bottom: 25px;
  font-size: 5.2vw;
  font-weight: bold;
  line-height: 1;
}

p,
li {
  font-size: 4vw;
}

ul {
  list-style-type: disc;
  padding-left: 40px;
}

ol {
  list-style-type: decimal;
  padding-left: 40px;
}

ul ul,
ol ul {
  list-style-type: circle;
}

ol ol,
ul ol {
  list-style-type: lower-latin;
}

.link {
  color: $vue-dark-blue;
  transition: 0.2s;

  &:hover {
    opacity: 0.4;
  }
}

.link-to-top {
  margin: 0 auto;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-main {
    padding: 130px 70px 120px;
  }

  .main-container {
    margin: 0 auto;
  }

  .heading {
    font-size: 80px;
  }

  h2 {
    font-size: 42px;
  }

  p,
  li {
    font-size: 18px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .main-container {
    max-width: $page-container-max-width;
  }
}
</style>
