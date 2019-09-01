<template>
  <BaseMain class="sponsors-page">
    <template slot="heading">
      SPONSORS
    </template>
    スポンサー詳細ページ
  </BaseMain>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseMain from '~/components/BaseMain.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseMain,
    BaseButton
  }
})
export default class SponsorsPage extends Vue {
  private head() {
    const url = `https://vuefes.jp/2019/sponsors`
    const title = 'スポンサー一覧 | Vue Fes Japan 2019'
    const description = 'Vue Fes Japan 2019 のスポンサー情報です。'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>
