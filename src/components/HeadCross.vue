<script setup lang="ts">
import { gsap, Power2 } from 'gsap'
import { partsCreateTime, partsLeaveTime, type Parts } from '~/lib/head-visual'

const props = defineProps<{
  item: Parts
}>()

const shape1 = ref<SVGPolygonElement | null>(null)
const shape2 = ref<SVGPolygonElement | null>(null)
const shape3 = ref<SVGPolygonElement | null>(null)
const shape4 = ref<SVGPolygonElement | null>(null)

const keyFrame1 = ['0 -60 0 -60 0 -60', '-52 -60 52 -60 0 -8']
const keyFrame2 = ['-60 0 -60 0 -60 0', '-60 -52 -60 52 -8 0']
const keyFrame3 = ['0 60 0 60 0 60', '52 60 -52 60 0 8']
const keyFrame4 = ['60 0 60 0 60 0', '60 52 60 -52 8 0']

const transform = computed(
  () =>
    `translate(${props.item.x}, ${props.item.y}) rotate(${props.item.rotate})`,
)

function animateIn() {
  if (shape1.value) {
    gsap.to(shape1.value, {
      duration: partsCreateTime,
      attr: { points: keyFrame1[1] },
      ease: Power2.easeOut,
    })
  }
  if (shape2.value) {
    gsap.to(shape2.value, {
      duration: partsCreateTime,
      attr: { points: keyFrame2[1] },
      ease: Power2.easeOut,
    })
  }
  if (shape3.value) {
    gsap.to(shape3.value, {
      duration: partsCreateTime,
      attr: { points: keyFrame3[1] },
      ease: Power2.easeOut,
    })
  }
  if (shape4.value) {
    gsap.to(shape4.value, {
      duration: partsCreateTime,
      attr: { points: keyFrame4[1] },
      ease: Power2.easeOut,
    })
  }
}

function animateOut() {
  if (shape1.value) {
    gsap.to(shape1.value, {
      duration: partsLeaveTime,
      attr: { points: keyFrame1[0] },
      ease: Power2.easeOut,
    })
  }
  if (shape2.value) {
    gsap.to(shape2.value, {
      duration: partsLeaveTime,
      attr: { points: keyFrame2[0] },
      ease: Power2.easeOut,
    })
  }
  if (shape3.value) {
    gsap.to(shape3.value, {
      duration: partsLeaveTime,
      attr: { points: keyFrame3[0] },
      ease: Power2.easeOut,
    })
  }
  if (shape4.value) {
    gsap.to(shape4.value, {
      duration: partsLeaveTime,
      attr: { points: keyFrame4[0] },
      ease: Power2.easeOut,
    })
  }
}

onMounted(() => {
  window.setTimeout(animateIn, 0)
})

onBeforeUnmount(animateOut)
</script>

<template>
  <g :transform="transform">
    <polygon key="1" ref="shape1" :points="keyFrame1[0]" />
    <polygon key="2" ref="shape2" :points="keyFrame2[0]" />
    <polygon key="3" ref="shape3" :points="keyFrame3[0]" />
    <polygon key="4" ref="shape4" :points="keyFrame4[0]" />
  </g>
</template>

<style lang="scss" scoped>
polygon {
  fill: $vue-dark-blue;
}
</style>
