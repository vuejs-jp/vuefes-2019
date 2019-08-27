<template>
  <BaseSection class="the-access-section">
    <template slot="heading">
      ACCESS
    </template>

    <div class="access-container">
      <div class="image-container">
        <div v-lazy-container="{ selector: 'img' }" class="image">
          <img
            :data-srcset="`${image}, ${image2x} 2x`"
            :data-src="image2x"
            alt=""
          />
        </div>
      </div>

      <div class="access-content">
        <h3 class="title">
          会場: TOC五反田メッセ
        </h3>

        <div class="description">
          <p>
            東京都品川区西五反田6-6-19<br />
            <a
              href="http://messe.toc.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://messe.toc.co.jp/
            </a>
          </p>

          <p>
            <span class="line">JR 山手線、都営地下鉄浅草線でお越しの方</span>
            <br />
            五反田駅 西口より徒歩10分
          </p>

          <p>
            <span class="line">東急池上線でお越しの方</span><br />
            大崎広小路駅より徒歩9分
          </p>

          <p>
            <span class="line">東急目黒線でお越しの方</span><br />
            不動前駅より徒歩6分
          </p>
        </div>
      </div>
    </div>

    <BaseButton
      class="link-to-google-maps"
      href="https://www.google.com/maps/place/%EF%BC%B4%EF%BC%AF%EF%BC%A3%E4%BA%94%E5%8F%8D%E7%94%B0%E3%83%A1%E3%83%83%E3%82%BB/@35.624225,139.717565,15z/data=!4m5!3m4!1s0x0:0x4260982603406ccc!8m2!3d35.622995!4d139.7174468?hl=ja"
      target="_blank"
      rel="noopener noreferrer"
    >
      Google Maps で見る
    </BaseButton>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseButton from '~/components/BaseButton.vue'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseButton,
    BaseSection
  }
})
export default class TheAccessSection extends Vue {
  private image = require('~/assets/images/access.jpg')

  private image2x = require('~/assets/images/access@2x.jpg')

  private get googleMapsApiKey(): string | undefined {
    return process.env.GOOGLE_MAPS_API_KEY
  }
}
</script>

<style lang="scss" scoped>
.access-container {
  margin-bottom: 8vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    display: flex;
    margin-bottom: 64px;
  }
}

.image-container {
  img {
    display: block;
    width: 100%;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    flex: 1 1 430px;
    align-self: center;
    order: 1;
  }
}

.access-content {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    flex: 1 1 360px;
    min-width: 360px;
    margin-right: 32px;
    padding-left: 32px;
  }
}

.title {
  margin: 8vw 0 2vw;
  font-size: 5vw;
  font-weight: bold;
  line-height: 1.28;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: 0 0 4px;
    font-size: 30px;
  }
}

.description {
  p {
    font-size: 3.5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 16px;
    }
  }

  a {
    color: $primary-text-color;
  }

  p + p {
    margin-top: 5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 32px;
    }
  }
}

.line {
  font-weight: bold;
}
</style>
