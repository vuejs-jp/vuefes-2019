<template>
  <div class="event">
    {{ event.fields.title }}
    <span v-if="isCommunitySession" class="note-mark">※</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import EventType from '~/types/event'

@Component
export default class Event extends Vue {
  @Prop()
  readonly event!: EventType

  get isCommunitySession(): boolean {
    return this.event.sys.id === '7HH2CbTRcGkUYp9OF1LIVu'
  }
}
</script>

<style lang="scss" scoped>
.event {
  font-size: 3.3vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 18px;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 20px;
  }
}

.note-mark {
  vertical-align: top;
  font-size: 70%;
}
</style>
