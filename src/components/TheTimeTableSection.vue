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
        11:10 - 11:40
      </div>

      <div class="event__body">
        <div class="event__content">
          プラチナスポンサーセッション
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        11:40 - 12:00
      </div>

      <div class="event__body">
        <div class="event__content">
          ランチ配布
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
            <!-- TODO: スタイルの確認が終わったら「ランチセッション」に変更する -->
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
          休憩
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
            ランチセッション
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
        14:10 - 14:30
      </div>

      <div class="event__body">
        <div class="event__content">
          休憩
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
            ランチセッション
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
        15:10 - 15:30
      </div>

      <div class="event__body">
        <div class="event__content">
          休憩
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
            ランチセッション
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
        16:10 - 16:30
      </div>

      <div class="event__body">
        <div class="event__content">
          休憩
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
            ランチセッション
          </div>
        </div>

        <div class="event__content session">
          <div class="session__room session__room--yesod">
            イエソドルーム
          </div>

          <div class="session__content half-session__container">
            <div class="half-session">
              <div class="half-session__time">
                16:30 - 16:50
              </div>

              <div class="half-session__content">
                ハーフセッション
              </div>
            </div>

            <div class="half-session">
              <div class="half-session__time">
                16:50 - 17:10
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
        17:10 - 17:20
      </div>

      <div class="event__body">
        <div class="event__content">
          クロージング
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        17:20 - 17:50
      </div>

      <div class="event__body">
        <div class="event__content">
          アフターパーティー準備
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
    font-size: 3vw;
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
      flex: 0;
      display: flex;
      justify-content: center;
      margin-top: 16px;
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
  font-size: 3.5vw;
  color: $primary-text-color--invert;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
  }
}
</style>
