<template>
  <g :transform="transform">
    <rect ref="shape1" x="-60" y="-60" width="120" height="0" />
    <rect ref="shape2" x="-60" y="60" width="120" height="0" />
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
export default class HeadHorizontal extends Vue {
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
          height: 54
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape2, 1, {
        attr: {
          y: 6,
          height: 54
        },
        ease: Power2.easeOut
      })
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
rect {
  fill: $vue-dark-blue;
}
</style>
