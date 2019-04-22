<template>
  <footer class="the-footer">
    <div class="footer-container">
      <img src="~/assets/images/logo-vuefes.svg" alt="VueFes" />

      <div class="menu-list">
        <h3>メニュー</h3>
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
        <h3>ソーシャル</h3>
        <a
          href="https://twitter.com/vuefes"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/white-icon-twitter.svg" />
          Twitter
        </a>
        <!-- TODO: URLを確認する -->
        <a
          href=""
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/white-icon-youtube.svg" />
          YouTube
        </a>
        <!-- TODO: URLを確認する -->
        <a
          href=""
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/white-icon-github.svg" />
          GitHub
        </a>
      </div>

      <div class="link-list">
        <h3>各種リンク</h3>
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
  padding: 30px;
  background-color: $primary-color;
  color: $primary-text-color--invert;

  a {
    color: $primary-text-color--invert;
  }
}
</style>
