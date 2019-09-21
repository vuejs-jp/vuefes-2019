<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerListSection />
    <TheTicketSection />
    <TheAccessSection />
    <TheTimeTableSection />
    <TheEventSection />
    <TheSponsorListSection :sponsor-list="sponsors || []" />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getSponsors } from '~/plugins/contentful.ts'
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
  },
  async asyncData(): Promise<{
    sponsors: any[]
  } | void> {
    try {
      return {
        sponsors: await getSponsors()
      }
    } catch (error) {
      console.error(error)
    }
  }
})
export default class HomePage extends Vue {
  private head() {
    return {
      script: [{ src: 'https://www.universe.com/embed2.js' }]
    }
  }
}
</script>
