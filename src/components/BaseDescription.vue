<template>
  <div class="base-description">
    <h2 v-if="$slots.heading">
      <slot name="heading" />
    </h2>

    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseDescription extends Vue {}
</script>

<style lang="scss" scoped>
.base-description {
  margin-bottom: 65px;

  h2 {
    margin-bottom: 25px;
    font-size: 5.2vw;
    font-weight: bold;
    line-height: 1;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-description h2 {
    font-size: 42px;
  }
}
</style>
