<template>
  <main class="base-main">
    <div class="main-content">
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

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-main {
    padding: 130px 70px 120px;
  }

  .main-content {
    margin: 0 auto;
  }

  .heading {
    font-size: 80px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .main-content {
    max-width: $page-container-max-width;
  }
}
</style>
