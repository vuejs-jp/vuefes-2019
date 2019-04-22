<template>
  <BaseSection class="the-sponsor-section">
    <template slot="heading">
      SPONSORS
    </template>

    <div class="description">
      <p>
        Vue.jsに関わる人々が集まるVue Fes Japan 2019をよりよいイベントにするため、スポンサーを募集します。募集開始は、2019年4月下旬を予定しています。
      </p>

      <p>
        最新情報は、Vue Fes JapanのTwitterでご確認ください。
      </p>
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
export default class TheSponsorsSection extends Vue {}
</script>

<style lang="scss" scoped>
.the-sponsor-section {
  background: linear-gradient(to bottom, $tohoh, $sangosyu);
}
</style>
