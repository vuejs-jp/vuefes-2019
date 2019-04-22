<template>
  <g :transform="transform">
    <rect x="-60" y="-60" width="120" height="54" />
    <rect x="-60" y="6" width="120" height="54" />
  </g>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  props: {
    item: Object
  }
})
export default class HeadHorizontal extends Vue {
  item = this.item

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }
}
</script>

<style lang="scss" scoped>
rect {
  fill: $vue-dark-blue;
}
</style>
