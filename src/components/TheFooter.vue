<template>
  <footer class="the-footer">
    <div class="footer-container">
      <div class="content-wrapper">
        <div class="logo">
          <nuxt-link to="/">
            <img src="~/assets/images/logo-vuefes-invert.svg" alt="Vue Fes Japan" />
          </nuxt-link>
        </div>

        <div class="social">
          <button class="social-button" @click="openTwitterForm">
            <img src="~/assets/images/icon-twitter.svg" alt="Twitter" />
          </button>

          <button class="social-button" @click="openFacebookForm">
            <img src="~/assets/images/icon-facebook.svg" alt="Facebook" />
          </button>

          <button class="social-button" @click="openHatenaBookmarkForm">
            <img
              src="~/assets/images/icon-hatena-bookmark.svg"
              alt="はてなブックマーク"
            />
          </button>
        </div>

        <div class="menu-list">
          <h2 class="title">
            メニュー
          </h2>

          <nuxt-link to="/code-of-conduct/">
            行動規範
          </nuxt-link>
          <br />

          <nuxt-link to="/privacy/">
            プライバシーポリシー
          </nuxt-link>
          <br />

          <nuxt-link to="/contact/">
            お問い合わせ
          </nuxt-link>
        </div>

        <div class="social-list">
          <h2 class="title">
            ソーシャル
          </h2>

          <a
            class="social-icon"
            href="https://twitter.com/vuefes"
            target="_blank"
            rel="noopener"
          >
            <fa :icon="faTwitter" />
            Twitter
          </a>
          <br />

          <a
            class="social-icon"
            href="https://note.mu/vuejs_jp"
            target="_blank"
            rel="noopener"
          >
            <img src="~/assets/images/icon-note.svg" alt="" />
            note
          </a>
          <br />

          <a
            class="social-icon"
            href="https://www.youtube.com/channel/UC6KPwA1kZJtQYdlh8_2hxCA"
            target="_blank"
            rel="noopener"
          >
            <fa :icon="faYoutube" />
            YouTube
          </a>
          <br />

          <a
            class="social-icon"
            href="https://github.com/vuejs-jp/home"
            target="_blank"
            rel="noopener"
          >
            <fa :icon="faGithub" />
            GitHub
          </a>
        </div>

        <div class="link-list">
          <h2 class="title">
            各種リンク
          </h2>

          <a
            href="https://jp.vuejs.org/"
            target="_blank"
            rel="noopener"
          >
            Vue.js
          </a>
          <br />

          <a
            href="https://github.com/vuejs-jp/home"
            target="_blank"
            rel="noopener"
          >
            Vue.js 日本ユーザーグループ
          </a>
          <br />

          <a
            href="https://vuefes.jp/2018/"
            target="_blank"
            rel="noopener"
          >
            Vue Fes Japan 2018
          </a>
        </div>
      </div>

      <div class="licence">
        <p>
          © 2018-2019 Vue.js Japan Users Group some rights reserved.
          <br />
          Vue.js artworks by
          <a
            class="link"
            href="https://github.com/yyx990803"
            target="_blank"
            rel="noopener"
          >
            Evan You
          </a>
          is licensed under a
          <a
            class="link"
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
            target="_blank"
            rel="noopener"
          >
            Creative Commons Attribution 4.0 International License
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import {
  faGithub,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

@Component
export default class TheFooter extends Vue {
  get faGithub(): IconDefinition {
    return faGithub
  }

  get faTwitter(): IconDefinition {
    return faTwitter
  }

  get faYoutube(): IconDefinition {
    return faYoutube
  }

  get encodedUri(): string {
    return encodeURIComponent(location.href)
  }

  get hostAndPath(): string {
    return location.host + location.pathname
  }

  // TODO: 文言を正式版に差し替える
  openTwitterForm(): void {
    window.open(
      `https://twitter.com/share?url=${
        this.encodedUri
      }&hashtags=vuefes,vuejs&text=${encodeURIComponent(
        '日本最大級の Vue.js カンファレンス「Vue Fes Japan 2019」'
      )}`,
      'tweet',
      'width=650, height=470'
    )
  }

  openFacebookForm(): void {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${
        this.encodedUri
      }&src=sdkpreparse`,
      'share',
      'width=670, height=328'
    )
  }

  openHatenaBookmarkForm(): void {
    window.open(`http://b.hatena.ne.jp/entry/s/${this.hostAndPath}`, 'bookmark')
  }
}
</script>

<style lang="scss" scoped>
.the-footer {
  padding: 10vw 7.8%;
  background-color: $primary-color;
  color: $primary-text-color--invert;

  a {
    color: $primary-text-color--invert;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    padding: 80px 70px;

    .footer-container {
      margin: 0 auto;
      max-width: $page-container-max-width;
    }
  }
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    flex-wrap: nowrap;
  }
}

.logo {
  margin-bottom: 5.8vw;
  width: calc(50% - 10px);

  img {
    width: 100%;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 20%;
    min-width: 140px;
    margin-right: 5%;
    margin-bottom: 45px;
  }
}

.social {
  width: calc(50% - 10px);
  text-align: right;

  &-button {
    background-color: transparent;
    width: 20%;
    max-width: 57px;
    cursor: pointer;

    & + & {
      margin-left: 8.8%;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 20%;
    order: 4;

    &-button {
      width: 32px;

      & + & {
        margin-left: 16px;
      }
    }
  }
}

.menu-list,
.social-list,
.link-list {
  width: calc(50% - 10px);
  margin-bottom: 6.5vw;

  .title {
    font-size: 6vw;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 5vw;
  }

  a {
    display: inline-block;
    font-size: 4vw;
    text-decoration: none;
    margin-bottom: 2vw;
    transition: 0.2s $easeInOutCubic;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 20%;
    margin-bottom: 40px;

    .title {
      font-size: 18px;
      margin-bottom: 20px;
    }

    a {
      font-size: 14px;
      margin-bottom: 1em;
    }
  }
}

.social-icon {
  position: relative;
  padding-left: 7vw;

  svg,
  img {
    position: absolute;
    top: 50%;
    left: 3.5vw;
    transform: translate(-50%, -50%);
  }

  img {
    width: 2em;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    padding-left: 24px;

    svg,
    img {
      left: 12px;
    }
  }
}

.licence p {
  font-size: 2.5vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 12px;
  }
}
</style>
