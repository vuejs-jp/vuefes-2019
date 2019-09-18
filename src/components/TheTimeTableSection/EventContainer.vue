<template>
  <div
    class="event-container"
    :class="{
      'event-container--has-room': eventContainer.fields.room,
      'event-container--has-events': hasEvents
    }"
  >
    <Room
      v-if="eventContainer.fields.room"
      :room="eventContainer.fields.room"
    />

    <div class="content">
      <div
        v-if="hasEventContainerParts"
        class="session__content half-session__container"
      >
        <!-- eventContainerPart -->
        <!-- prettier-ignore -->
        <div
          v-for="eventContainerPart in eventContainer.fields.contents"
          :key="eventContainerPart.sys.id"
          class="event-container-part"
        >
          <div class="event-container-part__time">
            {{ eventContainerPartById(eventContainerPart.sys.id).fields.startAt | toTime }} - {{ eventContainerPartById(eventContainerPart.sys.id).fields.endAt | toTime }}
          </div>

          <div class="event-container-part__content">
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

  get hasEvents() {
    return this.eventContainer.fields.contents.every(
      content => content.sys.contentType.sys.id === 'event'
    )
  }
}
</script>

<style lang="scss" scoped>
$event-container-min-height: 10.4vw;

.event-container {
  margin-top: 1vw;
  min-height: $event-container-min-height;
  background-color: rgba(255, 255, 255, 0.85);

  &:first-child {
    margin-top: 0;
  }
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: $event-container-min-height;
  padding: 2.6vw 3.4vw;
}

.event-container--has-room {
  .content {
    display: block;
    min-height: 0;
    padding-top: 2vw;
  }
}

.event-container--has-room.event-container--has-events {
  .content {
    padding-top: 0;
  }
}

.event-container-part {
  & + & {
    margin-top: 2.7vw;
    padding-top: 1.5vw;
    border-top: 1px solid rgba(52, 73, 94, 0.25);
  }

  &__time {
    font-size: 1.8vw;
    color: rgba(52, 73, 94, 0.6);
  }

  &__content {
    margin-top: 0.5vw;
  }
}
</style>
