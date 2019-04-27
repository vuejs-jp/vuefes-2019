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

    <div class="image">
      <img
        :srcset="`${imageOne}, ${imageOne2x} 2x`"
        :src="imageOne2x"
      />

      <img
        :srcset="`${imageTwo}, ${imageTwo2x} 2x`"
        :src="imageTwo2x"
      />

      <img
        :srcset="`${imageThree}, ${imageThree2x} 2x`"
        :src="imageThree2x"
      />
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

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    position: relative;
    background: linear-gradient(to bottom right, $tohoh, $sangosyu);
  }
}

.description {
  background-color: $white;
  padding: 6.17%;
  margin-bottom: 40px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    position: absolute;
    width: calc((100% - 140px) * 0.7);
    max-width: calc((1180px - 140px) * 0.7);
    padding: 40px;
    z-index: 1;
  }

  p {
    font-size: 4vw;
    margin: 0;

    &:first-child {
      margin-bottom: 1em;
    }

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 18px;
    }
  }
}

.image {
  img {
    display: block;
    width: 100%;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 340px;
    margin: -125px 0 0 auto;
  }
}
</style>
