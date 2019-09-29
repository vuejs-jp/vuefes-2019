<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class defaultLayout extends Vue {}
</script>
