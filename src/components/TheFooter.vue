<template>
  <footer class="the-footer">
    <div class="footer-container">
      <div class="content-wrapper">
        <div class="logo">
          <img src="~/assets/images/logo-vuefes.svg" alt="VueFes" />
        </div>

        <div class="social-wrapper">
          <div class="social-button" @click="openTwitterForm">
            <img src="~/assets/images/icon-twitter.svg" alt="Twitter" />
          </div>
          <div class="social-button" @click="openFacebookForm">
            <img src="~/assets/images/icon-facebook.svg" alt="Facebook" />
          </div>
          <div class="social-button" @click="openHatenaBookmarkForm">
            <img
              src="~/assets/images/icon-hatena-bookmark.svg"
              alt="はてなブックマーク"
            />
          </div>
        </div>

        <div class="list-wrapper">
          <div class="menu-list">
            <h3 class="list-title">
              メニュー
            </h3>
            <nuxt-link to="/code-of-conduct/">
              行動規範
            </nuxt-link>
            <nuxt-link to="/privacy/">
              プライバシーポリシー
            </nuxt-link>
            <nuxt-link to="/contact/">
              お問い合わせ
            </nuxt-link>
          </div>

          <div class="social-list">
            <h3 class="list-title">
              ソーシャル
            </h3>
            <a
              href="https://twitter.com/vuefes"
              target="_blank"
              rel="noopener"
            >
              <fa :icon="faTwitter" />
              Twitter
            </a>
            <a
              href="https://www.youtube.com/channel/UC6KPwA1kZJtQYdlh8_2hxCA"
              target="_blank"
              rel="noopener"
            >
              <fa :icon="faYoutube" />
              YouTube
            </a>
            <a
              href="https://github.com/vuejs-jp/home"
              target="_blank"
              rel="noopener"
            >
              <fa :icon="faGithub" />
              GitHub
            </a>
          </div>

          <div class="link-list">
            <h3 class="list-title">
              各種リンク
            </h3>
            <a
              href="https://jp.vuejs.org/"
              target="_blank"
              rel="noopener"
            >
              Vue.js
            </a>
            <a
              href="https://github.com/vuejs-jp/home"
              target="_blank"
              rel="noopener"
            >
              Vue.js 日本ユーザーグループ
            </a>
            <a
              href="https://vuefes.jp/2018/"
              target="_blank"
              rel="noopener"
            >
              Vue Fes Japan 2018
            </a>
          </div>
        </div>
      </div>

      <div class="licence">
        <p>
          © 2018-2019 Vue.js Japan Users Group some rights reserved.<br />
          Vue.js artworks by
          <a href="https://github.com/yyx990803" target="_blank" rel="noopener">Evan You</a>
          is licensed under a
          <a
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
  padding: 80px 7.8%;
  background-color: $primary-color;
  color: $primary-text-color--invert;

  a {
    color: $primary-text-color--invert;
  }
}

.content-wrapper {
  a {
    display: block;
  }
}

.logo {
  margin-bottom: 45.6px;
  float: left;
  width: 50%;

  img {
    width: 96.9%;
  }
}

.social-wrapper {
  float: left;
  width: 50%;
  display: flex;
  justify-content: flex-end;
}

.social-button {
  width: 20%;
  max-width: 57px;

  & + & {
    margin-left: 8.8%;
  }

  img {
    display: block;
  }
}

.list-wrapper {
  margin-bottom: 40px;
  clear: both;
  display: flex;
  flex-wrap: wrap;
}

.menu-list,
.social-list,
.link-list {
  width: 50%;
  font-size: 14px;
  line-height: 2;

  .list-title {
    margin-top: 0;
    margin-bottom: 50px;
    font-size: 6vw;
    font-weight: bold;
  }

  a {
    font-size: 4vw;
    line-height: 1.81;
    text-decoration: none;

    &:not(:last-of-type) {
      margin-bottom: 10%;
    }
  }
}

.menu-list a:last-of-type,
.social-list a:last-of-type {
  margin-bottom: 50px;
}

.link-list a:last-of-type {
  margin-bottom: 0;
}

.licence p {
  font-size: 2.5vw;
  font-weight: 300;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .the-footer {
    padding: 80px 70px;
  }

  .footer-container {
    margin: 0 auto;
  }

  .content-wrapper {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 22px;
  }

  .logo {
    margin-bottom: 0;
    width: 25%;
    order: 1;

    img {
      display: block;
      width: 72.4%;
      max-width: 220px;
    }
  }

  .social-wrapper {
    width: 20%;
    order: 3;
  }

  .social-button {
    width: 32px;
    height: 32px;
    cursor: pointer;

    & + & {
      margin-left: 16px;
    }
  }

  .list-wrapper {
    margin-bottom: 0;
    width: 55%;
    order: 2;
    flex-wrap: nowrap;

    .list-title {
      margin-bottom: 25px;
      font-size: 18px;
      font-weight: bold;
    }

    a {
      font-size: 14px;
      line-height: 1.1;

      &:not(:last-of-type) {
        margin-bottom: 25px;
      }
    }
  }

  .menu-list a:last-of-type,
  .social-list a:last-of-type {
    margin-bottom: 0;
  }

  .menu-list {
    flex-basis: 38%;
  }

  .social-list {
    flex-basis: 32%;
  }

  .link-list {
    flex-basis: 30%;
  }

  .licence p {
    font-size: 12px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .footer-container {
    max-width: $page-container-max-width;
  }

  .content-wrapper {
    margin-bottom: 42px;
  }
}
</style>
