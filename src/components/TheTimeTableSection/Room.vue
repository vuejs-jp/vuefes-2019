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
