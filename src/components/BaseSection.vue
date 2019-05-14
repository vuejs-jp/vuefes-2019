<template>
  <section class="base-section">
    <div class="section-container">
      <div class="section-content">
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
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseSection extends Vue {}
</script>

<style lang="scss" scoped>
.section-container {
  padding: 10vw 7.8%;
  background-image: url('~assets/images/texture.png');
}

.section-content {
  margin: 0 auto;
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
  margin-bottom: 5vw;
}

.heading-copy {
  font-size: 4vw;
  margin-bottom: 5vw;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .section-container {
    padding: 120px 70px;
  }

  .heading-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    font-size: 80px;
    margin-bottom: 40px;
  }

  .heading-copy {
    width: 65%;
    font-size: 18px;
    margin-bottom: 40px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .section-content {
    max-width: $page-container-max-width;
  }

  .heading-copy {
    width: 75%;
  }
}
</style>
