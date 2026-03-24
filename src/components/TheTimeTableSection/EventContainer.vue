<template>
  <div
    class="event-container"
    :class="{
      'event-container--has-room': eventContainer.fields.room,
      'event-container--has-sessions': hasSessions && !hasKeynote,
      'event-container--has-events': hasEvents,
      'event-container--has-events-closed': hasEventsClosed,
    }"
  >
    <Room
      v-if="eventContainer.fields.room"
      :room="eventContainer.fields.room"
    />

    <div
      v-if="hasTranslation"
      class="translation"
      :class="{ 'translation--is-keynote': hasKeynote }"
    >
      <img src="~/assets/images/icon-translation.svg" alt="" />
      <span class="translation-text">同時通訳あり</span>
    </div>

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
            {{ formatTime(eventContainerPartById(eventContainerPart.sys.id).fields.startAt) }} - {{ formatTime(eventContainerPartById(eventContainerPart.sys.id).fields.endAt) }}
          </div>

          <div class="event-container-part__content">
            <EventContent :content="eventContainerPartContent(eventContainerPart.sys.id)" />
          </div>
        </div>
      </div>

      <template v-else>
        <EventContent
          v-for="content in eventContainer.fields.contents"
          :key="content.sys.id"
          :content="eventContent(content)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTime } from '~/lib/time'
import type { EntryLink } from '~/types/contentful'
import type EventContainerType from '~/types/eventContainer'
import type EventType from '~/types/event'
import type Session from '~/types/session'

const props = defineProps<{
  eventContainer: EventContainerType
}>()

const { findEventContainerPartById } = useSiteData()

function eventContainerPartById(id: string) {
  const eventContainerPart = findEventContainerPartById(id)

  if (!eventContainerPart) {
    throw new Error(`Unknown event container part: ${id}`)
  }

  return eventContainerPart
}

function isEntryLink(
  content: Session | EventType | EntryLink,
): content is EntryLink {
  return content.sys.type === 'Link'
}

function eventContainerPartContent(id: string): Session | EventType {
  const content = eventContainerPartById(id).fields.content

  if (isEntryLink(content)) {
    throw new Error(`Event container part content is unresolved: ${id}`)
  }

  return content
}

function eventContent(
  content: EventContainerType['fields']['contents'][number],
): Session | EventType {
  if (content.sys.contentType.sys.id === 'eventContainerPart') {
    throw new Error(
      `Unexpected event container part content: ${content.sys.id}`,
    )
  }

  return content as Session | EventType
}

const hasEventContainerParts = computed(() =>
  props.eventContainer.fields.contents.every(
    (content) => content.sys.contentType.sys.id === 'eventContainerPart',
  ),
)

const hasKeynote = computed(() =>
  props.eventContainer.fields.contents.some(
    (content) => content.sys.id === '7xvdef2fny01iVD0ra03Iz',
  ),
)

const hasSessions = computed(() =>
  props.eventContainer.fields.contents.every(
    (content) => content.sys.contentType.sys.id === 'session',
  ),
)

const hasTranslation = computed(() => {
  const isSession = (
    content: EventContainerType['fields']['contents'][number],
  ): content is Session => content.sys.contentType.sys.id === 'session'

  return props.eventContainer.fields.contents.some(
    (content) => isSession(content) && content.fields.hasTranslation === true,
  )
})

const hasEvents = computed(() =>
  props.eventContainer.fields.contents.every(
    (content) => content.sys.contentType.sys.id === 'event',
  ),
)

const hasEventsClosed = computed(() =>
  props.eventContainer.fields.contents.every(
    (content) => content.sys.id === '5NPCujTlHiEd7KcRmGp3hS',
  ),
)
</script>

<style lang="scss" scoped>
$event-container-min-height--is-small: 10.4vw;
$event-container-min-height--is-small-up: 84px;

.event-container {
  position: relative;
  min-height: $event-container-min-height--is-small;
  background-color: rgba(255, 255, 255, 0.85);

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    min-height: $event-container-min-height--is-small-up;
  }

  &.event-container--has-events-closed {
    background-color: rgba(255, 255, 255, 0.5);
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

.event-container--has-room.event-container--has-sessions {
  .content {
    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      align-items: flex-start;
      min-height: 210px; // 同時通訳ありの表示と被ってしまうことを回避する
    }
  }
}

.event-container--has-room.event-container--has-events {
  .content {
    padding-top: 0;

    // コミュニティセッションが改行されたときに、
    // .event に text-align: center を使うよりも見映えが良い
    display: flex;
    justify-content: center;

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
  }

  &__content {
    margin-top: 0.5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 2px;
    }
  }
}

.room {
  display: inline-block;
  vertical-align: top;

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    display: block;
  }
}

.event-content + .event-content {
  margin-top: 1.6vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 8px;
  }
}

.translation {
  display: inline-flex;
  align-items: center;
  padding: 0.5vw 0.8vw;
  vertical-align: top;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    padding: 8px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    position: absolute;
    top: 15px;
    left: 10px;
    padding: 0;
  }

  img {
    width: 2.6vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: 20px;
    }
  }

  .translation-text {
    margin-left: 1vw;
    font-size: 2vw;
    font-weight: bold;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 6px;
      font-size: 16px;
    }
  }
}

.translation.translation--is-keynote {
  position: absolute;

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    $room-height: 4px;

    top: calc(15px - #{$room-height});
  }
}
</style>
