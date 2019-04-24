<template>
  <BaseSection class="the-code-of-conduct-section">
    <template slot="heading">
      行動規範
    </template>
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
export default class TheCodeOfConductSection extends Vue {}
</script>
