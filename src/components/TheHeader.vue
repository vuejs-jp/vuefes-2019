<template>
  <div class="the-header">
    <div class="sentinal" />
    <div class="header-container" :class="{ scrolled: isScrolled }">
      <nuxt-link to="/" class="logo" @click.native="closeMenu">
        <img src="~/assets/images/logo-vuefes.svg" alt="Vue Fes Japan" />
      </nuxt-link>
      <div class="navigation-container">
        <div class="togglable-menu">
          <div
            v-show="!isOpen"
            :class="{ 'is-open': isOpen }"
            @click="openMenu"
          >
            <span class="hamburger hamburger-top" />
            <span class="hamburger hamburger-middle" />
            <span class="hamburger hamburger-bottom" />
          </div>
          <span v-show="isOpen" class="close-menu" @click="closeMenu">
            CLOSE
          </span>
          <transition name="fadeInDown">
            <nav v-show="isOpen" class="togglable-menu-contents">
              <ul>
                <li>
                  <a href="#the-ticket-section" @click="closeMenu">
                    TICKET
                  </a>
                </li>
                <li>
                  <a href="#the-time-table-section" @click="closeMenu">
                    TIME TABLE
                  </a>
                </li>
                <li>
                  <a href="#the-speaker-list-section" @click="closeMenu">
                    SPEAKERS
                  </a>
                </li>
                <li>
                  <a href="#the-event-section" @click="closeMenu">
                    EVENTS
                  </a>
                </li>
                <li>
                  <a href="#the-access-section" @click="closeMenu">
                    ACCESS
                  </a>
                </li>
                <li>
                  <a href="#the-sponsor-list-section" @click="closeMenu">
                    SPONSERS
                  </a>
                </li>
                <li>
                  <a href="#the-staff-list-section" @click="closeMenu">
                    TEAM
                  </a>
                </li>
              </ul>
            </nav>
          </transition>
        </div>

        <nav class="menu-contents">
          <ul>
            <li>
              <a href="#the-ticket-section" @click="closeMenu">
                TICKET
              </a>
            </li>
            <li>
              <a href="#the-time-table-section" @click="closeMenu">
                TIME TABLE
              </a>
            </li>
            <li>
              <a href="#the-speaker-list-section" @click="closeMenu">
                SPEAKERS
              </a>
            </li>
            <li>
              <a href="#the-event-section" @click="closeMenu">
                EVENTS
              </a>
            </li>
            <li>
              <a href="#the-access-section" @click="closeMenu">
                ACCESS
              </a>
            </li>
            <li>
              <a href="#the-sponsor-list-section" @click="closeMenu">
                SPONSERS
              </a>
            </li>
            <li>
              <a href="#the-staff-list-section" @click="closeMenu">
                TEAM
              </a>
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
  isScrolled = false
  isOpen = false
  rootElement?: HTMLElement

  mounted() {
    const headerContainerElement = document.querySelector('.header-container')
    if (!headerContainerElement) return

    const sentinalElement = document.querySelector('.sentinal')
    if (!sentinalElement) return

    const checkScrolled = entries => {
      const sentinal = entries[0]
      this.isScrolled = !sentinal.isIntersecting
    }

    const observer = new IntersectionObserver(checkScrolled)
    observer.observe(sentinalElement)

    this.rootElement = document.documentElement
  }

  openMenu() {
    this.isOpen = true

    // Disable scroll on PC
    if (!this.rootElement) return
    this.rootElement.style.overflow = 'hidden'

    // Disable scroll on mobile
    this.rootElement.addEventListener('touchmove', disableScrollHandler, {
      passive: false
    })
  }

  closeMenu() {
    this.isOpen = false

    // Reset disabling scroll on PC
    if (!this.rootElement) return
    this.rootElement.style.overflow = 'auto'

    // Reset disabling scroll on mobile
    this.rootElement.removeEventListener('touchmove', disableScrollHandler)
  }
}

function disableScrollHandler(e) {
  e.preventDefault()
}
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  padding: 4vw 7.8vw;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.4s $easeInOutCubic;
}

a {
  color: $vue-dark-blue;
  text-decoration-line: none;
}

img {
  height: 5vw;
}

.scrolled {
  background-color: rgba(255, 255, 255, 0.85);
}

.fadeInDown-enter-active,
.fadeInDown-leave-active {
  transition: 0.5s;
}

.fadeInDown-enter,
.fadeInDown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.logo {
  z-index: 1;

  &:hover {
    opacity: 0.4;
  }
}

.togglable-menu {
  position: absolute;
  right: 0;
  width: 13vw;
}

.close-menu {
  position: absolute;
  color: $vue-dark-blue;
  font-size: 2.9vw;
  z-index: 1;
  cursor: pointer;
}

.hamburger {
  position: absolute;
  display: inline-block;
  height: 4px;
  width: 5.4vw;
  background: $vue-dark-blue;
  cursor: pointer;
  z-index: 1;

  &-top {
    top: 0;
  }

  &-middle {
    top: 2vw;
  }

  &-bottom {
    top: 4vw;
  }
}

.togglable-menu-contents {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.85);

  ul {
    margin: 22% auto;
    font-size: 4.7vw;
  }

  li {
    display: block;
    margin-bottom: 50px;
    text-align: center;
  }

  a {
    padding: 30px 26%;
  }

  a:hover {
    background-color: $vue-dark-blue;
    color: $white;
  }
}

.menu-contents {
  ul {
    display: flex;
    margin: 8px 0;
    font-size: 20px;
  }

  li:not(:last-child) {
    margin-right: 1.2vw;
  }

  a:hover {
    opacity: 0.4;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .header-container {
    padding: 30px 60px;
  }

  img {
    height: 40px;
  }

  .close-menu {
    font-size: 22px;
  }

  .togglable-menu {
    width: 100px;
  }

  .hamburger {
    width: 42px;

    &-middle {
      top: 15px;
    }

    &-bottom {
      top: 30px;
    }
  }

  .togglable-menu-contents {
    ul {
      margin: 160px auto;
      font-size: 36px;
    }

    a {
      padding: 30px 200px;
    }
  }
}

@media screen and (max-width: $layout-breakpoint--is-medium) {
  .menu-contents {
    display: none;
  }

  .togglable-menu {
    display: initial;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .menu-contents {
    display: initial;
  }

  .togglable-menu {
    display: none;
  }
}

@media screen and (min-width: 1180px) {
  .menu-contents {
    li:not(:last-child) {
      margin-right: 3.15vw;
    }
  }
}
</style>
