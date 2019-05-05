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
    <clipPath :id="clipId">
      <circle
        ref="shape"
        cx="0"
        cy="0"
        r="0"
        clip-path="url(#clip-boundary)"
      />
    </clipPath>
    <transition @leave="leave">
      <g v-show="visible">
        <image
          v-show="item.src=='image01.png'"
          key="1"
          href="~/assets/images/header/image01.png"
          x="-60"
          y="-60"
          width="120"
          height="120"
          :clip-path="clipPath"
        />
        <image
          v-show="item.src=='image02.png'"
          key="2"
          href="~/assets/images/header/image02.png"
          x="-60"
          y="-60"
          width="120"
          height="120"
          :clip-path="clipPath"
        />
        <image
          v-show="item.src=='image03.png'"
          key="3"
          href="~/assets/images/header/image03.png"
          x="-60"
          y="-60"
          width="120"
          height="120"
          :clip-path="clipPath"
        />
        <image
          v-show="item.src=='image04.png'"
          key="4"
          href="~/assets/images/header/image04.png"
          x="-60"
          y="-60"
          width="120"
          height="120"
          :clip-path="clipPath"
        />
        <image
          v-show="item.src=='image05.png'"
          key="5"
          href="~/assets/images/header/image05.png"
          x="-60"
          y="-60"
          width="120"
          height="120"
          :clip-path="clipPath"
        />
        <image
          v-show="item.src=='image06.png'"
          key="6"
          href="~/assets/images/header/image06.png"
          x="-60"
          y="-60"
          width="120"
          height="120"
          :clip-path="clipPath"
        />
      </g>
    </transition>
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

  get clipId() {
    return `photo-clip${this.item.key}`
  }

  get clipPath() {
    return `url(#${this.clipId})`
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
