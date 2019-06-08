<template>
  <BaseSection class="the-store-section">
    <template slot="heading">
      Vue Fes Store
    </template>

    <div class="notification">
      <p>
        会場限定の Vue Fes Japan グッズをお買い求めいただける Vue Fes Store が登場します。当日しか手に入らないレアアイテムをお見逃しなく！
      </p>

      <p>
        なお、グッズ販売における利益は以下に分割して全額寄付される予定です。<br />
        ・Vue.js コアチームによる開発の支援<br />
        ・Vue.js 日本ユーザーグループによるコミュニティ活動の支援
      </p>
    </div>

    <div
      v-lazy-container="{ selector: 'img' }"
      class="image"
    >
      <img
        :data-srcset="`${image}, ${image2x} 2x`"
        :data-src="image2x"
        alt=""
      />
    </div>

    <div class="supplement">
      ※画像はイメージです。
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
.the-store-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.notification {
  padding: 6.7%;
  background-color: $white;
}

.image {
  margin: 2vw 0;

  img {
    display: block;
    width: 100%;
  }
}

.supplement {
  font-size: 88.8%;
}
</style>
