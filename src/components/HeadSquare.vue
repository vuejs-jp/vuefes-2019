<template>
  <g :transform="transform">
    <polygon points="-60 -60 52 -60 -60 52" />
    <polygon points="60 60 -52 60 60 -52" />
  </g>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  props: {
    item: Object
  }
})
export default class HeadSquare extends Vue {
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
