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
        開場・受付
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        10:00 - 10:10
      </div>

      <div class="event__body">
        オープニング
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        10:10 - 11:10
      </div>

      <div
        v-lazy-container="{ selector: 'img.keynote__avatar' }"
        class="event__body keynote"
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

    <div class="event">
      <div class="event__time">
        12:00 - 12:30
      </div>

      <div class="event__body session">
        <div class="session__room session__room--plaid">
          PLAID ルーム
        </div>

        <div class="session__content">
          ランチセッション ランチセッション ランチセッション ランチセッション ランチセッション
        </div>
      </div>

      <div class="event__body session">
        <div class="session__room session__room--yumemi">
          YUMEMI ルーム
        </div>

        <div class="session__content">
          ランチセッション
        </div>
      </div>

      <div class="event__body session">
        <div class="session__room session__room--yesod">
          YESOD ルーム
        </div>

        <div class="session__content">
          ランチセッション
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event__time">
        14:30 - 15:10
      </div>

      <div class="event__body session">
        <div class="session__room session__room--plaid">
          PLAID ルーム
        </div>

        <div class="session__content">
          ランチセッション ランチセッション ランチセッション ランチセッション ランチセッション
        </div>
      </div>

      <div class="event__body session">
        <div class="session__room session__room--yumemi">
          YUMEMI ルーム
        </div>

        <div class="session__content">
          ランチセッション
        </div>
      </div>

      <div class="event__body session">
        <div class="session__room session__room--yesod">
          YESOD ルーム
        </div>

        <div class="session__content">
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

.the-time-table-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.event {
  text-align: center;

  & + & {
    margin-top: 4vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
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
  }

  &__body {
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
  }
}

.half-session {
  display: flex;
  align-items: center;

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
  }

  &__content {
    margin-left: 3vw;
    font-size: 2.8vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 20px;
      font-size: 18px;
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
