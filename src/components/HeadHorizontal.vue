<template>
  <g :transform="transform">
    <transition-group tag="g" @leave="leave">
      <rect
        v-show="visible"
        key="1"
        ref="shape1"
        x="-60"
        y="-60"
        width="120"
        height="0"
      />
      <rect
        v-show="visible"
        key="2"
        ref="shape2"
        x="-60"
        y="60"
        width="120"
        height="0"
      />
    </transition-group>
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts } from './TheHeadSection.vue'

@Component
export default class HeadHorizontal extends Vue {
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
    TweenMax.to(this.$refs.shape1, 0.5, {
      attr: {
        y: -60,
        height: 0
      },
      ease: Power2.easeOut,
      onComplete() {
        done()
      }
    })
    TweenMax.to(this.$refs.shape2, 0.5, {
      attr: {
        y: 60,
        height: 0
      },
      ease: Power2.easeOut
    })
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
