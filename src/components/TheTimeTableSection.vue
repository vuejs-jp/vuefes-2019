<template>
  <BaseSection class="the-time-table-section">
    <template v-slot:heading>
      TIME TABLE
    </template>

    <ul>
      <li
        v-for="timeTableSection in timeTableSections"
        :key="timeTableSection.sys.id"
        class="time-table-section"
      >
        <!-- prettier-ignore -->
        <div class="time-table-section__time">
          {{ timeTableSection.fields.startAt | toTime }} - {{ timeTableSection.fields.endAt | toTime }}
        </div>

        <div class="time-table-section__body">
          <EventContainer
            v-for="eventContainer in timeTableSection.fields.eventContainers"
            :key="eventContainer.sys.id"
            :event-container="eventContainerById(eventContainer.sys.id)"
            class="event-container"
          />
        </div>
      </li>
    </ul>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import dayjs from 'dayjs'
import TimeTableSection from '~/types/timeTableSection'
import EventContainerType from '~/types/eventContainer'
import BaseSection from '~/components/BaseSection.vue'
import EventContainer from '~/components/TheTimeTableSection/EventContainer.vue'

@Component({
  components: {
    BaseSection,
    EventContainer
  },
  filters: {
    toTime(dateTime) {
      return dayjs(dateTime).format('HH:mm')
    }
  }
})
export default class TheTimeTableSection extends Vue {
  @Getter('all', { namespace: 'timeTableSections' })
  private timeTableSections!: TimeTableSection[]

  @Getter('find', { namespace: 'eventContainers' })
  private eventContainerById!: (id: string) => EventContainerType
}
</script>

<style lang="scss" scoped>
.the-time-table-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.time-table-section {
  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    display: flex;
  }

  & + & {
    margin-top: 3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 32px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      margin-top: 5px;
    }
  }

  &__time {
    text-align: center;
    padding: 1vw;
    background-color: $primary-color;
    font-size: 2.4vw;
    color: $primary-text-color--invert;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      padding: 12px;
      font-size: 18px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      padding: 24px 0;
      font-size: 24px;

      // prettier-ignore
      flex: 0 0 calc(#{$layout-column-width--is-small-up} * 4 + #{$layout-gutter-width--is-small-up} * 3);
    }
  }

  &__body {
    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      display: flex;
      margin-left: 4px;
      flex: 1 1 auto;
    }
  }
}

.event-container {
  width: 100%;
}
</style>
