<template>
  <BaseSection class="the-sponsor-section">
    <template slot="heading">
      SPONSORS
    </template>

    <div class="content">
      <div class="description">
        <p>
          Vue.js に関わる人々が集まる Vue Fes Japan 2019 をよりよいイベントにするため、スポンサーを募集します。募集開始は、2019 年 5 月下旬を予定しています。
        </p>

        <p>
          最新情報は、Vue Fes Japan の Twitter でご確認ください。
        </p>
      </div>

      <LinkToTwitter class="is-small-up" />
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

    <LinkToTwitter class="is-small" />
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
// TODO: small サイズとそれより上のサイズで要素を切り替える実装はイケてないと思うので、もっと良い実装にしたい
.is-small,
.is-small-up {
  display: none;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .is-small-up {
    display: flex;
  }
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  .is-small {
    display: flex;
  }
}

.the-sponsor-section {
  background: linear-gradient(to bottom, $tohoh, $sangosyu);

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    position: relative;
    background: linear-gradient(to bottom right, $tohoh, $sangosyu);
  }
}

.content {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    position: absolute;
    width: calc(100% - 140px);
    max-width: $page-container-max-width;
  }
}

.description {
  background-color: $white;
  padding: 6.17%;
  margin-bottom: 40px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 70%;
    max-width: calc(#{$page-container-max-width} * 0.7);
    padding: 40px;
    z-index: 1;
  }

  p {
    font-size: 4vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 18px;
    }
  }
}

.link-to-twitter {
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 700px;
  }
}

.image {
  margin-bottom: 40px;

  img {
    display: block;
    width: 100%;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 340px;
    margin: -125px 0 0 auto;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin: -125px 5% 0 auto;
  }
}
</style>
