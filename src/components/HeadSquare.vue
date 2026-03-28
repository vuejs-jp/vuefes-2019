<script setup lang="ts">
import { gsap, Power2 } from 'gsap'
import { partsCreateTime, partsLeaveTime, type Parts } from '~/lib/head-visual'

const props = defineProps<{
  item: Parts
}>()

const shape = ref<SVGRectElement | null>(null)
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
        x: -60,
        y: -60,
        width: 120,
        height: 120,
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
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
    ease: Power2.easeOut,
  })
})
</script>

<template>
  <g :transform="transform">
    <rect ref="shape" x="0" y="0" width="0" height="0" />
  </g>
</template>

<style lang="scss" scoped>
rect {
  fill: $vue-dark-blue;
}
</style>
