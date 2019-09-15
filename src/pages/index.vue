<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerListSection />
    <TheTicketSection />
    <TheAccessSection />
    <TheTimeTableSection />

    <ul>
      <li>events: {{ events }}</li>
      <li>eventContainers: {{ eventContainers }}</li>
      <li>eventContainerParts: {{ eventContainerParts }}</li>
      <li>rooms: {{ rooms }}</li>
      <li>sessions: {{ sessions }}</li>
      <li>speakers: {{ speakers }}</li>
      <li>sponsors: {{ sponsors }}</li>
      <li>timeTableSections: {{ timeTableSections }}</li>
    </ul>

    <TheEventSection />
    <TheSponsorListSection :sponsor-list="sponsors || []" />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import {
  getEventContainerParts,
  getEventContainers,
  getEvents,
  getRooms,
  getSessions,
  getSpeakers,
  getSponsors,
  getTimeTableSections
} from '~/plugins/contentful.ts'
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
    events: Entry<any>[]
    eventContainers: Entry<any>[]
    eventContainerParts: Entry<any>[]
    rooms: Entry<any>[]
    sessions: Entry<any>[]
    speakers: Entry<any>[]
    sponsors: Entry<any>[]
    timeTableSections: Entry<any>[]
  } | void> {
    try {
      return {
        events: await getEvents(),
        eventContainers: await getEventContainers(),
        eventContainerParts: await getEventContainerParts(),
        rooms: await getRooms(),
        sessions: await getSessions(),
        speakers: await getSpeakers(),
        sponsors: await getSponsors(),
        timeTableSections: await getTimeTableSections()
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
