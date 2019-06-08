<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerSection />
    <TheSponsorSection />
    <TheCallForPresentersSection />
    <TheStoreSection />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSpeakerSection from '~/components/TheSpeakerSection.vue'
import TheSponsorSection from '~/components/TheSponsorSection.vue'
import TheStoreSection from '~/components/TheStoreSection.vue'
import TheCallForPresentersSection from '~/components/TheCallForPresentersSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

@Component({
  components: {
    TheHeadSection,
    TheSpeakerSection,
    TheSponsorSection,
    TheStoreSection,
    TheCallForPresentersSection,
    TheStaffListSection
  }
})
export default class HomePage extends Vue {}
</script>
