<template>
  <BaseSection class="the-speaker-list-section">
    <template v-slot:heading>
      SPEAKERS
    </template>

    <div class="speaker-container">
      <div
        v-for="speaker in speakers"
        :key="speaker.twitter"
        v-lazy-container="{ selector: 'img.avatar' }"
        class="speaker"
      >
        <nuxt-link class="avatar-link" :to="`/sessions/${speaker.id}/`">
          <img
            class="avatar"
            :data-srcset="`${speaker.avatar}, ${speaker.avatar2x} 2x`"
            :data-src="speaker.avatar2x"
            alt=""
          />
        </nuxt-link>

        <div class="title">
          {{ speaker.title }}
        </div>

        <nuxt-link class="name-link" :to="`/sessions/${speaker.id}/`">
          <h3 class="name">
            {{ speaker.name }}
          </h3>
        </nuxt-link>
      </div>
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { LocalSpeaker } from '~/store/localSpeakers'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheSpeakerListSection extends Vue {
  @Getter('all', { namespace: 'localSpeakers' })
  speakers!: LocalSpeaker[]
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

  .avatar-link {
    position: relative;
    display: block;
    box-sizing: border-box;
    font-size: 0;
    transition: box-shadow 0.4s $easeInOutCubic;

    &::before,
    &::after {
      box-sizing: inherit;
      content: '';
      position: absolute;
      border: 1px solid transparent;
      width: 0;
      height: 0;
    }

    &::before {
      top: 0;
      left: 0;
    }

    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
    }

    &:hover::before,
    &:hover::after {
      width: 100%;
      height: 100%;
    }

    &:hover::before {
      border-top-color: $primary-text-color;
      border-right-color: $primary-text-color;
      transition: width 0.075s $easeOutExpo, height 0.075s $easeOutExpo 0.075s;
    }

    &:hover::after {
      border-bottom-color: $primary-text-color;
      border-left-color: $primary-text-color;
      transition: width 0.075s $easeOutExpo 0.15s,
        height 0.075s $easeOutExpo 0.225s;
    }

    .avatar {
      width: 100%;
    }
  }

  .title {
    font-size: 3vw;
    margin-top: 1vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 1.2vw;
      margin-top: 10px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      font-size: 12px;
    }
  }

  .name-link {
    display: inline-block;
    font-size: 5.5vw;
    line-height: 1.3;
    margin-bottom: 3vw;
    white-space: nowrap;
    color: $primary-text-color;
    text-decoration: none;
    transition: 0.2s $easeInOutCubic;

    &:hover {
      opacity: 0.4;
    }

    .name {
      display: inline;
      font-size: inherit;
      font-weight: bold;
      line-height: 1;
    }

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 2vw;
      margin-bottom: 20px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      font-size: 22px;
    }
  }
}
</style>
