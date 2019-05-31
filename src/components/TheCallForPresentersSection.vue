<template>
  <BaseSection class="the-call-for-presenters-section">
    <template slot="heading">
      CALL FOR PRESENTERS
    </template>

    <div class="notification">
      <p>
        Vue Fes Japan 2019 では、スピーカー発表を広く一般から募集します。日本最大級の Vue.js カンファレンスで登壇する絶好の機会です。募集開始は <span class="start-date">2019年6月3日（月）</span>を予定しています。<br />
        （このサイトに募集フォームへのリンクを追加します。）
      </p>

      <p>
        最新情報は
        <a
          class="link"
          href="https://twitter.com/vuefes"
          target="_blank"
          rel="noopener"
        >
          Vue Fes Japan の Twitter
        </a>
        でご確認ください。
      </p>
    </div>

    <LinkToTwitter />
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'
import LinkToTwitter from '~/components/LinkToTwitter.vue'

@Component({
  components: {
    BaseSection,
    LinkToTwitter
  }
})
export default class TheCallForPresentersSection extends Vue {}
</script>

<style lang="scss" scoped>
.notification {
  margin-bottom: 5vw;
  padding: 6.7%;
  border: $black 1px solid;

  a {
    text-decoration: none;
  }
}

.start-date {
  text-decoration: underline;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .notification {
    width: 80%;
    margin-left: auto;
    margin-bottom: 60px;
    padding: 40px;
  }
}
</style>
