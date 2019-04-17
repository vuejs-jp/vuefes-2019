<template>
  <section class="the-speaker-section">
    <div class="section-container">
      <h2 class="heading">
        SPEAKERS
      </h2>

      <div class="speaker-container">
        <img
          class="avatar"
          :srcset="`${avatar}, ${avatar2x} 2x`"
          :src="avatar2x"
        />

        <div class="speaker-content">
          <div class="title">
            Vue.js クリエーター
          </div>

          <h3 class="name">
            Evan you
          </h3>

          <div class="social">
            <a
              class="twitter"
              href="https://twitter.com/youyuxi"
              target="_blank"
              rel="noopener"
            >
              <img src="~/assets/images/icon-twitter.svg" />
            </a>
            <a
              class="github"
              href="https://github.com/yyx990803"
              target="_blank"
              rel="noopener"
            >
              <img src="~/assets/images/icon-github.svg" />
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
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TheSpeakersSection extends Vue {
  private avatar = require('~/assets/images/speakers/evan.jpg')
  private avatar2x = require('~/assets/images/speakers/evan@2x.jpg')
}
</script>

<style lang="scss" scoped>
.the-speaker-section {
  padding: 60px 7.8%;
  background-image: url('~assets/images/texture.png');
  background-repeat: repeat;
}

.heading {
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 10.41vw;
  font-weight: bold;
}

.avatar {
  width: 100%;
}

.title {
  font-size: 3vw;
  line-height: 1.6;
}

.name {
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 5.21vw;
  line-height: 1.3;
}

.social img {
  width: 24px;
  height: 24px;
}

.social .github {
  margin-left: 12px;
}

.description p {
  margin: 6vw 0;
  font-size: 3.5vw;
  line-height: 1.8;
}

.more {
  font-size: 3.5vw;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .the-speaker-section {
    padding: 80px 70px;
  }

  .section-container {
    margin: 0 auto;
  }

  .heading {
    margin-bottom: 45px;
    font-size: 80px;
    line-height: 1;
  }

  .speaker-container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    width: 70%;
  }

  .avatar {
    width: calc((2 / 7) * 100%);
    margin-right: 40px;
  }

  .speaker-content {
    width: calc((5 / 7) * 100%);
  }

  .title {
    font-size: 16px;
  }

  .name {
    font-size: 32px;
  }

  .description p {
    margin: 30px 0;
    font-size: 16px;
  }

  .more {
    margin-top: 30px;
    font-size: 18px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .section-container {
    max-width: $page-container-max-width;
  }
}
</style>
