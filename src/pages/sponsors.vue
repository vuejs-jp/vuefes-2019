<template>
  <BaseMain class="sponsors-page">
    <template slot="heading">
      SPONSORS
    </template>
    スポンサー詳細ページ

    <ul v-for="sponsorPlan in sponsorPlans" :key="sponsorPlan.plan">
      <li
        v-if="sponsorsByPlan(sponsorPlan.plan).length > 0"
        class="sponsor-group"
        :class="sponsorPlan.plan"
      >
        <h3 class="sponsor-plan">
          {{ sponsorPlan.name }}
        </h3>

        <ul
          v-for="sponsor in sortSponsors(sponsorsByPlan(sponsorPlan.plan))"
          :key="sponsor.sys.id"
          class="sponsor"
        >
          <li>
            <a :href="sponsor.fields.url" target="_blank" rel="noopener">
              <div v-lazy-container="{ selector: 'img' }">
                <img
                  class="sponsor-image"
                  :data-src="sponsor.fields.banner.fields.file.url"
                  :alt="sponsor.fields.name"
                />
              </div>
            </a>
          </li>

          <li>{{ sponsor.fields.name }}</li>

          <li>{{ sponsor.fields.url }}</li>

          <li>{{ sponsor.fields.pr }}</li>
        </ul>
      </li>
    </ul>
  </BaseMain>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import { getSponsors } from '~/plugins/contentful.ts'
import BaseMain from '~/components/BaseMain.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseMain,
    BaseButton
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
export default class SponsorsPage extends Vue {
  sponsorPlans: { plan: string; name: string }[] = [
    { plan: 'platinum', name: 'PLATINUM' },
    { plan: 'gold', name: 'GOLD' },
    { plan: 'silver', name: 'SILVER' },
    { plan: 'bronze', name: 'BRONZE' },
    { plan: 'special', name: 'SPECIAL' },
    { plan: 'room', name: 'ROOM' },
    { plan: 'translation', name: '同時通訳' },
    { plan: 'commercial', name: '幕間 CM' },
    { plan: 'toast', name: 'カンパイ' },
    { plan: 'lunch', name: 'LUNCH' },
    { plan: 'refreshment', name: 'REFRESHMENT' },
    { plan: 'video', name: 'VIDEO' },
    { plan: 'media', name: 'MEDIA' }
  ]

  sortSponsors(sponsors): Entry<any>[] {
    return sponsors.sort((a, b) => {
      if (a.fields.appliedAt < b.fields.appliedAt) return -1
      if (a.fields.appliedAt > b.fields.appliedAt) return 1

      return 0
    })
  }

  sponsorsByPlan(plan): Entry<any>[] {
    return this.$data.sponsors.filter(sponsor => sponsor.fields.plan === plan)
  }

  private head() {
    const url = `https://vuefes.jp/2019/sponsors`
    const title = 'スポンサー一覧 | Vue Fes Japan 2019'
    const description = 'Vue Fes Japan 2019 のスポンサー情報です。'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>
