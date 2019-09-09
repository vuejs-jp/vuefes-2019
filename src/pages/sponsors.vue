<template>
  <BaseMain class="sponsors-page">
    <template slot="heading">
      SPONSORS
    </template>

    <ul class="nav">
      <li
        v-for="sponsorPlan in sponsorPlans"
        v-show="sponsorsByPlan(sponsorPlan.plan).length > 0"
        :key="sponsorPlan.plan"
      >
        <nuxt-link
          v-if="sponsorsByPlan(sponsorPlan.plan).length > 0"
          :to="`#${sponsorPlan.plan}`"
          class="link"
          :class="{ active: activePlans.includes(sponsorPlan.plan) }"
        >
          {{ sponsorPlan.name }}
        </nuxt-link>
      </li>
    </ul>

    <ul
      v-for="sponsorPlan in sponsorPlans"
      :key="sponsorPlan.plan"
      class="sponsor-list"
    >
      <li
        v-if="sponsorsByPlan(sponsorPlan.plan).length > 0"
        class="sponsor-group"
        :class="sponsorPlan.plan"
      >
        <h3 :id="sponsorPlan.plan" class="sponsor-plan">
          {{ sponsorPlan.name }}
        </h3>

        <ul
          v-for="sponsor in sortSponsors(sponsorsByPlan(sponsorPlan.plan))"
          :id="`${sponsor.fields.name}`"
          :key="sponsor.sys.id"
          class="sponsor"
        >
          <li>
            <a
              :href="sponsor.fields.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="sponsor-image"
                :src="sponsor.fields.banner.fields.file.url"
                :alt="sponsor.fields.name"
              />
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
            <p class="sponsor-pr" v-if="sponsorPlan.plan !== 'bronze'">
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
  mounted(): void {
    const options: { root: null; rootMargin: string; threshold: number } = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0
    }
    const observer = new IntersectionObserver(this.callback, options)
    const elements = document.querySelectorAll('.sponsor-group')
    elements.forEach(element => {
      observer.observe(element)
    })
  }

  activePlans: string[] = []

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

  callback(entries) {
    const changes: { plan: string; view: boolean }[] = []

    entries.forEach(entry => {
      changes.push({
        plan: entry.target.childNodes[0].id,
        view: entry.isIntersecting
      })
    })

    changes.forEach(change => {
      if (change.view === true) {
        this.$data.activePlans.push(change.plan)
      } else {
        this.$data.activePlans = this.$data.activePlans.filter(
          plan => plan !== change.plan
        )
      }
    })
  }

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
// ウィンドウサイズ - main-content.max-width / 半分の幅
$nav-width: calc((100vw - 1180px) / 2);
// base-main.padding-top + heading.height + heading.margin-bottom
$head-margin: calc(130px + 80px + 34px);

ul,
li {
  margin: 0; // このコンポーネントでは ul, li 要素に margin を持たせない
}

.nav {
  @media screen and (max-width: $layout-breakpoint--is-large) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: calc(100% + 20px);
    margin: -10px;

    li {
      width: calc(50% - 20px);
      margin: 10px;
      border: 1px solid $vue-dark-blue;
      background-color: $white;
    }

    a {
      display: block;
      text-align: center;
      text-decoration: none;
      line-height: 2.4em;
      font-size: 3vw;
      color: $primary-text-color;
      width: 100%;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    a {
      font-size: 24px;
      line-height: 56px;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-large-up) {
    position: sticky;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    margin: -#{$head-margin} 0 0;
    padding-right: 68px;
    transform: translateX($nav-width);

    li {
      text-align: right;
    }

    a {
      position: relative;
      display: block;
      width: calc(#{$nav-width} - 68px);
      color: transparent;
      font-size: 16px;
      line-height: 16px;
      padding-right: 32px;
      margin: 16px 0;
      opacity: 1;
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: 16px;
        height: 16px;
        background-color: $gray;
        transform: translateY(-50%);
      }

      &:hover {
        color: $primary-text-color;

        &::after {
          background-color: $white;
          border: 2px solid $vue-dark-blue;
        }
      }
    }

    .nuxt-link-active,
    .active {
      color: $primary-text-color;
      font-weight: bold;

      &::after {
        width: 24px;
        height: 24px;
        background-color: $vue-dark-blue;
        transform: translate(4px, -50%);
      }

      &:hover {
        &::after {
          background-color: $vue-dark-blue;
          border: none;
        }
      }
    }
  }
}

.sponsor-list {
  position: relative;

  @media screen and (min-width: $layout-breakpoint--is-large-up) {
    top: -100vh;
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
  margin-top: 3vw;
  padding-top: 3vw;
  font-size: 5.2vw;
  font-weight: bold;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: -20px 10px 0;
    padding-top: 68px;
    font-size: 42px;
    width: 100%;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .platinum .sponsor {
    width: calc((100% / 2) - 20px);
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .platinum .sponsor {
    width: calc((100% / 3) - 20px);
  }
}

.sponsor {
  padding-top: 4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: calc((100% / 3) - 20px);
    padding-top: 30px;
    margin: 0 10px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    width: calc((100% / 4) - 20px);
  }

  &-image {
    display: block;
    width: 100%;
    border: 1px solid $vue-dark-blue;
  }

  &-name {
    margin-top: 2.6vw;
    font-size: 3.5vw;
    font-weight: bold;
    line-height: 1;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
      font-size: 24px;
      line-height: 1.2;
    }
  }

  &-url {
    display: inline-block;
    margin-top: 1.3vw;
    font-size: 2vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
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
  margin-top: 13vw !important;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 84px !important;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin-top: 104px !important;
  }

  @media screen and (min-width: $layout-breakpoint--is-large-up) {
    margin-top: calc(-100vh + 104px) !important;
  }
}
</style>
