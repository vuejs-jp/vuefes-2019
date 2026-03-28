<script setup lang="ts">
import { gsap, Power2 } from 'gsap'
import { partsCreateTime, partsLeaveTime, type Parts } from '~/lib/head-visual'

const props = defineProps<{
  item: Parts
}>()

const shape1 = ref<SVGRectElement | null>(null)
const shape2 = ref<SVGRectElement | null>(null)

const transform = computed(
  () =>
    `translate(${props.item.x}, ${props.item.y}) rotate(${props.item.rotate})`,
)

onMounted(() => {
  window.setTimeout(() => {
    if (shape1.value) {
      gsap.to(shape1.value, {
        duration: partsCreateTime,
        attr: {
          height: 54,
        },
        ease: Power2.easeOut,
      })
    }

    if (shape2.value) {
      gsap.to(shape2.value, {
        duration: partsCreateTime,
        attr: {
          y: 6,
          height: 54,
        },
        ease: Power2.easeOut,
      })
    }
  }, 0)
})

onBeforeUnmount(() => {
  if (shape1.value) {
    gsap.to(shape1.value, {
      duration: partsLeaveTime,
      attr: {
        y: -60,
        height: 0,
      },
      ease: Power2.easeOut,
    })
  }

  if (shape2.value) {
    gsap.to(shape2.value, {
      duration: partsLeaveTime,
      attr: {
        y: 60,
        height: 0,
      },
      ease: Power2.easeOut,
    })
  }
})
</script>

<template>
  <g :transform="transform">
    <!-- eslint-disable vue/max-attributes-per-line -->
    <rect key="1" ref="shape1" x="-60" y="-60" width="120" height="0" />
    <rect key="2" ref="shape2" x="-60" y="60" width="120" height="0" />
    <!-- eslint-enable vue/max-attributes-per-line -->
  </g>
</template>

<style lang="scss" scoped>
rect {
  fill: $vue-dark-blue;
}
</style>
