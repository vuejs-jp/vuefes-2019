<template>
  <g :transform="transform">
    <polygon points="-52 -60 52 -60 0 -8" />
    <polygon points="-60 -52 -60 52 -8 0" />
    <polygon points="52 60 -52 60 0 8" />
    <polygon points="60 52 60 -52 8 0" />
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Parts } from './TheHeadSection.vue'

@Component
export default class HeadCross extends Vue {
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
polygon {
  fill: $vue-dark-blue;
}
</style>
