<template>
  <g :transform="transform">
    <polygon key="0" ref="shape1" :points="keyFrame1[0]" />
    <polygon key="1" ref="shape2" :points="keyFrame2[0]" />
  </g>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

@Component
export default class HeadSlash extends Vue {
  @Prop()
  readonly item!: Parts

  keyFrame1 = ['-60 -60 -60 -60 -60 -60', '-60 -60 52 -60 -60 52']

  keyFrame2 = ['60 60 60 60 60 60', '60 60 -52 60 60 -52']

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${this.item.rotate})`
  }

  beforeDestroy() {
    TweenMax.to(this.$refs.shape1, partsLeaveTime, {
      attr: {
        points: this.keyFrame1[0]
      },
      ease: Power2.easeOut
    })
    TweenMax.to(this.$refs.shape2, partsLeaveTime, {
      attr: {
        points: this.keyFrame2[0]
      },
      ease: Power2.easeOut
    })
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape1, partsCreateTime, {
        attr: {
          points: this.keyFrame1[1]
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape2, partsCreateTime, {
        attr: {
          points: this.keyFrame2[1]
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
