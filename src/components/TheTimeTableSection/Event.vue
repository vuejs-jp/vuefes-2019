<template>
  <div class="event">
    {{ event.fields.title }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import EventType from '~/types/event'

@Component
export default class Event extends Vue {
  @Prop()
  readonly event!: EventType
}
</script>

<style lang="scss" scoped>
.event {
  text-align: center;
  font-size: 2.4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 18px;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 20px;
  }
}
</style>
