<template>
  <BaseSection class="the-access-section">
    <template slot="heading">
      ACCESS
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
export default class TheAccessSection extends Vue {}
</script>
