<template>
  <BaseSection id="the-sponsor-list-section" class="the-sponsor-list-section">
    <template v-slot:heading>
      SPONSORS
    </template>

    <ul v-for="sponsorPlan in sponsorPlans" :key="sponsorPlan.plan">
      <li
        v-if="sponsorsByPlan(sponsorPlan.plan).length > 0"
        class="sponsor-group"
        :class="sponsorPlan.plan"
      >
        <h3 class="sponsor-plan">
          {{ sponsorPlan.name }}
        </h3>

        <ul>
          <li
            v-for="sponsor in sortSponsors(sponsorsByPlan(sponsorPlan.plan))"
            :key="sponsor.sys.id"
            class="sponsor"
          >
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

  @Prop()
  readonly sponsorList!: Entry<any>[]

  sortSponsors(sponsors): Entry<any>[] {
    return sponsors.sort((a, b) => {
      if (a.fields.appliedAt < b.fields.appliedAt) return -1
      if (a.fields.appliedAt > b.fields.appliedAt) return 1

      return 0
    })
  }

  sponsorsByPlan(plan): Entry<any>[] {
    return this.sponsorList.filter(sponsor => sponsor.fields.plan === plan)
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0; // このコンポーネントでは ul 要素に margin を持たせない
}

.the-sponsor-list-section {
  background: linear-gradient(to right bottom, $tohoh, $sangosyu);
}

// ここから下は Sponsor 一覧の CSS
.sponsor-plan {
  font-size: 5vw;
  text-align: center;
  font-weight: bold;
  margin: calc(10vw - 20px) 0 1vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 30px;
    margin: 80px 0 20px;
  }
}

.sponsor-group {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(100% + 20px);
    margin: -10px;
  }

  img {
    display: block;
    width: 100%;
  }

  .sponsor {
    width: calc(50% - 20px);
    margin: 10px;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: calc((100% / 5) - 20px); // 普通サイズの Sponsor バナーの横幅
    }
  }
}

.sponsor-group.bronze {
  .sponsor {
    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: calc((100% / 6) - 20px);
    }
  }
}

.sponsor-group.gold,
.sponsor-group.special {
  .sponsor {
    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: calc((100% / 4) - 20px);
    }
  }
}

.sponsor-group.platinum {
  ul {
    width: 100%;
    margin: 0;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: calc(100% + 20px);
      margin: -10px;
    }
  }

  .sponsor-plan {
    margin: 5vw 0 1vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin: 40px 0 20px;
    }
  }

  .sponsor {
    width: 100%;
    margin: 0 0 5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      width: calc(30% - 20px);
      margin: 10px;
    }

    &:last-child {
      margin-bottom: 0;

      @media screen and (min-width: $layout-breakpoint--is-small-up) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
