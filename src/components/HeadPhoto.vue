<template>
  <g :transform="transform">
    <clipPath id="clip-boundary">
      <rect x="-60" y="-60" width="120" height="120" />
    </clipPath>
    <clipPath :id="clipId">
      <circle ref="shape" cx="0" cy="0" r="0" clip-path="url(#clip-boundary)" />
    </clipPath>
    <image
      v-show="item.src == 'image01.png'"
      key="1"
      :href="images[0]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="clipPath"
    />
    <image
      v-show="item.src == 'image02.png'"
      key="2"
      :href="images[1]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="clipPath"
    />
    <image
      v-show="item.src == 'image03.png'"
      key="3"
      :href="images[2]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="clipPath"
    />
    <image
      v-show="item.src == 'image04.png'"
      key="4"
      :href="images[3]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="clipPath"
    />
    <image
      v-show="item.src == 'image05.png'"
      key="5"
      :href="images[4]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="clipPath"
    />
    <image
      v-show="item.src == 'image06.png'"
      key="6"
      :href="images[5]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="clipPath"
    />
  </g>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { TweenMax, Power2 } from 'gsap'
import { Parts, partsCreateTime, partsLeaveTime } from './TheHeadSection.vue'

/* eslint-disable import/no-webpack-loader-syntax */
const Image01 = require('!url-loader!~/assets/images/header/image01.png')
const Image02 = require('!url-loader!~/assets/images/header/image02.png')
const Image03 = require('!url-loader!~/assets/images/header/image03.png')
const Image04 = require('!url-loader!~/assets/images/header/image04.png')
const Image05 = require('!url-loader!~/assets/images/header/image05.png')
const Image06 = require('!url-loader!~/assets/images/header/image06.png')
/* eslint-enable import/no-webpack-loader-syntax */

@Component
export default class HeadPhoto extends Vue {
  @Prop()
  readonly item!: Parts

  keyFrame = [0, 60 * (2 ^ 0.5)]

  get images() {
    return [Image01, Image02, Image03, Image04, Image05, Image06]
  }

  get transform() {
    return `translate(${this.item.x}, ${this.item.y}) rotate(${this.item.rotate})`
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

  beforeDestroy() {
    TweenMax.to(this.$refs.shape, partsLeaveTime, {
      attr: {
        r: this.keyFrame[0]
      },
      ease: Power2.easeOut
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
