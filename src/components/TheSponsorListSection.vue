<template>
  <BaseSection class="the-sponsor-list-section">
    <template slot="heading">
      SPONSOR LIST
    </template>

    <ul v-for="sponsorType in sponsorTypes" :key="sponsorType">
      <li v-if="sponsorsByType(sponsorType).length > 0" class="sponsor-group">
        <h3>
          SponsorType: {{ sponsorType }}
        </h3>

        <ul v-for="sponsor in sortSponsors(sponsorsByType(sponsorType))" :key="sponsor.sys.id">
          <li class="sponsor">
            <p>{{ sponsor.fields.type }}</p>
            <p class="name">
              {{ sponsor.fields.name }}
            </p>
            <p>{{ sponsor.fields.url }}</p>
            <img :src="sponsor.fields.banner.fields.file.url" />
            <p>{{ sponsor.fields.description }}</p>
            <p>{{ sponsor.fields.publishedAt }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheSponsorListSection extends Vue {
  sponsorTypes: string[] = ['platinum', 'gold', 'silver', 'bronze']

  @Prop()
  readonly sponsorList!: Entry<any>[]

  sortSponsors(sponsors): Entry<any>[] {
    return sponsors.sort((a, b) => {
      if (a.fields.publishedAt < b.fields.publishedAt) return -1
      if (a.fields.publishedAt > b.fields.publishedAt) return 1

      return 0
    })
  }

  sponsorsByType(type): Entry<any>[] {
    return this.sponsorList.filter(sponsor => sponsor.fields.type === type)
  }
}
</script>
