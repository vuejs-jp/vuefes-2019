<template>
  <BaseMain class="sponsors-page">
    <template v-slot:heading>
      SPONSORS
    </template>

    <ul class="index">
      <li
        v-for="sponsorPlan in sponsorPlansHavingSponsors"
        :key="sponsorPlan.plan"
      >
        <nuxt-link :to="`/sponsors/#${sponsorPlan.plan}`" class="link">
          {{ sponsorPlan.name }}
        </nuxt-link>
      </li>
    </ul>

    <ul
      v-for="sponsorPlan in sponsorPlansHavingSponsors"
      :key="sponsorPlan.plan"
      class="sponsor-group-list"
    >
      <li class="sponsor-group" :class="sponsorPlan.plan">
        <h3 :id="sponsorPlan.plan" class="sponsor-plan">
          {{ sponsorPlan.name }}
        </h3>

        <ul
          v-for="sponsor in sponsorsByPlan(sponsorPlan.plan)"
          :id="`sponsor_${sponsor.sys.id}`"
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
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import Sponsor from '~/types/sponsor'
import SponsorPlan from '~/types/sponsorPlan'
import BaseMain from '~/components/BaseMain.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseMain,
    BaseButton
  }
})
export default class SponsorsPage extends Vue {
  @Getter('sponsorsByPlan', { namespace: 'sponsors' })
  private sponsorsByPlan!: (plan: string) => Sponsor[]

  @Getter('sponsorPlansHavingSponsors', { namespace: 'sponsors' })
  private sponsorPlansHavingSponsors!: SponsorPlan[]

  private head() {
    const url = 'https://vuefes.jp/2019/sponsors/'
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
  margin: 0;
}

.index {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin: -6px -10px;

  li {
    width: calc(50% - 20px);
    margin: 6px 10px;
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

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: -10px;

    li {
      margin: 10px;
    }

    a {
      font-size: 24px;
      line-height: 56px;
    }
  }
}

.sponsor-group-list:last-of-type {
  // NOTE: .base-button に margin-top を設定した場合に
  //   development 環境では意図したとおりに余白が設定できるが
  //   production 環境では margin 0 auto に上書きされてしまう

  margin-bottom: 13vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin-bottom: 120px;
  }
}

.sponsor-group {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 20px);
    margin: 0 -10px;
  }
}

.sponsor-plan {
  margin-top: 6vw;
  font-size: 5.2vw;
  font-weight: bold;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: calc(-#{$header-logo-height} + 48px) 10px 0;
    padding-top: $header-logo-height;
    z-index: -1;
    font-size: 42px;
    line-height: 1.2;
    width: 100%;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin-top: calc(-#{$header-logo-height} + 64px);
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
  margin-top: 4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: calc((100% / 3) - 20px);
    margin: calc(-#{$header-logo-height} + 30px) 10px 0;
    padding-top: $header-logo-height;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    width: calc((100% / 4) - 20px);
  }

  &-image {
    position: relative;
    display: block;
    width: 100%;
    border: 1px solid $vue-dark-blue;
    z-index: 1;
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
    font-size: 2.5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      position: relative;
      margin-top: 10px;
      font-size: 14px;
      z-index: 1;
    }
  }

  &-pr {
    margin-top: 2vw;
    font-size: 3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
      font-size: 18px;
    }
  }
}
</style>
