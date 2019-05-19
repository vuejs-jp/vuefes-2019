<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerSection />
    <TheSponsorSection />
    <TheSponsorListSection :sponsor-list="sponsors" />
    <TheCallForPresentersSection />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { createClient } from '~/plugins/contentful.ts'
import TheHeadSection from '~/components/TheHeadSection.vue'
import TheSpeakerSection from '~/components/TheSpeakerSection.vue'
import TheSponsorSection from '~/components/TheSponsorSection.vue'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import TheCallForPresentersSection from '~/components/TheCallForPresentersSection.vue'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

interface Sponsor {
  id: string
  name: string
}

const client = createClient()

@Component({
  components: {
    TheHeadSection,
    TheSpeakerSection,
    TheSponsorSection,
    TheSponsorListSection,
    TheCallForPresentersSection,
    TheStaffListSection
  },
  async asyncData() {
    const { sponsors } = await client.getEntries({
      content_type: 'sponsor',
      order: '-publishedAt'
    })

    return {
      sponsors
    }
  }
})
export default class HomePage extends Vue {
  sponsorList: Sponsor[] = []
}
</script>
