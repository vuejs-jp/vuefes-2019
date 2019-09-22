<template>
  <BaseSection class="the-time-table-section">
    <template v-slot:heading>
      TIME TABLE
    </template>

    <ul>
      <li class="time-table-section show-on-large">
        <div class="time-table-section__time" />
        <div class="time-table-section__body">
          <div class="event-container room room--is-plaid">
            PLAID ルーム
          </div>
          <div class="event-container room room--is-yumemi">
            YUMEMI ルーム
          </div>
          <div class="event-container room room--is-yesod">
            イエソドルーム
          </div>
        </div>
      </li>
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

    <!-- prettier-ignore -->
    <div class="note">
      <p>※アフターパーティーへの会場転換時間を確保するための特別セッションです。日本各地の Vue.js コミュニティ紹介、スピーカーへのグループインタビューなどをお送りします（内容は予告なく変更の可能性があります）。入場はアフターパーティー付きチケットの方のみに限らせていただきますので、あらかじめご了承ください。</p>
      <p>また、別途休憩しながらお待ちいただけるスペースもご用意する予定です。</p>
    </div>
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
    toTime(dateTime: string): string {
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
      margin-top: 24px;
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

  & + & {
    margin-top: 1vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 5px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      margin-top: 0;
      margin-left: 4px;
    }
  }
}

.room {
  padding: 16px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: $primary-text-color--invert;

  &--is-plaid {
    background-color: $sangosyu;
  }

  &--is-yumemi {
    background-color: $tohoh;
  }

  &--is-yesod {
    background-color: $asagi;
  }
}

.note {
  margin-top: 4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 20px;
  }

  p {
    line-height: 1.5;
    font-size: 2vw;
    color: $primary-text-color--invert;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 88.8%;
    }
  }
}
</style>
