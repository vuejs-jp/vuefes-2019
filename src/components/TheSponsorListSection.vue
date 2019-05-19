<template>
  <BaseSection class="the-sponsor-list-section">
    <template slot="heading">
      SPONSOR LIST
    </template>

    <ul v-for="sponsor in sponsorList" :key="sponsor.id">
      <li class="sponsor">{{ sponsor.name }}</li>
    </ul>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

interface Sponsor {
  id: string
  name: string
}

@Component({
  components: {
    BaseSection
  }
})
export default class TheSponsorListSection extends Vue {
  sponsorList: Sponsor[] = [
    { id: 'a', name: 'aaa' },
    { id: 'b', name: 'bbb' },
    { id: 'c', name: 'ccc' }
  ]
}
</script>
