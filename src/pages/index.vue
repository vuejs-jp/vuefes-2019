<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerSection />
    <TheSponsorSection />
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
import TheSponsorSection from '~/components/TheSponsorSection.vue'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import TheCallForPresentersSection from '~/components/TheCallForPresentersSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

interface AsyncData {
  sponsors: Entry<any>[]
}

@Component({
  components: {
    TheHeadSection,
    TheSpeakerSection,
    TheSponsorSection,
    TheSponsorListSection,
    TheCallForPresentersSection,
    TheStaffListSection
  },
  async asyncData(): Promise<AsyncData | void> {
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
