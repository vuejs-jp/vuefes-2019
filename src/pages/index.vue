<template>
  <div class="home-page">
    <TheHeadSection />
    <TheSpeakerSection />
    <TheSponsorSection />
    <TheSponsorListSection :sponsorList="sponsorList"/>
    <TheCallForPresentersSection />
    <TheStaffListSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
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

@Component({
  components: {
    TheHeadSection,
    TheSpeakerSection,
    TheSponsorSection,
    TheSponsorListSection,
    TheCallForPresentersSection,
    TheStaffListSection
  },
  asyncData() {
    return {
      sponsorList: [
        { id: 'a', name: 'aaa' },
        { id: 'b', name: 'bbb' },
        { id: 'c', name: 'ccc' }
      ]
    }
  }
})
export default class HomePage extends Vue {
  sponsorList: Sponsor[] = []
}
</script>
