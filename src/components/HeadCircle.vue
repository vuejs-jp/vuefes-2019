<script setup lang="ts">
import { gsap, Power2 } from 'gsap'
import { partsCreateTime, partsLeaveTime, type Parts } from '~/lib/head-visual'

const props = defineProps<{
  item: Parts
}>()

const shape = ref<SVGCircleElement | null>(null)
const keyFrame = [0, 60]
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

<template>
  <g :transform="transform">
    <circle ref="shape" cx="0" cy="0" r="0" />
  </g>
</template>

<style lang="scss" scoped>
circle {
  fill: $vue-dark-blue;
}
</style>
