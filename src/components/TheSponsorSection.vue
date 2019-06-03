<template>
  <BaseSection class="the-sponsor-section">
    <template slot="heading">
      SPONSORS
    </template>

    <div class="content">
      <div class="description">
        <p>
          Vue.js に関わる人々が集まる Vue Fes Japan 2019 をよりよいイベントにするため、スポンサーを募集します。<a class="link" href="https://fortee.jp/vuefes-2019/sponsor/form" target="_blank" rel="noopener">こちらのフォーム</a> よりお申し込みください。応募締め切りは、2019年7月31日（水）です。
        </p>

        <p>
          最新情報は <a class="link" href="https://twitter.com/vuefes" target="_blank" rel="noopener">Vue Fes Japan の Twitter</a> もしくは <a class="link" href="https://note.mu/vuejs_jp/m/mb35849fee631" target="_blank" rel="noopener">公式 note</a> でご確認ください。
        </p>

        <p>
          資料は <a class="link" href="https://docs.google.com/presentation/d/1YSr_QVUUKZmkYMBICE3mIQl2Um9OXfeS2AKgiOHX4Ds/edit#slide=id.p" target="_blank" rel="noopener">こちら</a>
        </p>
      </div>

      <BaseButton
        class="link-to-sponsor-form show-on-medium-and-up"
        href="https://fortee.jp/vuefes-2019/sponsor/form"
        target="_blank"
        rel="noopener"
      >
        スポンサー申し込みフォーム
      </BaseButton>
    </div>

    <div
      v-lazy-container="{ selector: 'img' }"
      class="image"
    >
      <img
        :data-srcset="`${imageOne}, ${imageOne2x} 2x`"
        :data-src="imageOne2x"
        alt="VueFes Image"
      />

      <img
        :data-srcset="`${imageTwo}, ${imageTwo2x} 2x`"
        :data-src="imageTwo2x"
        alt="VueFes Image"
      />

      <img
        :data-srcset="`${imageThree}, ${imageThree2x} 2x`"
        :data-src="imageThree2x"
        alt="VueFes Image"
      />
    </div>

    <BaseButton
      class="link-to-sponsor-form show-on-small"
      href="https://fortee.jp/vuefes-2019/sponsor/form"
      target="_blank"
      rel="noopener"
    >
      スポンサー申し込みフォーム
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
  background: linear-gradient(to right bottom, $tohoh, $sangosyu);
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
  margin-bottom: 5vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 70%;
    max-width: calc(#{$page-container-max-width} * 0.7);
    padding: 40px;
    margin-top: -30px;
    margin-bottom: 60px;
    z-index: 1;
  }
}

.start-datetime {
  text-decoration: underline;
}

.link-to-sponsor-form {
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 700px;
    margin: 0 auto 0 0;
  }
}

.image {
  margin-bottom: 5vw;

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
