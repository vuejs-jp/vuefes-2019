<template>
  <BaseSection class="the-time-table-section">
    <template slot="heading">
      TIME TABLE
    </template>

    <div class="event">
      <div class="time">
        9:00 - 10:00
      </div>

      <div class="container">
        開場・受付
      </div>
    </div>

    <div class="event">
      <div class="time">
        10:00 - 10:10
      </div>

      <div class="container">
        オープニング
      </div>
    </div>

    <div class="event">
      <div class="time">
        10:10 - 11:10
      </div>

      <div class="container">
        <div
          v-lazy-container="{ selector: 'img.avatar' }"
          class="keynote"
        >
          <img
            class="avatar"
            :data-srcset="`${avatar}, ${avatar2x} 2x`"
            :data-src="avatar2x"
            alt=""
          />

          <div class="keynote-content">
            <div class="title">
              キーノート
            </div>

            <div class="speaker-name">
              Evan You
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheTimeTableSection extends Vue {
  private avatar = require('~/assets/images/speakers/evan.jpg')
  private avatar2x = require('~/assets/images/speakers/evan@2x.jpg')
}
</script>

<style lang="scss" scoped>
.the-time-table-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.event {
  text-align: center;

  & + & {
    margin-top: 4vw;
  }
}

.time {
  padding: 1vw;
  background-color: $primary-color;
  font-size: 5vw;
  color: $primary-text-color--invert;
}

.container {
  margin-top: 1vw;
  padding: 5vw;
  background-color: rgba(255, 255, 255, 0.85);
  font-size: 4vw;
}

.keynote {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 16vw;
}

.keynote-content {
  margin-left: 3vw;
  text-align: left;
}

.title {
  font-size: 4vw;
}

.speaker-name {
  font-size: 5.6vw;
}
</style>
