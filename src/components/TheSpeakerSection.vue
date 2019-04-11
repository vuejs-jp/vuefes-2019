<template>
  <section class="the-speaker-section">
    <h2 class="heading">
      SPEAKERS
    </h2>

    <img
      class="avatar"
      :srcset="`${avatar}, ${avatar2x} 2x`"
      :src="avatar2x"
    />

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
      <p class="readable">
        Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。
      </p>

      <p class="readable">
        かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。'
      </p>
    </div>

    <div class="more">
      他スピーカーは決定次第、更新予定です。
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
}
</style>
