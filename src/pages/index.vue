<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerListSection />
    <TheTicketSection />
    <TheAccessSection />
    <TheTimeTableSection :timetables="timeTableSection || []" />
    <TheStoreSection />
    <TheSponsorListSection :sponsor-list="sponsors || []" />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import { getSponsors, getTimeTableSection } from '~/plugins/contentful.ts'
import TheAccessSection from '~/components/TheAccessSection.vue'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSpeakerListSection from '~/components/TheSpeakerListSection.vue'
import TheTicketSection from '~/components/TheTicketSection.vue'
import TheTimeTableSection from '~/components/TheTimeTableSection.vue'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'
import TheStoreSection from '~/components/TheStoreSection.vue'

@Component({
  components: {
    TheAccessSection,
    TheHeadSection,
    TheSpeakerListSection,
    TheTicketSection,
    TheTimeTableSection,
    TheSponsorListSection,
    TheStaffListSection,
    TheStoreSection
  },
  async asyncData(): Promise<{
    sponsors: Entry<any>[]
    timeTableSection: Entry<any>[]
  } | void> {
    try {
      return {
        sponsors: await getSponsors(),
        timeTableSection: await getTimeTableSection()
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
