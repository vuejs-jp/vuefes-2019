<template>
  <section class="the-head-section">
    <BaseSection>
      <div class="svg">
        SVG
      </div>

      <div class="title">
        Vue Fes Japan 2019
      </div>

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

      <div class="btn-wrapper">
        <div class="btn">
          <!-- TODO: Twitterアイコン -->
          Vue Fes Japan 公式 Twitter で最新情報をチェック
        </div>
      </div>
    </BaseSection>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheHeadSection extends Vue {}
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

.btn {
  background: #34495e;
  color: white;
  line-height: 4em;
  text-align: center;
  display: inline-block;
  padding: 0 2em;
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
  font-size: 64px;
  font-weight: 700;
  color: white;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  //TODO
}
</style>
