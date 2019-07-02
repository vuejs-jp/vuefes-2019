<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerListSection />
    <TheTicketSection />
    <TheSponsorListSection :sponsor-list="sponsors || []" />
    <TheAccessSection />
    <TheStoreSection />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import { getSponsors } from '~/plugins/contentful.ts'
import TheAccessSection from '~/components/TheAccessSection.vue'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSpeakerListSection from '~/components/TheSpeakerListSection.vue'
import TheTicketSection from '~/components/TheTicketSection.vue'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'
import TheStoreSection from '~/components/TheStoreSection.vue'

@Component({
  components: {
    TheAccessSection,
    TheHeadSection,
    TheSpeakerListSection,
    TheTicketSection,
    TheSponsorListSection,
    TheStaffListSection,
    TheStoreSection
  },
  async asyncData(): Promise<{ sponsors: Entry<any>[] } | void> {
    try {
      return {
        sponsors: await getSponsors()
      }
    } catch (error) {
      console.error(error)
    }
  }
})
export default class HomePage extends Vue {}
</script>
