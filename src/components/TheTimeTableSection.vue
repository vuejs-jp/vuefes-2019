<template>
  <BaseSection class="the-time-table-section">
    <template v-slot:heading>
      TIME TABLE
    </template>

    <ul>
      <li
        v-for="timeTableSection in timeTableSections"
        :key="timeTableSection.sys.id"
        class="event"
      >
        <!-- prettier-ignore -->
        <div class="event__time">
          {{ timeTableSection.fields.startAt | toTime }} - {{ timeTableSection.fields.endAt | toTime }}
        </div>

        <div class="event__body">
          <!-- EventContainer -->
          <!-- prettier-ignore -->
          <div
            v-for="eventContainer in timeTableSection.fields.eventContainers"
            :key="eventContainer.sys.id"
            class="event__content"
            :class="{
              session: timeTableSection.fields.eventContainers.length > 1
            }"
          >
            <Room
              v-if="eventContainerById(eventContainer.sys.id).fields.room"
              :room="eventContainerById(eventContainer.sys.id).fields.room"
            />

            <template v-if="eventContainerById(eventContainer.sys.id).fields.contents[0].sys.contentType.sys.id === 'eventContainerPart'">
              <div class="session__content half-session__container">
                <!-- eventContainerPart -->
                <div
                  v-for="eventContainerPart in eventContainerById(eventContainer.sys.id).fields.contents"
                  :key="eventContainerPart.sys.id"
                  class="half-session"
                >
                  <div class="half-session__time">
                    {{ eventContainerPartById(eventContainerPart.sys.id).fields.startAt | toTime }} - {{ eventContainerPartById(eventContainerPart.sys.id).fields.endAt | toTime }}
                  </div>

                  <div class="half-session__content">
                    <EventContent :event-content="eventContainerPartById(eventContainerPart.sys.id).fields.content" />
                  </div>
                </div>
              </div>
            </template>

            <template v-else>
              <EventContent
                v-for="content in eventContainerById(eventContainer.sys.id).fields.contents"
                :key="content.sys.id"
                :event-content="content"
              />
            </template>
          </div>
        </div>
      </li>
    </ul>

    <div class="event">
      <div class="event__time">
        9:30 - 10:30
      </div>

      <div class="event__body">
        <div class="event__content">
          開場・受付
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        10:30 - 10:40
      </div>

      <div class="event__body">
        <div class="event__content">
          オープニング
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        10:40 - 11:30
      </div>

      <div class="event__body">
        <div
          v-lazy-container="{ selector: 'img.keynote__avatar' }"
          class="event__content keynote"
        >
          <img
            class="keynote__avatar"
            :data-srcset="`${keynoteAvatar}, ${keynoteAvatar2x} 2x`"
            :data-src="keynoteAvatar2x"
            alt=""
          />

          <div class="keynote__content">
            <div class="keynote__title">
              キーノート
            </div>

            <div class="keynote__speaker-name">
              Evan You
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        11:30 - 12:00
      </div>

      <div class="event__body">
        <div class="event__content">
          Platinum スポンサーセッション
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        12:00 - 12:30
      </div>

      <div class="event__body">
        <div class="event__content session">
          <div class="session__room session__room--plaid">
            PLAID ルーム
          </div>

          <div class="session__content">
            ランチセッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yumemi">
            YUMEMI ルーム
          </div>

          <div class="session__content">
            ランチセッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yesod">
            イエソドルーム
          </div>

          <div class="session__content">
            ランチセッション
          </div>
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        12:30 - 13:30
      </div>

      <div class="event__body">
        <div class="event__content">
          ランチブレーク
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        13:30 - 14:10
      </div>

      <div class="event__body">
        <div class="event__content session">
          <div class="session__room session__room--plaid">
            PLAID ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yumemi">
            YUMEMI ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yesod">
            イエソドルーム
          </div>

          <div class="session__content half-session__container">
            <div class="half-session">
              <div class="half-session__time">
                13:30 - 13:50
              </div>

              <div class="half-session__content">
                ハーフセッション
              </div>
            </div>

            <div class="half-session">
              <div class="half-session__time">
                13:50 - 14:10
              </div>

              <div class="half-session__content">
                ハーフセッション
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        14:30 - 15:10
      </div>

      <div class="event__body">
        <div class="event__content session">
          <div class="session__room session__room--plaid">
            PLAID ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yumemi">
            YUMEMI ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yesod">
            イエソドルーム
          </div>

          <div class="session__content half-session__container">
            <div class="half-session">
              <div class="half-session__time">
                14:30 - 14:50
              </div>

              <div class="half-session__content">
                ハーフセッション
              </div>
            </div>

            <div class="half-session">
              <div class="half-session__time">
                14:50 - 15:10
              </div>

              <div class="half-session__content">
                ハーフセッション
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        15:30 - 16:10
      </div>

      <div class="event__body">
        <div class="event__content session">
          <div class="session__room session__room--plaid">
            PLAID ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yumemi">
            YUMEMI ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yesod">
            イエソドルーム
          </div>

          <div class="session__content half-session__container">
            <div class="half-session">
              <div class="half-session__time">
                15:30 - 15:50
              </div>

              <div class="half-session__content">
                ハーフセッション
              </div>
            </div>

            <div class="half-session">
              <div class="half-session__time">
                15:50 - 16:10
              </div>

              <div class="half-session__content">
                ハーフセッション
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        16:30 - 17:10
      </div>

      <div class="event__body">
        <div class="event__content session">
          <div class="session__room session__room--plaid">
            PLAID ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yumemi">
            YUMEMI ルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yesod">
            イエソドルーム
          </div>

          <div class="session__content">
            セッション
          </div>
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        17:10 - 18:00
      </div>

      <div class="event__body">
        <div class="event__content">
          会場転換
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        18:00 - 19:30
      </div>

      <div class="event__body">
        <div class="event__content">
          アフターパーティー
        </div>
      </div>
    </div>

    <div class="note">
      ※タイムテーブルは変更の可能性があります。
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import dayjs from 'dayjs'
import TimeTableSection from '~/types/timeTableSection'
import EventContainer from '~/types/eventContainer'
import EventContainerPart from '~/types/eventContainerPart'
import BaseSection from '~/components/BaseSection.vue'
import EventContent from '~/components/TheTimeTableSection/EventContent.vue'
import Room from '~/components/TheTimeTableSection/Room.vue'

@Component({
  components: {
    BaseSection,
    EventContent,
    Room
  },
  filters: {
    toTime(dateTime) {
      return dayjs(dateTime).format('HH:mm')
    }
  }
})
export default class TheTimeTableSection extends Vue {
  private keynoteAvatar = require('~/assets/images/speakers/yyx990803.jpg')
  private keynoteAvatar2x = require('~/assets/images/speakers/yyx990803@2x.jpg')

  @Getter('all', { namespace: 'timeTableSections' })
  private timeTableSections!: TimeTableSection[]

  @Getter('find', { namespace: 'eventContainers' })
  private eventContainerById!: (id: string) => EventContainer

  @Getter('find', { namespace: 'eventContainerParts' })
  private eventContainerPartById!: (id: string) => EventContainerPart
}
</script>

<style lang="scss" scoped>
$event__content-font-size--is-small: 3.5vw;
$event__content-font-size--is-small-up: 20px;

$half-session-padding-from-border--is-small: 1.6vw;
$half-session-padding-from-border--is-small-up: 12px;
$half-session-padding-from-border--is-medium-up: 10px;

$half-session__content-font-size--is-small: $event__content-font-size--is-small;
$half-session__content-font-size--is-small-up: $event__content-font-size--is-small-up;
$half-session__content-font-size--is-medium-up: 18px;

.the-time-table-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.event {
  text-align: center;

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    display: flex;
  }

  & + & {
    margin-top: 3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      margin-top: 5px;
    }
  }

  &__time {
    padding: 1vw;
    background-color: $primary-color;
    font-size: 3.5vw;
    color: $primary-text-color--invert;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 24px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      padding: 20px 0;
      font-size: 20px;
      flex: 0 0 140px;
    }
  }

  &__body {
    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      display: flex;
      margin-left: 5px;
      flex: 1 1 auto;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vw;
    padding: 2.8vw 4vw;
    min-height: 10.8vw;
    background-color: rgba(255, 255, 255, 0.85);
    font-size: $event__content-font-size--is-small;

    &:first-child {
      margin-top: 0;
    }

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 5px;
      padding: 20px 36px;
      min-height: 80px;
      font-size: $event__content-font-size--is-small-up;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      flex: 1;
      margin-top: 0;
      padding: 20px 16px;

      & + & {
        margin-left: 5px;
      }
    }
  }
}

.keynote {
  &__avatar {
    width: 16vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: 120px;
    }
  }

  &__content {
    margin-left: 3vw;
    text-align: left;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 16px;
    }
  }

  &__title {
    font-size: $event__content-font-size--is-small;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: $event__content-font-size--is-small-up;
    }
  }

  &__speaker-name {
    font-size: 5.3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 32px;
    }
  }
}

.session {
  min-height: 16vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    min-height: 120px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    flex-direction: column;
    justify-content: flex-start;
  }

  &__room {
    flex: 0 0 20vw;
    min-width: 76px;
    padding: 1vw;
    font-size: 2.2vw;
    white-space: nowrap;
    color: $primary-text-color--invert;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      flex: 0 0 154px;
      padding: 4px;
      font-size: 16px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      flex: 0;
      width: 128px;
    }

    &--plaid {
      background-color: $sangosyu;
    }

    &--yumemi {
      background-color: $tohoh;
    }

    &--yesod {
      background-color: $asagi;
    }
  }

  &__content {
    margin-left: 4vw;
    text-align: left;
    flex: 1;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 32px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 12px;
      margin-left: 0;
      font-size: 18px;

      &.half-session__container {
        display: block;
      }
    }
  }
}

.half-session {
  display: flex;
  align-items: center;
  padding-left: 1vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    padding-left: 12px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    justify-content: center;
    padding-left: 0;
  }

  &:first-of-type {
    padding-bottom: $half-session-padding-from-border--is-small;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      padding-bottom: $half-session-padding-from-border--is-small-up;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      padding-bottom: $half-session-padding-from-border--is-medium-up;
    }
  }

  &:last-of-type {
    padding-top: $half-session-padding-from-border--is-small;
    border-top: 1px solid rgba(52, 73, 94, 0.25);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      padding-top: $half-session-padding-from-border--is-small-up;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      padding-top: $half-session-padding-from-border--is-medium-up;
    }
  }

  &__time {
    font-size: 2vw;
    white-space: nowrap;
    color: rgba(52, 73, 94, 0.6);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 14px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      font-size: 12px;
    }
  }

  &__content {
    margin-left: 3vw;
    font-size: $half-session__content-font-size--is-small;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 20px;
      font-size: $half-session__content-font-size--is-small-up;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      margin-left: 12px;
      font-size: $half-session__content-font-size--is-medium-up;
      letter-spacing: -0.15vw;
    }
  }
}

.note {
  margin-top: 5vw;
  font-size: 2vw;
  color: $primary-text-color--invert;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 20px;
    font-size: 88.8%;
  }
}
</style>
