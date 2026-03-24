<template>
  <g :transform="transform">
    <polygon ref="shape" :points="keyFrame[0]" />
  </g>
</template>

<script setup lang="ts">
import { gsap, Power2 } from 'gsap'
import { partsCreateTime, partsLeaveTime, type Parts } from '~/lib/head-visual'

const props = defineProps<{
  item: Parts
}>()

const shape = ref<SVGPolygonElement | null>(null)
const keyFrame = ['60 60 60 60 60 60', '60 60 -52 60 60 -52']
const transform = computed(
  () =>
    `translate(${props.item.x}, ${props.item.y}) rotate(${props.item.rotate})`,
)

onMounted(() => {
  window.setTimeout(() => {
    if (!shape.value) {
      return
    }

    gsap.to(shape.value, {
      duration: partsCreateTime,
      attr: {
        points: keyFrame[1],
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
      points: keyFrame[0],
    },
    ease: Power2.easeOut,
  })
})
</script>

<style lang="scss" scoped>
polygon {
  fill: $vue-dark-blue;
}
</style>
