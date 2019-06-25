<template>
  <BaseSection class="the-speaker-list-section">
    <template slot="heading">
      SPEAKERS
    </template>

    <div
      v-lazy-container="{ selector: 'img.avatar' }"
      class="speaker-container"
    >
      <img
        class="avatar"
        :data-srcset="`${avatar}, ${avatar2x} 2x`"
        :data-src="avatar2x"
        alt=""
      />

      <div class="speaker-content">
        <div class="title">
          Vue.js クリエーター
        </div>

        <h3 class="name">
          Evan You
        </h3>

        <div class="social">
          <a
            class="twitter"
            href="https://twitter.com/youyuxi"
            target="_blank"
            rel="noopener"
          >
            <img src="~/assets/images/logo-twitter.svg" alt="Twitter" />
          </a>
          <a
            class="github"
            href="https://github.com/yyx990803"
            target="_blank"
            rel="noopener"
          >
            <img src="~/assets/images/icon-github.svg" alt="GitHub" />
          </a>
        </div>

        <div class="description">
          <p>
            Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。
          </p>

          <p>
            かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。
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
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheSpeakerListSection extends Vue {
  private avatar = require('~/assets/images/speakers/evan.jpg')
  private avatar2x = require('~/assets/images/speakers/evan@2x.jpg')
}
</script>

<style lang="scss" scoped>
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
  margin-top: 5vw;
  font-size: 4vw;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker-container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    width: 70%;
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
