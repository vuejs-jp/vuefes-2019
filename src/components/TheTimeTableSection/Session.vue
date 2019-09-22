<template>
  <div class="session">
    <nuxt-link class="link-to-session" :to="`/sessions/${sessionIdAlias}/`">
      {{ session.fields.title }}
    </nuxt-link>

    <div
      v-for="speaker in session.fields.speakers"
      :key="speaker.sys.id"
      class="speaker-name"
    >
      {{ speakerById(speaker.sys.id).fields.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Getter, Vue } from 'nuxt-property-decorator'
import SessionType from '~/types/session'
import Speaker from '~/types/speaker'

@Component
export default class Session extends Vue {
  @Prop()
  readonly session!: SessionType

  @Getter('find', { namespace: 'speakers' })
  private speakerById!: (id: string) => Speaker

  get sessionIdAlias(): string {
    const primarySpeaker = this.session.fields.speakers[0]
    return this.speakerById(primarySpeaker.sys.id).fields.github
  }
}
</script>

<style lang="scss" scoped>
.session {
  font-size: 3.3vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 20px;
  }
}

.link-to-session {
  display: block;
  font-weight: bold;
  color: $primary-color;
}

.speaker-name {
  margin-top: 0.3vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 4px;
  }
}
</style>
