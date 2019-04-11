<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerSection />
    <TheSponsorSection />
    <TheCallForPresentersSection />
    <TheStaffListSection />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheCallForPresentersSection from '~/components/TheCallForPresentersSection.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSponsorSection from '~/components/TheSponsorSection.vue'
import TheSpeakerSection from '~/components/TheSpeakerSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

@Component({
  components: {
    TheCallForPresentersSection,
    TheFooter,
    TheHeadSection,
    TheSponsorSection,
    TheSpeakerSection,
    TheStaffListSection
  }
})
export default class HomePage extends Vue {}
</script>
