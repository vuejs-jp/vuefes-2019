<template>
  <BaseMain class="session-page">
    <h2 class="heading">
      SESSION
    </h2>

    <div class="session-time">
      40min
    </div>

    <h1 class="title">
      次世代のデザインとフロントエンド開発の GUI 化
    </h1>

    <div class="description">
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

    <div class="speaker">
      <img
        class="speaker__avatar"
        :srcset="`
          ${require('~/assets/images/speakers/keimakai1993.jpg')},
          ${require('~/assets/images/speakers/keimakai1993@2x.jpg')} 2x
        `"
        :src="require('~/assets/images/speakers/keimakai1993@2x.jpg')"
        alt=""
      />

      <p class="speaker__organisation">
        STUDIO 株式会社
      </p>

      <h2 class="speaker__name">
        甲斐 啓真
      </h2>

      <div class="speaker__description">
        <p>
          STUDIO 株式会社 Founder / CPO
        </p>

        <p>
          「STUDIO」というコードを書かずに Web サイトを作れるデザインツールを制作中。前職である UI デザイン会社のオハコでエンジニア兼デザイナーとして、Web サイト・アプリケーションを作っていく中でデザインと開発の間のギャップを体感。イラストベースでデザインする最近のデザインプロセスを脱して、実際のコードと同様の CSS（ボックスモデル）ベースでデザインするために 2016年から STUDIO の制作を始めた。
        </p>
      </div>

      <div class="speaker__social">
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
  </BaseMain>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseMain from '~/components/BaseMain.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseMain,
    BaseButton
  },
  asyncData({ params }): { speakerId: string } {
    return {
      speakerId: params.speakerId
    }
  }
})
export default class SessionPage extends Vue {}
</script>

<style lang="scss" scoped>
.heading {
  font-size: 10.41vw;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 4.4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 80px;
    margin-bottom: 34px;
  }
}

.session-time {
  font-size: 2vw;
  color: $primary-text-color--invert;
  background-color: $primary-color;
  width: 10vw;
  text-align: center;
  margin-bottom: 2px;
}

.title {
  font-size: 5vw;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 5vw;
}

.description {
  margin-bottom: 10vw;
}

.speaker {
  position: relative;
  border: 1px solid $primary-color;
  width: calc(100% - 5vw);
  margin: calc(40.8vw - 5vw + 10vw) 0 10vw auto;
  padding: 5vw;

  & p {
    font-size: 3vw;
  }

  &__avatar {
    position: absolute;
    top: calc(-40.8vw - -5vw);
    left: -5vw;
    display: block;
    width: 40.8vw;
    height: 40.8vw;
    border: 1px solid $primary-color;
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.1);
  }

  &__organisation {
    margin-top: 2vw;
  }

  &__name {
    font-size: 6vw;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 1vw;
  }

  &__social {
    margin-top: 2vw;
    font-size: 0;

    img {
      width: 7.5vw;
      max-width: 50px;
      height: 7.5vw;
      max-height: 50px;
      margin-right: 4vw;
      transition: 0.2s $easeInOutCubic;

      &:hover {
        opacity: 0.4;
      }
    }
  }
}
</style>
