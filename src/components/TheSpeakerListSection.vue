<template>
  <BaseSection class="the-speaker-list-section">
    <template slot="heading">
      SPEAKERS
    </template>

    <div class="speaker-container">
      <div
        v-for="speaker in speakers"
        :key="speaker.twitter"
        v-lazy-container="{ selector: 'img.avatar' }"
        class="speaker"
      >
        <img
          class="avatar"
          :data-srcset="`${speaker.avatar}, ${speaker.avatar2x} 2x`"
          :data-src="speaker.avatar2x"
          alt=""
        />

        <div class="title">
          {{ speaker.title }}
        </div>

        <h3 class="name">
          {{ speaker.name }}
        </h3>
      </div>
    </div>

    <div class="more">
      他スピーカーは決定次第、更新予定です。
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { Speaker } from '~/store/speakers'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheSpeakerListSection extends Vue {
  @Getter('all', { namespace: 'speakers' })
  speakers!: Speaker[]
}
</script>

<style lang="scss" scoped>
.speaker-container {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin: -10px;
}

.speaker {
  margin: 10px;
  width: calc(50% - 20px);

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: calc(20% - 20px);
  }

  .avatar {
    width: 100%;
  }

  .title {
    font-size: 3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 1.2vw;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      font-size: 12px;
    }
  }

  .name {
    font-size: 5.5vw;
    line-height: 1.3;
    margin-bottom: 3vw;
    white-space: nowrap;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 2vw;
      margin-bottom: 20px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      font-size: 22px;
    }
  }
}

.more {
  margin-top: 3vw;
  font-size: 4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 20px;
    font-size: 18px;
  }
}
</style>
