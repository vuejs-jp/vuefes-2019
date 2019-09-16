<template>
  <div class="event-content">
    <template v-if="eventContent.sys.contentType.sys.id === 'session'">
      <Session :session="eventContent" />
    </template>

    <template v-else-if="eventContent.sys.contentType.sys.id === 'event'">
      <Event :event="eventContent" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SessionType from '~/types/session'
import EventType from '~/types/event'
import Session from '~/components/TheTimeTableSection/Session.vue'
import Event from '~/components/TheTimeTableSection/Event.vue'

@Component({
  components: {
    Session,
    Event
  }
})
export default class EventContent extends Vue {
  @Prop()
  readonly eventContent!: SessionType | EventType
}
</script>
