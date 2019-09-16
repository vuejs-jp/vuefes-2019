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
