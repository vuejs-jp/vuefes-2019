<template>
  <div class="session">
    <nuxt-link class="link-to-session" :to="`/sessions/${session.sys.id}`">
      {{ session.fields.title }}
    </nuxt-link>

    <span
      v-for="speaker in session.fields.speakers"
      :key="speaker.sys.id"
      class="speaker-name"
    >
      {{ speakerById(speaker.sys.id).fields.name }}
    </span>
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
}
</script>
