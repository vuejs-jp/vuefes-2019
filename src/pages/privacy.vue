<template>
  <BaseMain class="privacy">
    <template slot="heading">
      プライバシーポリシー
    </template>
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
  },
  asyncData({ route }) {
    return {
      path: route.path
    }
  }
})
export default class CodeOfConductPage extends Vue {
  path!: string

  private head() {
    const url = `https://vuefes.jp/2019${this.path}`
    const title = 'プライバシーポリシー - Vue Fes Japan 2019'
    const description = 'Vue Fes Japan 2019 のプライバシーポリシー情報です。'
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
