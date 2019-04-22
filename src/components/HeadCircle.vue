<template>
  <g :transform="transform">
    <circle cx="0" cy="0" r="60" />
  </g>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  props: {
    item: Object
  }
})
export default class HeadCircle extends Vue {
  item = this.item

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
