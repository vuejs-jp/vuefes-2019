<template>
  <BaseSection class="the-call-for-presenters-section">
    <template slot="heading">
      CALL FOR PRESENTERS
    </template>

    <div class="notification">
      <p>
        Vue Fes Japan 2019 でのスピーカーの募集を開始いたしました。日本最大級の Vue.js カンファレンスで登壇する絶好の機会ですので、ぜひご検討ください。
      </p>

      <p>
        CFP への応募、募集要項のご確認は <a href="https://fortee.jp/vuefes-2019/speaker/proposal/cfp" target="_blank" rel="noopener">こちら</a> からお願いいたします。
      </p>

      <p>
        応募期間は 2019年6月3日（月）〜 2019年6月30日（日）23:59 となっております。
      </p>
    </div>

    <BaseButton href="https://fortee.jp/vuefes-2019/speaker/proposal/cfp" target="_blank" rel="noopener">
      CFP への応募、募集要項の確認
    </BaseButton>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseButton from '~/components/BaseButton.vue'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseButton,
    BaseSection
  }
})
export default class TheCallForPresentersSection extends Vue {}
</script>

<style lang="scss" scoped>
.notification {
  margin-bottom: 5vw;
  padding: 6.7%;
  border: $black 1px solid;
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
