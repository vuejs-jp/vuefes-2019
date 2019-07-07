<template>
  <BaseSection class="the-time-table-section">
    <template slot="heading">
      TIME TABLE
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
export default class TheTimeTableSection extends Vue {}
</script>
