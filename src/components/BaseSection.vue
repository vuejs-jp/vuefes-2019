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
  padding: 80px 7.8%;
  background-image: url('~assets/images/texture.png');
}

.heading-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.heading {
  position: relative;
  z-index: 10;
  font-size: 10.41vw;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 40px;
}

.heading-copy {
  font-size: 4vw;
  margin-bottom: 40px;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-section {
    padding: 120px 70px;
  }

  .section-container {
    margin: 0 auto;
  }

  .heading-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    font-size: 80px;
  }

  .heading-copy {
    width: 65%;
    font-size: 18px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .section-container {
    max-width: $page-container-max-width;
  }

  .heading-copy {
    width: 75%;
  }
}
</style>
