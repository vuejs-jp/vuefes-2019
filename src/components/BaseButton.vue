<template>
  <NuxtLink
    v-if="to"
    class="base-button"
    :to="to"
    v-bind="attrs"
    @click="emit('click', $event)"
  >
    <slot />
  </NuxtLink>

  <component
    :is="tagName"
    v-else
    class="base-button"
    v-bind="attrs"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

defineProps<{
  to?: string
}>()

const attrs = useAttrs()
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const tagName = computed(() =>
  typeof attrs.href === 'string' ? 'a' : 'button',
)
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 3.9% 6%;
  background-color: $primary-color;
  font-size: 5vw;
  line-height: 1.2;
  color: $primary-text-color--invert;
  border: 3px solid $primary-color;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  transition: 0.3s $easeInOutCubic;

  &:hover {
    background-color: $white;
    color: $primary-text-color;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    padding: 40px;
    // prettier-ignore
    width: calc(
      #{$layout-column-width--is-small-up} * 16 + #{$layout-gutter-width--is-small-up} * 15
    );
    min-width: $content-min-width--is-small-up;
    font-size: 24px;
  }
}

a.base-button {
  text-decoration: none;
}
</style>
