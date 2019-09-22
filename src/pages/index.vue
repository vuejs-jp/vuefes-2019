<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerListSection />
    <TheTicketSection />
    <TheAccessSection />
    <TheTimeTableSection />
    <TheEventSection />
    <TheSponsorListSection />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheAccessSection from '~/components/TheAccessSection.vue'
import TheEventSection from '~/components/TheEventSection.vue'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSpeakerListSection from '~/components/TheSpeakerListSection.vue'
import TheTicketSection from '~/components/TheTicketSection.vue'
import TheTimeTableSection from '~/components/TheTimeTableSection.vue'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

@Component({
  components: {
    TheAccessSection,
    TheEventSection,
    TheHeadSection,
    TheSpeakerListSection,
    TheTicketSection,
    TheTimeTableSection,
    TheSponsorListSection,
    TheStaffListSection
  }
})
export default class HomePage extends Vue {}
</script>
