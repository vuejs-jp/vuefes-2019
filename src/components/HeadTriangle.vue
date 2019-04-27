<template>
  <g :transform="transform">
    <transition @leave="leave">
      <polygon v-show="visible" ref="shape" :points="keyFrame[0]" />
    </transition>
  </g>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'

@Component({
  props: {
    item: Object,
    visible: Boolean
  }
})
export default class HeadTriangle extends Vue {
  item = this.item
  keyFrame = ['60 60 60 60 60 60', '60 60 -52 60 60 -52']

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  leave(el, done) {
    TweenMax.to(this.$refs.shape, 0.5, {
      attr: {
        points: this.keyFrame[0]
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
