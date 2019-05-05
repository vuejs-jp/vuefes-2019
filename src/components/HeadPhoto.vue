<template>
  <g :transform="transform">
    <clipPath id="clip-boundary">
      <rect
        x="-60"
        y="-60"
        width="120"
        height="120"
      />
    </clipPath>
    <clipPath id="photo-clip">
      <transition @leave="leave">
        <circle
          v-show="visible"
          ref="shape"
          cx="0"
          cy="0"
          r="0"
          clip-path="url(#clip-boundary)"
        />
      </transition>
    </clipPath>
    <image
      v-if="item.src=='image01.png'"
      href="~/assets/images/header/image01.png"
      x="-60"
      y="-60"
      width="120"
      height="120"
      clip-path="url(#photo-clip)"
    />
    <image
      v-if="item.src=='image02.png'"
      href="~/assets/images/header/image02.png"
      x="-60"
      y="-60"
      width="120"
      height="120"
      clip-path="url(#photo-clip)"
    />
    <image
      v-if="item.src=='image03.png'"
      href="~/assets/images/header/image03.png"
      x="-60"
      y="-60"
      width="120"
      height="120"
      clip-path="url(#photo-clip)"
    />
    <image
      v-if="item.src=='image04.png'"
      href="~/assets/images/header/image04.png"
      x="-60"
      y="-60"
      width="120"
      height="120"
      clip-path="url(#photo-clip)"
    />
    <image
      v-if="item.src=='image05.png'"
      href="~/assets/images/header/image05.png"
      x="-60"
      y="-60"
      width="120"
      height="120"
      clip-path="url(#photo-clip)"
    />
    <image
      v-if="item.src=='image06.png'"
      href="~/assets/images/header/image06.png"
      x="-60"
      y="-60"
      width="120"
      height="120"
      clip-path="url(#photo-clip)"
    />
  </g>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

@Component
export default class HeadPhoto extends Vue {
  @Prop()
  readonly item!: Parts
  @Prop(Boolean)
  readonly visible!: boolean

  keyFrame = [0, 60 * (2 ^ 0.5)]

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${
      this.item.rotate
    })`
  }

  get href() {
    return `~/assets/images/header/${this.item.src}`
  }

  leave(el, done) {
    TweenMax.to(this.$refs.shape, partsLeaveTime, {
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
      TweenMax.to(this.$refs.shape, partsCreateTime, {
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
rect {
  fill: $vue-dark-blue;
}
</style>
