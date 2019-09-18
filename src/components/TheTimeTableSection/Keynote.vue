<template>
  <div v-lazy-container="{ selector: 'img' }" class="keynote">
    <nuxt-link class="link-to-session" to="/sessions/yyx990803/">
      <img
        class="avatar"
        :data-srcset="`${keynoteAvatar}, ${keynoteAvatar2x} 2x`"
        :data-src="keynoteAvatar2x"
        alt=""
      />
    </nuxt-link>

    <div class="content">
      <nuxt-link class="link-to-session" to="/sessions/yyx990803/">
        <div class="title">
          キーノート
        </div>

        <div class="speaker-name">
          Evan You
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Keynote extends Vue {
  private keynoteAvatar = require('~/assets/images/speakers/yyx990803.jpg')
  private keynoteAvatar2x = require('~/assets/images/speakers/yyx990803@2x.jpg')
}
</script>

<style lang="scss" scoped>
.keynote {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 16vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 120px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    width: 140px;
  }
}

.content {
  margin-left: 3vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-left: 18px;
  }
}

.title {
  font-size: 2.6vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 20px;
  }
}

.speaker-name {
  font-size: 3.6vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 28px;
  }
}

.link-to-session {
  text-decoration: none;
  color: $primary-text-color;
}
</style>
