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
            class="menu-button"
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
                <li class="link-1">
                  <nuxt-link
                    to="/#the-speaker-list-section"
                    @click.native="closeMenu"
                  >
                    SPEAKERS
                  </nuxt-link>
                </li>
                <li class="link-2">
                  <nuxt-link
                    to="/#the-time-table-section"
                    @click.native="closeMenu"
                  >
                    TIME TABLE
                  </nuxt-link>
                </li>
                <li class="link-3">
                  <nuxt-link to="/#the-event-section" @click.native="closeMenu">
                    EVENTS
                  </nuxt-link>
                </li>
                <li class="link-4">
                  <nuxt-link
                    to="/#the-ticket-section"
                    @click.native="closeMenu"
                  >
                    TICKET
                  </nuxt-link>
                </li>
                <li class="link-5">
                  <nuxt-link
                    to="/#the-access-section"
                    @click.native="closeMenu"
                  >
                    ACCESS
                  </nuxt-link>
                </li>
                <li class="link-6">
                  <nuxt-link
                    to="/#the-sponsor-list-section"
                    @click.native="closeMenu"
                  >
                    SPONSORS
                  </nuxt-link>
                </li>
                <li class="link-7">
                  <nuxt-link
                    to="/#the-staff-list-section"
                    @click.native="closeMenu"
                  >
                    TEAM
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </transition>
        </div>

        <nav class="menu-contents">
          <ul>
            <li>
              <nuxt-link
                to="/#the-speaker-list-section"
                @click.native="closeMenu"
              >
                SPEAKERS
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/#the-time-table-section"
                @click.native="closeMenu"
              >
                TIME TABLE
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#the-event-section" @click.native="closeMenu">
                EVENTS
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#the-ticket-section" @click.native="closeMenu">
                TICKET
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#the-access-section" @click.native="closeMenu">
                ACCESS
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/#the-sponsor-list-section"
                @click.native="closeMenu"
              >
                SPONSORS
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/#the-staff-list-section"
                @click.native="closeMenu"
              >
                TEAM
              </nuxt-link>
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
  transition: 0.2s $easeInOutCubic;
}

img {
  display: block;
  height: 5vw;
}

.scrolled {
  background-color: rgba(255, 255, 255, 0.85);
}

@for $i from 1 through 7 {
  .fadeInDown-enter-active {
    transition: 0.5s $easeInOutCubic;

    .link-#{$i} {
      transition: 0.3s $easeInOutCubic;
      transition-property: opacity, transform;
      transition-delay: #{50ms * $i};
    }
  }

  .fadeInDown-enter {
    opacity: 0;

    .link-#{$i} {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
}

.logo {
  z-index: 1;

  &:hover {
    opacity: 0.4;
  }
}

.togglable-menu {
  position: absolute;
  right: 7.8vw;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 4.6vw;
  width: 5.4vw;
}

.menu-button {
  height: 100%;
  cursor: pointer;
}

.close-menu {
  position: absolute;
  top: 0.5vw;
  color: $vue-dark-blue;
  font-size: 2.9vw;
  z-index: 1;
  cursor: pointer;
}

.hamburger {
  position: absolute;
  display: inline-block;
  height: 2px;
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
    width: 42px;
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
