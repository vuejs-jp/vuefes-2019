<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerSection />
    <TheSponsorListSection :sponsor-list="sponsors || []" />
    <TheCallForPresentersSection />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import { getSponsors } from '~/plugins/contentful.ts'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSpeakerSection from '~/components/TheSpeakerSection.vue'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import TheCallForPresentersSection from '~/components/TheCallForPresentersSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

@Component({
  components: {
    TheHeadSection,
    TheSpeakerSection,
    TheSponsorListSection,
    TheCallForPresentersSection,
    TheStaffListSection
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
