<template>
  <g :transform="transform">
    <polygon ref="shape" points="60 60 60 60 60 60" />
  </g>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'

@Component({
  props: {
    item: Object
  }
})
export default class HeadTriangle extends Vue {
  item = this.item

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape, 1, {
        attr: {
          points: '60 60 -52 60 60 -52'
        },
        ease: Power2.easeOut
      })
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
polygon {
  fill: $vue-dark-blue;
}
</style>
