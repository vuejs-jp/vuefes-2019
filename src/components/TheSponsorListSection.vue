<template>
  <BaseSection class="the-sponsor-list-section">
    <template slot="heading">
      SPONSORS
    </template>

    <div class="content">
      <div class="description">
        <p>
          Vue.js に関わる人々が集まる Vue Fes Japan 2019 をよりよいイベントにするため、スポンサーを募集します。<a class="link" href="https://fortee.jp/vuefes-2019/sponsor/form" target="_blank" rel="noopener">こちらのフォーム</a> よりお申し込みください。応募締め切りは、2019年7月31日（水）です。
        </p>

        <p>
          最新情報は <a class="link" href="https://twitter.com/vuefes" target="_blank" rel="noopener">Vue Fes Japan の Twitter</a> もしくは <a class="link" href="https://note.mu/vuejs_jp/m/mb35849fee631" target="_blank" rel="noopener">公式 note</a> でご確認ください。
        </p>

        <p>
          資料は <a class="link" href="https://docs.google.com/presentation/d/1YSr_QVUUKZmkYMBICE3mIQl2Um9OXfeS2AKgiOHX4Ds/edit#slide=id.p" target="_blank" rel="noopener">こちら</a>
        </p>
      </div>

      <LinkToTwitter class="link-to-twitter show-on-medium-and-up" />
    </div>

    <div
      v-lazy-container="{ selector: 'img' }"
      class="image"
    >
      <img
        :data-srcset="`${imageOne}, ${imageOne2x} 2x`"
        :data-src="imageOne2x"
        alt=""
      />

      <img
        :data-srcset="`${imageTwo}, ${imageTwo2x} 2x`"
        :data-src="imageTwo2x"
        alt=""
      />

      <img
        :data-srcset="`${imageThree}, ${imageThree2x} 2x`"
        :data-src="imageThree2x"
        alt=""
      />
    </div>

    <LinkToTwitter class="show-on-small" />

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
            <a
              :href="sponsor.fields.url"
              target="_blank"
              rel="noopener"
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
        </ul>
      </li>
    </ul>

    <BaseButton
      class="link-to-sponsor-form"
      href="https://fortee.jp/vuefes-2019/sponsor/form"
      target="_blank"
      rel="noopener"
    >
      スポンサー申し込みフォーム
    </BaseButton>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import BaseButton from '~/components/BaseButton.vue'
import BaseSection from '~/components/BaseSection.vue'
import LinkToTwitter from '~/components/LinkToTwitter.vue'

@Component({
  components: {
    BaseButton,
    BaseSection,
    LinkToTwitter
  }
})
export default class TheSponsorListSection extends Vue {
  private imageOne = require('~/assets/images/sponsors/image1.jpg')
  private imageOne2x = require('~/assets/images/sponsors/image1@2x.jpg')

  private imageTwo = require('~/assets/images/sponsors/image2.jpg')
  private imageTwo2x = require('~/assets/images/sponsors/image2@2x.jpg')

  private imageThree = require('~/assets/images/sponsors/image3.jpg')
  private imageThree2x = require('~/assets/images/sponsors/image3@2x.jpg')

  sponsorPlans: { plan: string; name: string }[] = [
    { plan: 'platinum', name: 'PLATINUM' },
    { plan: 'gold', name: 'GOLD' },
    { plan: 'silver', name: 'SILVER' },
    { plan: 'bronze', name: 'BRONZE' },
    { plan: 'room-ab', name: 'ROOM A/B' },
    { plan: 'room-c', name: 'ROOM C' },
    { plan: 'translation', name: '同時通訳' },
    { plan: 'commercial', name: '幕間 CM' },
    { plan: 'toast', name: 'カンパイ' },
    { plan: 'lunch-ab', name: 'LUNCH A/B' },
    { plan: 'lunch-c', name: 'LUNCH C' },
    { plan: 'refreshment', name: 'REFRESHMENT' }
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

.content {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    position: absolute;
    width: calc(100% - 140px);
    max-width: $page-container-max-width;
  }
}

.description {
  background-color: $white;
  padding: 6.17%;
  margin-bottom: 5vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 70%;
    max-width: calc(#{$page-container-max-width} * 0.7);
    padding: 40px;
    margin-top: -30px;
    margin-bottom: 60px;
    z-index: 1;
  }
}

.start-datetime {
  text-decoration: underline;
}

.image {
  margin-bottom: 5vw;

  img {
    display: block;
    width: 100%;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 340px;
    margin: -125px 0 0 auto;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin: -125px 5% 0 auto;
  }
}

.link-to-twitter {
  width: 100%;
  max-width: 100%;
  margin-top: 10vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 700px;
    margin: 0 auto 0 0;
  }
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

.sponsor-group.gold {
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

.link-to-sponsor-form {
  width: 100%;
  max-width: 100%;
  margin: calc(10vw - 20px) auto 0;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 700px;
    margin: 80px auto 0;
  }
}
</style>
