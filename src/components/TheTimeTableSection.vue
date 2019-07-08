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

      <div class="event__body">
        <div
          v-lazy-container="{ selector: 'img.keynote__avatar' }"
          class="keynote"
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
$session__room-width: 32vw;

.the-time-table-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.event {
  text-align: center;

  & + & {
    margin-top: 4vw;
  }

  &__time {
    padding: 1vw;
    background-color: $primary-color;
    font-size: 3vw;
    color: $primary-text-color--invert;
  }

  &__body {
    margin-top: 1vw;
    padding: 5vw;
    background-color: rgba(255, 255, 255, 0.85);
    font-size: 2.8vw;
  }
}

.keynote {
  display: flex;
  justify-content: center;
  align-items: center;

  &__avatar {
    width: 16vw;
  }

  &__content {
    margin-left: 3vw;
    text-align: left;
  }

  &__title {
    font-size: 2.8vw;
  }

  &__speaker-name {
    font-size: 4.2vw;
  }
}

.session {
  display: flex;
  align-items: center;

  &__room {
    padding: 1vw;
    width: $session__room-width;
    font-size: 2.2vw;
    white-space: nowrap;
    color: $primary-text-color--invert;

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
    width: calc(100vw - #{$session__room-width} - 4vw);
  }
}

.half-session {
  display: flex;
  align-items: center;

  &:first-of-type {
    padding-bottom: 3vw;
  }

  &:last-of-type {
    padding-top: 3vw;
    border-top: 1px solid rgba(52, 73, 94, 0.25);
  }

  &__time {
    font-size: 2vw;
    white-space: nowrap;
    color: rgba(52, 73, 94, 0.6);
  }

  &__content {
    margin-left: 3vw;
    font-size: 2.8vw;
  }
}
</style>
