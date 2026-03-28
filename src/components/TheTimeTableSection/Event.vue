<script setup lang="ts">
import type EventType from '~/types/event'

const props = defineProps<{
  event: EventType
}>()

const isCommunitySession = computed(
  () => props.event.sys.id === '7HH2CbTRcGkUYp9OF1LIVu',
)
</script>

<template>
  <div class="event">
    {{ event.fields.title }}
    <span v-if="isCommunitySession" class="note-mark">※</span>
  </div>
</template>

<style lang="scss" scoped>
.event {
  font-size: 3.3vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 18px;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 20px;
  }
}

.note-mark {
  vertical-align: top;
  font-size: 70%;
}
</style>
