<template>
  <section class="base-section">
    <div class="section-container">
      <h2 v-if="$slots.heading" class="heading">
        <slot name="heading" />
      </h2>

      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseSection extends Vue {}
</script>

<style lang="scss" scoped>
.base-section {
  padding: 60px 7.8%;
  background-image: url('~assets/images/texture.png');
  background-repeat: repeat;
}

.heading {
  margin-bottom: 40px;
  font-size: 10.41vw;
  font-weight: bold;
  line-height: 1;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-section {
    padding: 80px 70px;
  }

  .section-container {
    margin: 0 auto;
  }

  .heading {
    margin-bottom: 45px;
    font-size: 80px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .section-container {
    max-width: $page-container-max-width;
  }
}
</style>
