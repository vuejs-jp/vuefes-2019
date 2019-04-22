<template>
  <g :transform="transform">
    <polygon points="-52 -60 52 -60 0 -8" />
    <polygon points="-60 -52 -60 52 -8 0" />
    <polygon points="52 60 -52 60 0 8" />
    <polygon points="60 52 60 -52 8 0" />
  </g>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  props: {
    item: Object
  }
})
export default class HeadCross extends Vue {
  item = this.item

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
