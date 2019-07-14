<template>
  <BaseMain class="session-page">
    <h2 class="heading">
      SESSION
    </h2>

    <div class="session">
      <div class="session-time">
        40min
      </div>

      <h1 class="session-title">
        次世代のデザインとフロントエンド開発の GUI 化
      </h1>

      <div class="session-description">
        <p>
          STUDIO はコードを書かずに Web サイトを作れるデザインツールです（もちろん Vue.js 製！）。別の視点から見ると GUI でコードを生成するジェネレーターでもあります。
        </p>

        <p>
          これまで静的な Web サイトしか作れなかった STUDIO が、今年に入ってから動的なものを作れるように開発を進めています。このとき重要になってくるのが Vue.js や React など昨今のフロントエンド開発で登場する「Component」の概念の可視化（GUI化）です。また、GUI 化によって Vue.js と React の Component の設計思想の違いが見える形で現れてきました。
        </p>

        <p>
          本セッションでは、「Component」の GUI 化を通じて見えてきた知見を中心に、実際にデモをしながら新しいデザインプロセスを提案します。
        </p>
      </div>
    </div>

    <div class="speaker">
      <img
        class="speaker-avatar"
        :srcset="`
          ${require('~/assets/images/speakers/keimakai1993.jpg')},
          ${require('~/assets/images/speakers/keimakai1993@2x.jpg')} 2x
        `"
        :src="require('~/assets/images/speakers/keimakai1993@2x.jpg')"
        alt=""
      />

      <p class="speaker-organisation">
        STUDIO 株式会社
      </p>

      <h2 class="speaker-name">
        甲斐 啓真
      </h2>

      <div class="speaker-description">
        <p>
          STUDIO 株式会社 Founder / CPO
        </p>

        <p>
          「STUDIO」というコードを書かずに Web サイトを作れるデザインツールを制作中。前職である UI デザイン会社のオハコでエンジニア兼デザイナーとして、Web サイト・アプリケーションを作っていく中でデザインと開発の間のギャップを体感。イラストベースでデザインする最近のデザインプロセスを脱して、実際のコードと同様の CSS（ボックスモデル）ベースでデザインするために 2016年から STUDIO の制作を始めた。
        </p>
      </div>

      <div class="speaker-social">
        <a
          class="twitter"
          href="https://twitter.com/keimakai1993"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/logo-twitter.svg" alt="Twitter" />
        </a>

        <a
          class="github"
          href="https://github.com/keimakai"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/icon-github.svg" alt="GitHub" />
        </a>
      </div>
    </div>

    <BaseButton to="/">
      トップに戻る
    </BaseButton>

    <div>
      {{ session.title }}
    </div>

    <p v-for="(paragraph, index) in session.paragraphs" :key="index">
      {{ paragraph }}
    </p>

    <img :src="speaker.avatar" />
    <img :src="speaker.avatar2x" />
    <div>
      {{ speaker.title }}
      {{ speaker.name }}
      {{ `https://twitter.com/${speaker.twitter}` }}
      {{ `https://github.com/${speaker.github}` }}
    </div>

    <p v-for="(paragraph, index) in speaker.paragraphs" :key="index">
      {{ paragraph }}
    </p>
  </BaseMain>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'
import BaseMain from '~/components/BaseMain.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseMain,
    BaseButton
  },
  asyncData({ params, route }) {
    return {
      speakerId: params.speakerId,
      path: route.path
    }
  },
  computed: {
    ...mapGetters('sessions', ['sessionBySpeakerId']),
    ...mapGetters('speakers', ['speakerById'])
  }
})
export default class SessionPage extends Vue {
  speakerId!: string
  path!: string
  sessionBySpeakerId!: (speakerId: string) => any // TODO: あとで Session Type を指定する
  speakerById!: (id: string) => any // TODO: あとで Speaker Type 指定する

  head() {
    const url = `https://vuefes.jp/2019${this.path}`
    const title = `${this.session.title}（${
      this.speaker.name
    }）- Vue Fes Japan 2019`
    const description = `Vue Fes Japan 2019 のセッション情報です。登壇者は ${
      this.speaker.name
    } で、${this.session.title} というテーマで発表します。`
    const ogImageUrl = `https://vuefes.jp/2019/session-og-images/${
      this.session.speakerId
    }`

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:title', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:title', content: title },
        { hid: 'og:image', name: 'og:image', content: ogImageUrl },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: ogImageUrl
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:image', name: 'twitter:image', content: ogImageUrl }
      ]
    }
  }

  get session() {
    return this.sessionBySpeakerId(this.speakerId)
  }

  get speaker() {
    return this.speakerById(this.speakerId)
  }
}
</script>

<style lang="scss" scoped>
.heading {
  font-size: 10.41vw;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 5vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 80px;
    margin-bottom: 40px;
  }
}

.session {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 80%;
    margin: 0 auto;
  }

  &-time {
    font-size: 2vw;
    color: $primary-text-color--invert;
    background-color: $primary-color;
    width: 10vw;
    text-align: center;
    margin-bottom: 2px;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 12px;
      width: 60px;
    }
  }

  &-title {
    font-size: 5vw;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 42px;
      margin-bottom: 20px;
    }
  }

  &-description {
    margin-bottom: 10vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-bottom: 0;
    }
  }
}

.speaker {
  position: relative;
  border: 1px solid $primary-color;
  width: calc(100% - 5vw);
  margin: calc(40.8vw - 5vw + 10vw) 0 10vw auto;
  padding: 5vw;
  background-color: $white;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 80%;
    margin: 140px 0 80px auto;
    padding: 40px 43px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    padding: 40px 60px;
  }

  & p {
    font-size: 3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 18px;
    }
  }

  &-avatar {
    position: absolute;
    top: calc(-40.8vw - -5vw);
    left: -5vw;
    display: block;
    width: 40.8vw;
    height: 40.8vw;
    border: 1px solid $primary-color;
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      top: -60px;
      left: -165px;
      width: 195px;
      height: 195px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      left: -240px;
      width: 280px;
      height: 280px;
    }
  }

  &-organisation {
    margin-top: 2vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 0;
    }
  }

  &-name {
    font-size: 6vw;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 1vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 28px;
      margin-bottom: 10px;
    }
  }

  &-social {
    margin-top: 2vw;
    font-size: 0;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-top: 20px;
    }

    img {
      width: 7.5vw;
      max-width: 50px;
      height: 7.5vw;
      max-height: 50px;
      margin-right: 4vw;
      transition: 0.2s $easeInOutCubic;

      @media screen and (min-width: $layout-breakpoint--is-small-up) {
        width: 32px;
        height: 32px;
        margin-right: 20px;
      }

      &:hover {
        opacity: 0.4;
      }
    }
  }
}
</style>
