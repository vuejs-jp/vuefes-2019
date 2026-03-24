<template>
  <div class="event-content">
    <template v-if="content.sys.contentType.sys.id === 'session'">
      <template v-if="content.sys.id === '7xvdef2fny01iVD0ra03Iz'">
        <Keynote />
      </template>

      <template v-else>
        <Session :session="asSession(content)" />
      </template>
    </template>

    <template v-else-if="content.sys.contentType.sys.id === 'event'">
      <Event :event="asEvent(content)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type EventType from '~/types/event'
import type SessionType from '~/types/session'

defineProps<{
  content: SessionType | EventType
}>()

function asSession(content: SessionType | EventType): SessionType {
  return content as SessionType
}

function asEvent(content: SessionType | EventType): EventType {
  return content as EventType
}
</script>
