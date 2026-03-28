<script setup lang="ts">
import { gsap, Power2 } from 'gsap'
import { partsCreateTime, partsLeaveTime, type Parts } from '~/lib/head-visual'

const props = defineProps<{
  item: Parts
}>()

const shape1 = ref<SVGPolygonElement | null>(null)
const shape2 = ref<SVGPolygonElement | null>(null)
const keyFrame1 = ['-60 -60 -60 -60 -60 -60', '-60 -60 52 -60 -60 52']
const keyFrame2 = ['60 60 60 60 60 60', '60 60 -52 60 60 -52']

const transform = computed(
  () =>
    `translate(${props.item.x}, ${props.item.y}) rotate(${props.item.rotate})`,
)

onMounted(() => {
  window.setTimeout(() => {
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
  }, 0)
})

onBeforeUnmount(() => {
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
})
</script>

<template>
  <g :transform="transform">
    <polygon key="0" ref="shape1" :points="keyFrame1[0]" />
    <polygon key="1" ref="shape2" :points="keyFrame2[0]" />
  </g>
</template>

<style lang="scss" scoped>
polygon {
  fill: $vue-dark-blue;
}
</style>
