<template>
  <footer class="the-footer">
    <div class="footer-container">
      <div class="content-wrapper">
        <div class="logo">
          <img src="~/assets/images/logo-vuefes.svg" alt="VueFes" />
        </div>

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
            <img src="~/assets/images/white-icon-twitter.svg" />
            Twitter
          </a>
          <a
            href="https://www.youtube.com/channel/UC6KPwA1kZJtQYdlh8_2hxCA"
            target="_blank"
            rel="noopener"
          >
            <img src="~/assets/images/white-icon-youtube.svg" />
            YouTube
          </a>
          <a
            href="https://github.com/vuejs-jp/home"
            target="_blank"
            rel="noopener"
          >
            <img src="~/assets/images/white-icon-github.svg" />
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

        <div class="social-wrapper">
          <div class="social-button" @click="openTwitterForm">
            <img src="~/assets/images/logo-twitter.svg" alt="Twitter" />
          </div>
          <div class="social-button" @click="openFacebookForm">
            <img src="~/assets/images/logo-facebook.svg" alt="Facebook" />
          </div>
          <div class="social-button" @click="openHatenaBookmarkForm">
            <img
              src="~/assets/images/logo-hatena-bookmark.svg"
              alt="はてなブックマーク"
            />
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

<style lang="scss" scoped>
.the-footer {
  padding: 70px;
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

.social-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
}

.social-button {
  width: 13.75%;
  max-width: 57px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  & + & {
    margin-left: 13.75%;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 15px;
    }
  }

  img {
    display: block;
  }
}

.logo img {
  display: block;
  max-width: 220px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  a {
    display: block;
  }
}

.menu-list,
.social-list,
.link-list {
  font-size: 14px;
  line-height: 2;

  .list-title {
    margin-top: 0;
    font-size: 18px;
    font-weight: bold;
  }

  a {
    margin-bottom: 10px;
    text-decoration: none;
  }
}

.licence p {
  font-size: 12px;
  font-weight: 300;
}
</style>
