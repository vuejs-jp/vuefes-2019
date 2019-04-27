<template>
  <g :transform="transform">
    <circle cx="0" cy="0" r="60" />
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Parts } from './TheHeadSection.vue'

@Component
export default class HeadCircle extends Vue {
  @Prop()
  readonly item!: Parts

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }
}
</script>

<style lang="scss" scoped>
circle {
  fill: $vue-dark-blue;
}
</style>
