<template>
  <g :transform="transform">
    <polygon ref="shape1" points="0 -60 0 -60 0 -60" />
    <polygon ref="shape2" points="-60 0 -60 0 -60 0" />
    <polygon ref="shape3" points="0 60 0 60 0 60" />
    <polygon ref="shape4" points="60 0 60 0 60 0" />
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
export default class HeadCross extends Vue {
  item = this.item

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape1, 1, {
        attr: {
          points: '-52 -60 52 -60 0 -8'
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape2, 1, {
        attr: {
          points: '-60 -52 -60 52 -8 0'
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape3, 1, {
        attr: {
          points: '52 60 -52 60 0 8'
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape4, 1, {
        attr: {
          points: '60 52 60 -52 8 0'
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
