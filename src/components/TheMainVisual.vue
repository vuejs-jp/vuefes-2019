<template>
  <svg :viewBox="viewBox" :width="width" :height="height">
    <circle cx="100" cy="100" r="10" />
  </svg>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class TheMainVisual extends Vue {
  width = 400
  height = 200

  get viewBox() {
    return `0 0 ${this.width} ${this.height}`
  }
}
</script>
