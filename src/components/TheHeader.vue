<template>
  <div class="the-header">
    <nuxt-link to="/">
      <img src="~/assets/images/logo-vuefes.svg" alt="Vue Fes Japan" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TheHeader extends Vue {}
</script>

<style lang="scss" scoped>
.the-header {
  position: fixed;
  top: 3vw;
  left: 7.8%;
  z-index: 100;

  img {
    height: 5vw;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    top: 30px;
    left: 30px;

    img {
      height: 40px;
    }
  }
}
</style>
