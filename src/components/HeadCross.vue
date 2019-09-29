<template>
  <g :transform="transform">
    <polygon key="1" ref="shape1" :points="keyFrame1[0]" />
    <polygon key="2" ref="shape2" :points="keyFrame2[0]" />
    <polygon key="3" ref="shape3" :points="keyFrame3[0]" />
    <polygon key="4" ref="shape4" :points="keyFrame4[0]" />
  </g>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

@Component
export default class HeadCross extends Vue {
  @Prop()
  readonly item!: Parts

  @Prop(Boolean)
  readonly visible!: boolean

  keyFrame1 = ['0 -60 0 -60 0 -60', '-52 -60 52 -60 0 -8']

  keyFrame2 = ['-60 0 -60 0 -60 0', '-60 -52 -60 52 -8 0']

  keyFrame3 = ['0 60 0 60 0 60', '52 60 -52 60 0 8']

  keyFrame4 = ['60 0 60 0 60 0', '60 52 60 -52 8 0']

  get transform(): string {
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
    TweenMax.to(this.$refs.shape3, partsLeaveTime, {
      attr: {
        points: this.keyFrame3[0]
      },
      ease: Power2.easeOut
    })
    TweenMax.to(this.$refs.shape4, partsLeaveTime, {
      attr: {
        points: this.keyFrame4[0]
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
      TweenMax.to(this.$refs.shape3, partsCreateTime, {
        attr: {
          points: this.keyFrame3[1]
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape4, partsCreateTime, {
        attr: {
          points: this.keyFrame4[1]
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
