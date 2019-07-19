<template>
  <g :transform="transform">
    <circle ref="shape" cx="0" cy="0" r="0" />
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

@Component
export default class HeadCircle extends Vue {
  @Prop()
  readonly item!: Parts

  t = 0

  keyFrame = [0, 60]

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape, partsCreateTime, {
        attr: {
          r: this.keyFrame[1]
        },
        ease: Power2.easeOut
      })
    }, 0)
  }

  beforeDestroy() {
    TweenMax.to(this.$refs.shape, partsLeaveTime, {
      attr: {
        r: this.keyFrame[0]
      },
      ease: Power2.easeOut
    })
  }
}
</script>

<style lang="scss" scoped>
circle {
  fill: $vue-dark-blue;
}
</style>
