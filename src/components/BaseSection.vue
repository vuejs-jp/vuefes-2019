<template>
  <section class="base-section">
    <div class="section-container">
      <div class="heading-wrapper">
        <h2 v-if="$slots.heading" class="heading">
          <slot name="heading" />
        </h2>

        <p v-if="$slots['heading-copy']" class="heading-copy">
          <slot name="heading-copy" />
        </p>
      </div>

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

.heading-wrapper {
  margin-bottom: 40px;
}

.heading {
  font-size: 10.41vw;
  font-weight: bold;
  line-height: 1;
}

.heading-copy {
  font-size: 4vw;
  line-height: 1.8;
  margin-top: 20px;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-section {
    padding: 80px 70px;
  }

  .section-container {
    margin: 0 auto;
  }

  .heading-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 45px;
  }

  .heading {
    font-size: 80px;
  }

  .heading-copy {
    flex: 1;
    margin-top: 7px;
    margin-left: 100px;
    font-size: 18px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .section-container {
    max-width: $page-container-max-width;
  }
}
</style>
