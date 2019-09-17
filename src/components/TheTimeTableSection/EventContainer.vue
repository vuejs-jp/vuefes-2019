<template>
  <div class="event-container">
    <Room
      v-if="eventContainer.fields.room"
      :room="eventContainer.fields.room"
    />

    <div
      v-if="hasEventContainerParts"
      class="session__content half-session__container"
    >
      <!-- eventContainerPart -->
      <!-- prettier-ignore -->
      <div
        v-for="eventContainerPart in eventContainer.fields.contents"
        :key="eventContainerPart.sys.id"
        class="half-session event-container-part"
      >
        <div class="half-session__time">
          {{ eventContainerPartById(eventContainerPart.sys.id).fields.startAt | toTime }} - {{ eventContainerPartById(eventContainerPart.sys.id).fields.endAt | toTime }}
        </div>

        <div class="half-session__content">
          <EventContent :content="eventContainerPartById(eventContainerPart.sys.id).fields.content" />
        </div>
      </div>
    </div>

    <template v-else>
      <EventContent
        v-for="content in eventContainer.fields.contents"
        :key="content.sys.id"
        :content="content"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Getter, Vue } from 'nuxt-property-decorator'
import dayjs from 'dayjs'
import EventContainerType from '~/types/eventContainer'
import EventContainerPart from '~/types/eventContainerPart'
import EventContent from '~/components/TheTimeTableSection/EventContent.vue'
import Room from '~/components/TheTimeTableSection/Room.vue'

@Component({
  components: {
    EventContent,
    Room
  },
  filters: {
    toTime(dateTime) {
      return dayjs(dateTime).format('HH:mm')
    }
  }
})
export default class EventContainer extends Vue {
  @Prop()
  readonly eventContainer!: EventContainerType

  @Getter('find', { namespace: 'eventContainerParts' })
  private eventContainerPartById!: (id: string) => EventContainerPart

  get hasEventContainerParts() {
    return this.eventContainer.fields.contents.every(
      content => content.sys.contentType.sys.id === 'eventContainerPart'
    )
  }
}
</script>
