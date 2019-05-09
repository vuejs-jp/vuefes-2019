<template>
  <div class="contact-page">
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ContactForm from '~/components/ContactForm.vue'

@Component({
  components: {
    ContactForm
  },
  asyncData({ route }) {
    return {
      path: route.path
    }
  }
})
export default class ContactPage extends Vue {
  path!: string

  private head() {
    const url = `https://vuefes.jp/2019${this.path}`
    const title = 'お問い合わせ | Vue Fes Japan 2019'
    const description =
      'Vue Fes Japan 2019 についてのお問い合わせフォームです。'
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
