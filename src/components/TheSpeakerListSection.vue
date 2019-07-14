<template>
  <BaseSection class="the-speaker-list-section">
    <template slot="heading">
      SPEAKERS
    </template>

    <div
      v-for="speaker in speakers"
      :key="speaker.twitter"
      v-lazy-container="{ selector: 'img.avatar' }"
      class="speaker-container"
    >
      <img
        class="avatar"
        :data-srcset="`${speaker.avatar}, ${speaker.avatar2x} 2x`"
        :data-src="speaker.avatar2x"
        alt=""
      />

      <div class="speaker-content">
        <div class="title">
          {{ speaker.title }}
        </div>

        <h3 class="name">
          {{ speaker.name }}
        </h3>

        <div class="social">
          <a
            class="twitter"
            :href="`https://twitter.com/${speaker.twitter}`"
            target="_blank"
            rel="noopener"
          >
            <img src="~/assets/images/logo-twitter.svg" alt="Twitter" />
          </a>
          <a
            class="github"
            :href="`https://github.com/${speaker.github}`"
            target="_blank"
            rel="noopener"
          >
            <img src="~/assets/images/icon-github.svg" alt="GitHub" />
          </a>
        </div>

        <div class="description">
          <p v-for="(paragraph, index) in speaker.paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>

    <div class="more">
      他スピーカーは決定次第、更新予定です。
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'
import { Speaker } from '~/store/speakers'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  },
  computed: {
    ...mapGetters('speakers', ['all'])
  }
})
export default class TheSpeakerListSection extends Vue {
  all!: () => Speaker[]

  get speakers() {
    return this.all()
  }
}
</script>

<style lang="scss" scoped>
.speaker-container + .speaker-container {
  margin-top: 10.4vw;
}

.avatar {
  width: 100%;
}

.title {
  font-size: 3vw;
  line-height: 1.6;
}

.name {
  font-size: 5.21vw;
  line-height: 1.3;
  margin-bottom: 0.5vw;
}

.social {
  margin-bottom: 5vw;

  img {
    width: 7.5vw;
    max-width: 50px;
    height: 7.5vw;
    max-height: 50px;
    transition: 0.2s $easeInOutCubic;

    &:hover {
      opacity: 0.4;
    }
  }
}

.social .github {
  margin-left: 12px;
}

.description p {
  font-size: 3.5vw;
}

.more {
  margin-top: 10.4vw;
  font-size: 4vw;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker-container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    width: 70%;

    & + & {
      margin-top: 80px;
    }
  }

  .avatar {
    width: calc((2 / 7) * 100%);
    margin-right: 20px;
  }

  .speaker-content {
    width: calc((5 / 7) * 100%);
  }

  .title {
    font-size: 16px;
  }

  .name {
    font-size: 32px;
    margin-bottom: 4px;
  }

  .social {
    margin-bottom: 20px;

    img {
      width: 32px;
      height: 32px;
    }
  }

  .description p {
    font-size: 16px;
  }

  .more {
    margin-top: 60px;
    font-size: 18px;
  }
}
</style>
