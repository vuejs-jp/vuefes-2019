<template>
  <BaseSection class="the-call-for-presenters-section">
    <template slot="heading">
      CALL FOR PRESENTERS
    </template>

    <div>
      <p>
        Vue Fes Japan 2019 では、スピーカー発表を広く一般から募集します。日本最大級の Vue.js カンファレンスで登壇する絶好の機会です。募集開始は、2019年5月下旬を予定しています。
      </p>

      <p>
        最新情報は、Vue Fes Japan の Twitter でご確認ください。
      </p>
    </div>

    <BaseButton href="#">
      Vue Fes Japan 公式 Twitter で最新情報をチェック
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
