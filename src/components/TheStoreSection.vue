<template>
  <BaseSection class="the-store-section">
    <template slot="heading">
      Vue Fes Store
    </template>

    <div class="notification">
      <p>
        会場限定の Vue Fes Japan グッズをお買い求めいただける Vue Fes Store
        が登場します。当日しか手に入らないレアアイテムをお見逃しなく！
      </p>

      <p>
        なお、グッズ販売における利益は以下に分割して全額寄付される予定です。<br />
        ・Vue.js コアチームによる開発の支援<br />
        ・Vue.js 日本ユーザーグループによるコミュニティ活動の支援
      </p>

      <p>
        また同時に、Vue.js や JavaScript
        の技術同人誌を委託販売できる「技術同人誌販売コーナー」も設ける予定です。会場内に立ち読みブースを設置し、気に入った本があれば即購入できます。
      </p>

      <p>
        「技術同人誌販売コーナー」についての詳細は、
        <a
          class="link"
          href="https://note.mu/hashrock/n/n50fc189c0c5e"
          target="_blank"
          rel="noopener"
        >
          note の記事
        </a>
        をご覧ください。
      </p>
    </div>

    <div class="image-container">
      <div v-lazy-container="{ selector: 'img' }" class="image">
        <img
          :data-srcset="`${image}, ${image2x} 2x`"
          :data-src="image2x"
          alt=""
        />
      </div>

      <div class="note">
        ※画像はイメージです。
      </div>
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
export default class TheStoreSection extends Vue {
  private image = require('~/assets/images/store.png')

  private image2x = require('~/assets/images/store@2x.png')
}
</script>

<style lang="scss" scoped>
$content-max-width--is-small-up: 668px;
$content-max-width--is-medium-up: 820px;

.notification {
  padding: 6.7%;
  background-color: $white;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    max-width: $content-max-width--is-small-up;
    padding: 40px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    max-width: $content-max-width--is-medium-up;
  }
}

.image-container {
  .image {
    margin: 2vw 0;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin: 10px 0;
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .note {
    font-size: 88.8%;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-left: auto;
    max-width: $content-max-width--is-small-up;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    max-width: $content-max-width--is-medium-up;
  }
}
</style>
