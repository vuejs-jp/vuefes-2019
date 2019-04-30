<template>
  <div>
    <TheHeaderLogo />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHeaderLogo from '~/components/TheHeaderLogo.vue'
import TheFooter from '~/components/TheFooter.vue'

@Component({
  components: {
    TheHeaderLogo,
    TheFooter
  }
})
export default class defaultLayout extends Vue {}
</script>
