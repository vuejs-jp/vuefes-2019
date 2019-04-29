<template>
  <g :transform="transform">
    <transition @leave="leave">
      <circle v-show="visible" ref="shape" cx="0" cy="0" r="0" />
    </transition>
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts } from './TheHeadSection.vue'

@Component
export default class HeadCircle extends Vue {
  @Prop()
  readonly item!: Parts
  @Prop(Boolean)
  readonly visible!: boolean

  t = 0
  keyFrame = [0, 60]

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  leave(el, done) {
    TweenMax.to(this.$refs.shape, 0.5, {
      attr: {
        r: this.keyFrame[0]
      },
      ease: Power2.easeOut,
      onComplete() {
        done()
      }
    })
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape, 1, {
        attr: {
          r: this.keyFrame[1]
        },
        ease: Power2.easeOut
      })
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
circle {
  fill: $vue-dark-blue;
}
</style>
