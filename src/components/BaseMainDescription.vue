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
  margin-bottom: 65px;

  .heading {
    margin-bottom: 25px;
    font-size: 5.2vw;
    font-weight: bold;
    line-height: 1;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-main-description .heading {
    font-size: 42px;
  }
}
</style>
