<template>
  <div class="code-of-conduct">
    <TheCodeOfConductSection />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheCodeOfConductSection from '~/components/TheCodeOfConductSection.vue'
import TheFooter from '~/components/TheFooter.vue'

@Component({
  components: {
    TheCodeOfConductSection,
    TheFooter
  }
})
export default class CodeOfConduct extends Vue {}
</script>
