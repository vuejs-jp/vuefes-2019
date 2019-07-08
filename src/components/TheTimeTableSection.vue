<template>
  <BaseSection class="the-time-table-section">
    <template slot="heading">
      TIME TABLE
    </template>

    <div class="event">
      <div class="event__time">
        9:00 - 10:00
      </div>

      <div class="event__body">
        <div class="event__content">
          開場・受付
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        10:00 - 10:10
      </div>

      <div class="event__body">
        <div class="event__content">
          オープニング
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        10:10 - 11:10
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
        12:00 - 12:30
      </div>

      <div class="event__body">
        <div class="event__content session">
          <div class="session__room session__room--plaid">
            PLAID ルーム
          </div>

          <div class="session__content">
            ランチセッション ランチセッション ランチセッション ランチセッション ランチセッション
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
            YESOD ルーム
          </div>

          <div class="session__content">
            ランチセッション
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
            ランチセッション ランチセッション ランチセッション ランチセッション ランチセッション
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
            YESOD ルーム
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

    <div class="note">
      ※タイムテーブルは変更の可能性があります。
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheTimeTableSection extends Vue {
  private keynoteAvatar = require('~/assets/images/speakers/evan.jpg')
  private keynoteAvatar2x = require('~/assets/images/speakers/evan@2x.jpg')
}
</script>

<style lang="scss" scoped>
$session__room-width--is-small: 32vw;
$session__room-width--is-small-up: 152px;
$session__room-width--is-medium-up: 128px;
$event__time-width--is-medium-up: 140px;

.the-time-table-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.event {
  text-align: center;

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    display: flex;
  }

  & + & {
    margin-top: 4vw;

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
    font-size: 3vw;
    color: $primary-text-color--invert;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 24px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      font-size: 20px;
      flex: 0 0 $event__time-width--is-medium-up;
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
    font-size: 2.8vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 5px;
      padding: 20px 36px;
      min-height: 80px;
      font-size: 20px;
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
    font-size: 2.8vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 20px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      font-size: 18px;
    }
  }

  &__speaker-name {
    font-size: 4.2vw;

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
  }

  &__room {
    width: $session__room-width--is-small;
    padding: 1vw;
    font-size: 2.2vw;
    white-space: nowrap;
    color: $primary-text-color--invert;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: $session__room-width--is-small-up;
      padding: 4px;
      font-size: 16px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      width: $session__room-width--is-medium-up;
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
    width: calc(100% - #{$session__room-width--is-small} - 4vw);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 32px;
      width: calc(100% - #{$session__room-width--is-small-up} - 32px);
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      display: flex;
      justify-content: center;
      margin-top: 16px;
      margin-left: 0;
      width: 100%;
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

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    justify-content: center;
  }

  &:first-of-type {
    padding-bottom: 3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      padding-bottom: 10px;
    }
  }

  &:last-of-type {
    padding-top: 3vw;
    border-top: 1px solid rgba(52, 73, 94, 0.25);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      padding-top: 10px;
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
    font-size: 2.8vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 20px;
      font-size: 18px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      margin-left: 12px;
      font-size: 14px;
    }
  }
}

.note {
  margin-top: 5vw;
  font-size: 3.5vw;
  color: $primary-text-color--invert;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
  }
}
</style>
