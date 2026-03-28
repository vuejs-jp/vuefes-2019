<script setup lang="ts">
import type SessionType from '~/types/session'

const props = defineProps<{
  session: SessionType
}>()

const { findSpeakerById } = useSiteData()

const sessionIdAlias = computed(() => {
  const primarySpeaker = props.session.fields.speakers[0]
  return findSpeakerById(primarySpeaker.sys.id)?.fields.github || 'yyx990803'
})

function speakerById(id: string) {
  const speaker = findSpeakerById(id)

  if (!speaker) {
    throw new Error(`Unknown speaker: ${id}`)
  }

  return speaker
}
</script>

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
