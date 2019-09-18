<template>
  <div class="room" :class="roomClasses.get(room.sys.id)">
    {{ room.fields.name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import RoomType from '~/types/room'

@Component
export default class Room extends Vue {
  @Prop()
  readonly room!: RoomType

  private roomClasses = new Map([
    ['4MMzyRoKhtw4BlxWnCHbW9', 'room--is-plaid'],
    ['6DXe9VnLT91YWE9UkVgkep', 'room--is-yumemi'],
    ['1rnDVEsknx6MhhPgMAS9Gj', 'room--is-yesod']
  ])
}
</script>

<style lang="scss" scoped>
.room {
  width: 16vw;
  padding: 0.6vw;
  text-align: center;
  font-size: 1.8vw;
  white-space: nowrap;
  color: $primary-text-color--invert;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 124px;
    padding: 8px;
    font-size: 14px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    width: 100%;
    height: 4px;
    padding: 0;
    font-size: 0;
  }

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
</style>
