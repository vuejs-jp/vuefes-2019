<template>
  <div class="the-header">
    <div class="sentinal" />
    <div class="header-container" :class="{ scrolled: isScrolled }">
      <nuxt-link to="/" class="logo">
        <img src="~/assets/images/logo-vuefes.svg" alt="Vue Fes Japan" />
      </nuxt-link>
      <div class="navigation-container">
        <div class="togglable-menu">
          <div :class="{ 'is-open': isOpen }" @click="toggleMenu">
            <span class="hamburger hamburger-top" />
            <span class="hamburger hamburger-middle" />
            <span class="hamburger hamburger-bottom" />
          </div>
          <transition name="fadeInDown">
            <nav v-show="isOpen" class="menu-contents">
              <ul>
                <li>
                  <a href="#the-ticket-section" @click="toggleMenu">
                    TICKET
                  </a>
                </li>
                <li>
                  <a href="#the-time-table-section" @click="toggleMenu">
                    TIME TABLE
                  </a>
                </li>
                <li>
                  <a href="#the-speaker-list-section" @click="toggleMenu">
                    SPEAKERS
                  </a>
                </li>
                <li>
                  <a href="#the-event-section" @click="toggleMenu">
                    EVENTS
                  </a>
                </li>
                <li>
                  <a href="#the-access-section" @click="toggleMenu">
                    ACCESS
                  </a>
                </li>
                <li>
                  <a href="#the-sponsor-list-section" @click="toggleMenu">
                    SPONSERS
                  </a>
                </li>
                <li>
                  <a href="#the-staff-list-section" @click="toggleMenu">
                    TEAM
                  </a>
                </li>
              </ul>
            </nav>
          </transition>
        </div>
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

  toggleMenu() {
    this.isOpen = !this.isOpen

    if (!this.rootElement) return

    const overflow = this.isOpen ? 'hidden' : 'auto'
    this.rootElement.style.overflow = overflow
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  padding: 30px 60px;
  width: 100%;
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
  opacity: 0.4;
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
}

.togglable-menu {
  position: absolute;
  right: 0;
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
