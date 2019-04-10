<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakersSection />
    <TheSponsorsSection />
    <TheCallForPresentersSection />
    <TheTeamSection />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheCallForPresentersSection from '~/components/TheCallForPresentersSection.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSponsorsSection from '~/components/TheSponsorsSection.vue'
import TheSpeakersSection from '~/components/TheSpeakersSection.vue'
import TheTeamSection from '~/components/TheTeamSection.vue'

@Component({
  components: {
    TheCallForPresentersSection,
    TheFooter,
    TheHeadSection,
    TheSponsorsSection,
    TheSpeakersSection,
    TheTeamSection
  }
})
export default class HomePage extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
