<template>
  <g :transform="transform">
    <!-- eslint-disable vue/max-attributes-per-line -->
    <rect key="1" ref="shape1" x="-60" y="-60" width="120" height="0" />
    <rect key="2" ref="shape2" x="-60" y="60" width="120" height="0" />
    <!-- eslint-enable vue/max-attributes-per-line -->
  </g>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

@Component
export default class HeadHorizontal extends Vue {
  @Prop()
  readonly item!: Parts

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  beforeDestroy() {
    TweenMax.to(this.$refs.shape1, partsLeaveTime, {
      attr: {
        y: -60,
        height: 0
      },
      ease: Power2.easeOut
    })
    TweenMax.to(this.$refs.shape2, partsLeaveTime, {
      attr: {
        y: 60,
        height: 0
      },
      ease: Power2.easeOut
    })
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape1, partsCreateTime, {
        attr: {
          height: 54
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape2, partsCreateTime, {
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
