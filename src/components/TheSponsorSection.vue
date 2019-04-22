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

    <img
      class="image"
      :srcset="`${imageOne}, ${imageOne2x} 2x`"
      :src="imageOne2x"
    />

    <img
      class="image"
      :srcset="`${imageTwo}, ${imageTwo2x} 2x`"
      :src="imageTwo2x"
    />

    <img
      class="image"
      :srcset="`${imageThree}, ${imageThree2x} 2x`"
      :src="imageThree2x"
    />
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
export default class TheSponsorsSection extends Vue {
  private imageOne = require('~/assets/images/sponsors/image1.jpg')
  private imageOne2x = require('~/assets/images/sponsors/image1@2x.jpg')

  private imageTwo = require('~/assets/images/sponsors/image2.jpg')
  private imageTwo2x = require('~/assets/images/sponsors/image2@2x.jpg')

  private imageThree = require('~/assets/images/sponsors/image3.jpg')
  private imageThree2x = require('~/assets/images/sponsors/image3@2x.jpg')
}
</script>

<style lang="scss" scoped>
.the-sponsor-section {
  background: linear-gradient(to bottom, $tohoh, $sangosyu);
}
</style>
