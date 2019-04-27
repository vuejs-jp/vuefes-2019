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

@Component({})
export default class TheFooter extends Vue {
  get faGithub(): any {
    return faGithub
  }

  get faTwitter(): any {
    return faTwitter
  }

  get faYoutube(): any {
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
  padding: 60px 7.8%;
  background-color: $primary-color;
  color: $primary-text-color--invert;

  a {
    color: $primary-text-color--invert;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .the-footer {
    padding: 80px 70px;
  }

  .footer-container {
    margin: 0 auto;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .footer-container {
    max-width: $page-container-max-width;
  }
}

.content-wrapper {
  a {
    display: block;
  }
}

.logo {
  float: left;
  width: 50%;

  img {
    width: 97%;
  }
}

.social-wrapper {
  float: left;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
}

.social-button {
  width: 20%;
  max-width: 57px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  & + & {
    margin-left: 8.8%;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 15px;
    }
  }

  img {
    display: block;
  }
}

.list-wrapper {
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
    font-size: 6vw;
    font-weight: bold;
  }

  a {
    font-size: 4vw;
    margin-bottom: 15%;
    line-height: 1.2;
    text-decoration: none;
  }
}

.licence p {
  font-size: 2.5vw;
  font-weight: 300;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .content-wrapper {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 40px;
  }

  .logo img {
    display: block;
    max-width: 220px;
  }

  .logo {
    width: 25%;
    order: 1;
  }

  .social-wrapper {
    width: 20%;
    order: 3;
  }

  .list-wrapper {
    width: 55%;
    order: 2;
    flex-wrap: nowrap;

    .list-title {
      font-size: 18px;
      font-weight: bold;
    }

    a {
      font-size: 14px;
    }
  }

  .licence p {
    font-size: 12px;
  }
}
</style>
