<template>
  <g :transform="transform">
    <transition @leave="leave">
      <rect
        v-show="visible"
        ref="shape"
        x="0"
        y="0"
        width="0"
        height="0"
      />
    </transition>
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

@Component
export default class HeadSquare extends Vue {
  @Prop()
  readonly item!: Parts
  @Prop(Boolean)
  readonly visible!: boolean

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  leave(el, done) {
    TweenMax.to(this.$refs.shape, partsLeaveTime, {
      attr: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      ease: Power2.easeOut,
      onComplete() {
        done()
      }
    })
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape, partsCreateTime, {
        attr: {
          x: -60,
          y: -60,
          width: 120,
          height: 120
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
