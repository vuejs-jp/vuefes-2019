<template>
  <div class="the-header">
    <nuxt-link to="/">
      <img src="~/assets/images/logo-vuefes.svg" alt="Vue Fes Japan" />
    </nuxt-link>
    <div class="navigation-container">
      <div class="togglable-menu">
        <div @click="openMenu">
          <span class="hamburger hamburger-top" />
          <span class="hamburger hamburger-middle" />
          <span class="hamburger hamburger-bottom" />
        </div>
        <nav v-show="isOpen">
          <ul>
            <!-- TODO: 各要素のページ内リンクをつける -->
            <li>
              <a href="#">TICKET</a>
            </li>
            <li>
              <a href="#">TIME TABLE</a>
            </li>
            <li>
              <a href="#">SPEAKERS</a>
            </li>
            <li>
              <a href="#">EVENTS</a>
            </li>
            <li>
              <a href="#">ACCESS</a>
            </li>
            <li>
              <a href="#">SPONSERS</a>
            </li>
            <li>
              <a href="#">TEAM</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TheHeader extends Vue {
  isOpen = false

  openMenu() {
    this.isOpen = !this.isOpen
  }
}
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

.hamburger {
  position: absolute;
  display: inline-block;
  content: '';
  height: 4px;
  width: 42px;
  background: #34495e;
  cursor: pointer;

  &-top {
    top: 0;
  }

  &-middle {
    top: 15px;
  }

  &-bottom {
    top: 30px;
  }
}
</style>
