<template>
  <g :transform="transform">
    <polygon points="-60 -60 52 -60 -60 52" />
    <polygon points="60 60 -52 60 60 -52" />
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Parts } from './TheHeadSection.vue'

@Component
export default class HeadSquare extends Vue {
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
