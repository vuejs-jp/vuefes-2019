<template>
  <BaseMain class="sponsors-page">
    <template slot="heading">
      SPONSORS
    </template>
    スポンサー詳細ページ

    <pre>
      {{ sponsors }}
    </pre>
  </BaseMain>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import { getSponsors } from '~/plugins/contentful.ts'
import BaseMain from '~/components/BaseMain.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseMain,
    BaseButton
  },
  async asyncData(): Promise<{ sponsors: Entry<any>[] } | void> {
    try {
      return {
        sponsors: await getSponsors()
      }
    } catch (error) {
      console.error(error)
    }
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
