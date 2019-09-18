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
$event-container-min-height--is-small: 10.4vw;
$event-container-min-height--is-small-up: 90px;

.event-container {
  min-height: $event-container-min-height--is-small;
  background-color: rgba(255, 255, 255, 0.85);

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    min-height: $event-container-min-height--is-small-up;
  }
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: $event-container-min-height--is-small;
  padding: 2.6vw 3.4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    min-height: $event-container-min-height--is-small-up;
    padding: 16px 28px;
  }
}

.event-container--has-room {
  .content {
    display: block;
    min-height: 0;
    padding-top: 2vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      padding-top: 12px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
}

.event-container--has-room.event-container--has-events {
  .content {
    padding-top: 0;

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      padding: 16px 28px;
    }
  }
}

.event-container-part {
  & + & {
    margin-top: 2.7vw;
    padding-top: 1.5vw;
    border-top: 1px solid rgba(52, 73, 94, 0.25);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
      padding-top: 8px;
    }
  }

  &__time {
    font-size: 1.8vw;
    color: rgba(52, 73, 94, 0.6);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 16px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      text-align: center;
    }
  }

  &__content {
    margin-top: 0.5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 2px;
    }
  }
}
</style>
