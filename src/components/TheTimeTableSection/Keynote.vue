<template>
  <div v-lazy-container="{ selector: 'img' }" class="keynote">
    <img
      class="avatar"
      :data-srcset="`${keynoteAvatar}, ${keynoteAvatar2x} 2x`"
      :data-src="keynoteAvatar2x"
      alt=""
    />

    <div class="content">
      <div class="title">
        キーノート
      </div>

      <div class="speaker-name">
        Evan You
      </div>
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
}

.content {
  margin-left: 3vw;
}

.title {
  font-size: 2.6vw;
}

.speaker-name {
  font-size: 3.6vw;
}
</style>
