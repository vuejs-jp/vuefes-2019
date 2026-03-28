<script setup lang="ts">
import keynoteAvatar from '~/assets/images/speakers/yyx990803.jpg?url'
import keynoteAvatar2x from '~/assets/images/speakers/yyx990803@2x.jpg?url'

const keynoteAvatarSrcSet = `${keynoteAvatar}, ${keynoteAvatar2x} 2x`
</script>

<template>
  <div class="keynote">
    <nuxt-link class="link-to-session" to="/sessions/yyx990803/">
      <img
        class="avatar"
        :srcset="keynoteAvatarSrcSet"
        :src="keynoteAvatar2x"
        loading="lazy"
        alt=""
      />
    </nuxt-link>

    <div class="content">
      <nuxt-link class="link-to-session" to="/sessions/yyx990803/">
        <div class="title">キーノート</div>

        <div class="speaker-name">Evan You</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keynote {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  display: block;
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
