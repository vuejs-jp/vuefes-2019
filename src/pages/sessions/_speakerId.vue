<template>
  <div class="session-page">
    <h2>
      SESSION
    </h2>
    
    <h1>
      次世代のデザインとフロントエンド開発の GUI 化
    </h1>
    
    <div>
      {{ speakerId }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  asyncData({ params }): { speakerId: string } {
    return {
      speakerId: params.speakerId
    }
  }
})
export default class SessionPage extends Vue {}
</script>
