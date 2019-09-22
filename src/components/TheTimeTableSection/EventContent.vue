<template>
  <div class="event-content">
    <template v-if="content.sys.contentType.sys.id === 'session'">
      <template v-if="content.sys.id === '7xvdef2fny01iVD0ra03Iz'">
        <Keynote />
      </template>

      <template v-else>
        <Session :session="content" />
      </template>
    </template>

    <template v-else-if="content.sys.contentType.sys.id === 'event'">
      <Event :event="content" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SessionType from '~/types/session'
import EventType from '~/types/event'
import Keynote from '~/components/TheTimeTableSection/Keynote.vue'
import Session from '~/components/TheTimeTableSection/Session.vue'
import Event from '~/components/TheTimeTableSection/Event.vue'

@Component({
  components: {
    Keynote,
    Session,
    Event
  }
})
export default class EventContent extends Vue {
  @Prop()
  readonly content!: SessionType | EventType
}
</script>
