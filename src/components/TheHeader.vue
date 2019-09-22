<template>
  <div class="the-header">
    <nuxt-link to="/" class="logo">
      <img src="~/assets/images/logo-vuefes.svg" alt="Vue Fes Japan" />
    </nuxt-link>
    <div class="navigation-container">
      <div class="togglable-menu">
        <div :class="{ 'is-open': isOpen }" @click="openMenu">
          <span class="hamburger hamburger-top" />
          <span class="hamburger hamburger-middle" />
          <span class="hamburger hamburger-bottom" />
        </div>
        <nav v-show="isOpen" class="menu-contents">
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
  width: 100%;
  top: 3vw;
  left: 7.8%;
  z-index: 100;
  display: flex;
  justify-content: space-between;

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

a {
  color: $vue-dark-blue;
  text-decoration-line: none;
}

a:hover {
  text-decoration-line: underline;
}

.logo {
  z-index: 1;
}

.togglable-menu {
  position: absolute;
  right: 7.8%;
  width: 100px;
}

.hamburger {
  position: absolute;
  display: inline-block;
  content: '';
  height: 4px;
  width: 42px;
  background: #34495e;
  cursor: pointer;
  z-index: 1;

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

.is-open .hamburger {
  &-top {
    transform: translateY(15px) rotate(-45deg);
  }

  &-middle {
    display: none;
  }

  &-bottom {
    transform: translateY(-15px) rotate(45deg);
  }
}

.menu-contents {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.85);

  ul {
    margin: 100px 7.25vw 0;
  }

  li {
    padding-bottom: 5vw;
    font-size: 32px;
  }
}
</style>
