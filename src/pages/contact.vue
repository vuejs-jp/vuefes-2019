<template>
  <div>
    <!-- TODO: ヘッダー追加 -->
    <ContactForm />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ContactForm from '~/components/ContactForm.vue'
import TheFooter from '~/components/TheFooter.vue'
@Component({
  components: {
    ContactForm,
    TheFooter
  }
})
export default class ContactPage extends Vue {}
</script>
