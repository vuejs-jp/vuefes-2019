<template>
  <g :transform="transform">
    <transition-group tag="g" @leave="leave">
      <polygon v-show="visible" key="1" ref="shape1" :points="keyFrame1[0]" />
      <polygon v-show="visible" key="2" ref="shape2" :points="keyFrame2[0]" />
      <polygon v-show="visible" key="3" ref="shape3" :points="keyFrame3[0]" />
      <polygon v-show="visible" key="4" ref="shape4" :points="keyFrame4[0]" />
    </transition-group>
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
export default class HeadCross extends Vue {
  item = this.item
  keyFrame1 = ['0 -60 0 -60 0 -60', '-52 -60 52 -60 0 -8']
  keyFrame2 = ['-60 0 -60 0 -60 0', '-60 -52 -60 52 -8 0']
  keyFrame3 = ['0 60 0 60 0 60', '52 60 -52 60 0 8']
  keyFrame4 = ['60 0 60 0 60 0', '60 52 60 -52 8 0']

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  leave(el, done) {
    TweenMax.to(this.$refs.shape1, 0.5, {
      attr: {
        points: this.keyFrame1[0]
      },
      ease: Power2.easeOut,
      onComplete() {
        done()
      }
    })
    TweenMax.to(this.$refs.shape2, 0.5, {
      attr: {
        points: this.keyFrame2[0]
      },
      ease: Power2.easeOut
    })
    TweenMax.to(this.$refs.shape3, 0.5, {
      attr: {
        points: this.keyFrame3[0]
      },
      ease: Power2.easeOut
    })
    TweenMax.to(this.$refs.shape4, 0.5, {
      attr: {
        points: this.keyFrame4[0]
      },
      ease: Power2.easeOut
    })
  }

  created() {
    setTimeout(() => {
      TweenMax.to(this.$refs.shape1, 1, {
        attr: {
          points: this.keyFrame1[1]
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape2, 1, {
        attr: {
          points: this.keyFrame2[1]
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape3, 1, {
        attr: {
          points: this.keyFrame3[1]
        },
        ease: Power2.easeOut
      })
      TweenMax.to(this.$refs.shape4, 1, {
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
