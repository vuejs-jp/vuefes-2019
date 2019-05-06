<template>
  <div class="base-main-description">
    <h2 v-if="$slots.heading" class="heading">
      <slot name="heading" />
    </h2>

    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseMainDescription extends Vue {}
</script>

<style lang="scss" scoped>
.base-main-description {
  margin-bottom: 8.4vw;

  .heading {
    font-size: 5.2vw;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 3.2vw;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-main-description {
    margin-bottom: 65px;

    .heading {
      font-size: 42px;
      margin-bottom: 25px;
    }
  }
}
</style>
