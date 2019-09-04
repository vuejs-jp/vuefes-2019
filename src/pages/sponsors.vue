<template>
  <BaseMain class="sponsors-page">
    <template slot="heading">
      SPONSORS
    </template>

    <ul class="nav">
      <li v-for="sponsorPlan in sponsorPlans" :key="sponsorPlan.plan">
        {{ sponsorPlan.name }}
      </li>
    </ul>

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
            <a
              :href="sponsor.fields.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div v-lazy-container="{ selector: 'img' }">
                <img
                  class="sponsor-image"
                  :data-src="sponsor.fields.banner.fields.file.url"
                  :alt="sponsor.fields.name"
                />
              </div>
            </a>
          </li>

          <li>
            <h4 class="sponsor-name">
              {{ sponsor.fields.name }}
            </h4>
          </li>

          <li>
            <a
              :href="sponsor.fields.url"
              target="_blank"
              rel="noopener noreferrer"
              class="sponsor-url link"
            >
              {{ sponsor.fields.url }}
            </a>
          </li>

          <li>
            <p class="sponsor-pr">
              {{ sponsor.fields.pr }}
            </p>
          </li>
        </ul>
      </li>
    </ul>

    <BaseButton to="/">
      トップに戻る
    </BaseButton>
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

<style lang="scss" scoped>
ul,
li {
  margin: 0; // このコンポーネントでは ul 要素に margin を持たせない
}

.nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin: -10px;

  li {
    width: calc(50% - 20px);
    margin: 10px;
    text-align: center;
    line-height: 2.4em;
    font-size: 3vw;
    border: 1px solid $vue-dark-blue;
    background-color: $white;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    li {
      font-size: 24px;
      line-height: 56px;
    }
  }
}

.sponsor-group {
  padding-bottom: 2vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 20px);
    margin: 0 -10px;
    padding-bottom: 16px;
  }
}

.sponsor-plan {
  margin-top: 6vw;
  font-size: 5.2vw;
  font-weight: bold;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: 48px 10px 0;
    font-size: 42px;
    width: 100%;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .platinum .sponsor {
    width: calc((100% / 2) - 20px);
  }
}

.sponsor {
  margin-top: 4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: calc((100% / 3) - 20px);
    margin: 30px 10px 0;
  }

  &-image {
    display: block;
    width: 100%;
    border: 1px solid $vue-dark-blue;
  }

  &-name {
    margin-top: 2vw;
    font-size: 3.5vw;
    font-weight: bold;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
      font-size: 24px;
      line-height: 1.2;
    }
  }

  &-url {
    font-size: 2vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      display: block;
      margin-top: 10px;
      font-size: 14px;
    }
  }

  &-pr {
    margin-top: 2vw;
    font-size: 2.5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
      font-size: 18px;
    }
  }
}

.base-button {
  margin-top: 13vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 84px;
  }
}
</style>