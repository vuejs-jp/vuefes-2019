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

<script setup lang="ts">
import { gsap, Power2 } from 'gsap'
import { partsCreateTime, partsLeaveTime, type Parts } from '~/lib/head-visual'
import image01 from '~/assets/images/header/image01.png?url'
import image02 from '~/assets/images/header/image02.png?url'
import image03 from '~/assets/images/header/image03.png?url'
import image04 from '~/assets/images/header/image04.png?url'
import image05 from '~/assets/images/header/image05.png?url'
import image06 from '~/assets/images/header/image06.png?url'

const props = defineProps<{
  item: Parts
}>()

const shape = ref<SVGCircleElement | null>(null)
const keyFrame = [0, 60 * (2 ^ 0.5)]
const images = [image01, image02, image03, image04, image05, image06]

const transform = computed(
  () =>
    `translate(${props.item.x}, ${props.item.y}) rotate(${props.item.rotate})`,
)
const clipId = computed(() => `photo-clip${props.item.key}`)
const clipPath = computed(() => `url(#${clipId.value})`)

onMounted(() => {
  window.setTimeout(() => {
    if (!shape.value) {
      return
    }

    gsap.to(shape.value, {
      duration: partsCreateTime,
      attr: {
        r: keyFrame[1],
      },
      ease: Power2.easeOut,
    })
  }, 0)
})

onBeforeUnmount(() => {
  if (!shape.value) {
    return
  }

  gsap.to(shape.value, {
    duration: partsLeaveTime,
    attr: {
      r: keyFrame[0],
    },
    ease: Power2.easeOut,
  })
})
</script>

<style lang="scss" scoped>
rect {
  fill: $vue-dark-blue;
}
</style>
