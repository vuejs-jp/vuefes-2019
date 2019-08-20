<template>
  <g :transform="transform">
    <polygon ref="shape" :points="keyFrame[0]" />
  </g>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

@Component
export default class HeadTriangle extends Vue {
  @Prop()
  readonly item!: Parts

  keyFrame = ['60 60 60 60 60 60', '60 60 -52 60 60 -52']

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  beforeDestroy() {
    TweenMax.to(this.$refs.shape, partsLeaveTime, {
      attr: {
        points: this.keyFrame[0]
      },
      ease: Power2.easeOut
    })
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape, partsCreateTime, {
        attr: {
          points: this.keyFrame[1]
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
