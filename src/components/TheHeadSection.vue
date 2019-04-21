<template>
  <section class="the-head-section">
    <BaseSection>
      <div class="svg">
        <TheMainVisual />
      </div>

      <div class="title">
        Vue Fes Japan 2019
      </div>

      <div class="date-place">
        <span class="date-place__date">2019.10.12</span>
        <span class="date-place__day">SAT</span>
        <span class="date-place__place">TOC GOTANDA MESSE</span>
      </div>

      <div class="message-container">
        <div class="message-content">
          <p>
            2018 年は Vue.js にとって飛躍の年でした。
            エコシステムの成熟、関連ツールのアップデート、コミュニティの拡大と、数多くのポジティブな出来事がありました。
            また、世界各地でカンファレンスが開催され、Vue.js 日本ユーザーグループでも国内初の大規模カンファレンス
            <a
              href="https://vuefes.jp/2018/"
            >Vue Fes Japan 2018</a> を大盛況で終えることができました。
          </p>
          <p>
            今年はメジャーアップデートとなる Vue.js 3.0 のリリースが予定されており、
            世界中からますます注目が集まることでしょう。「Vue Fes Japan 2019」では、
            国内外の著名スピーカーによるセッションの他、ユーザー同士が相互に楽しめるカンファレンスを目指します。
            ぜひ、一緒に Vue.js を楽しみ、盛り上げましょう！
          </p>
          <p>
            Vue.js 日本ユーザーグループ 代表 川口 和也
            <a href="https://github.com/kazupon">@kazupon</a>
          </p>
        </div>
      </div>

      <div class="btn-wrapper">
        <div class="btn">
          <!-- TODO: Twitterアイコン -->
          <div class="btn__fold">
            Vue Fes Japan 公式 Twitter
          </div>
          <div class="btn__fold">
            で最新情報をチェック
          </div>
        </div>
      </div>
    </BaseSection>
  </section>
</template>

<script lang="ts">
/* eslint-disable */

import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'
import TheMainVisual from '~/components/TheMainVisual.vue'

@Component({
  components: {
    BaseSection,
    TheMainVisual
  }
})
export default class TheHeadSection extends Vue {
}
</script>

<style lang="scss" scoped>
.the-head-section {
  background: linear-gradient(to bottom, $hiwamoegi, $asagi);
}

p {
  color: white;
}

p a {
  color: white;
}

.date-place {
  color: white;
  font-size: 4.5vw;
  margin-top: -0.6em;
}

.date-place__day {
  /* TBD */
  font-size: 2vw;
}

.btn {
  background: #34495e;
  color: white;
  text-align: center;
  display: inline-block;
  padding: 1em 2em;
  margin: 0 auto;
}

.btn-wrapper {
  text-align: center;
}

.svg {
  height: calc(120px * 3 + 12px * 2);
  background: rgb(58, 56, 56);
}

.title {
  font-size: 9vw; /* TBD */
  font-weight: 700;
  color: white;
}

.btn__fold {
  display: inline-block;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .message-container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: flex-end;
  }

  .message-content {
    width: calc((5 / 7) * 100%);
  }

  .title {
    font-size: 64px;
  }

  .date-place {
    color: white;
    font-size: 32px;
    margin-top: -0.6em;
  }

  .date-place__day {
    /* TBD */
    font-size: 16px;
  }
}
</style>
