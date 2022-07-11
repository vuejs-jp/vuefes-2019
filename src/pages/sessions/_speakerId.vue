<template>
  <BaseMain class="session-page">
    <h2 class="heading">
      SESSION
    </h2>

    <div class="session">
      <!-- eslint-disable vue/singleline-html-element-content-newline -->
      <div class="session-time">{{ session.fields.time }}min</div>
      <!-- eslint-enable vue/singleline-html-element-content-newline -->

      <h1 class="session-title">
        {{ session.fields.title }}
      </h1>

      <!-- eslint-disable vue/no-v-html -->
      <div class="session-description" v-html="sessionDescriptionHtml" />
      <!-- eslint-enable vue/no-v-html -->
    </div>

    <div class="speaker">
      <img
        class="speaker-avatar"
        :srcset="
          `
          ${speaker.fields.avatar.fields.file.url},
          ${speaker.fields.avatar2x.fields.file.url} 2x
        `
        "
        :src="speaker.fields.avatar2x.fields.file.url"
        alt=""
      />

      <p class="speaker-title">
        {{ speaker.fields.title }}
      </p>

      <h2 class="speaker-name">
        {{ speaker.fields.name }}
      </h2>

      <!-- eslint-disable vue/no-v-html -->
      <div class="speaker-description" v-html="speakerDescriptionHtml" />
      <!-- eslint-enable vue/no-v-html -->

      <div class="speaker-social">
        <a
          v-if="speaker.fields.twitter"
          class="twitter"
          :href="`https://twitter.com/${speaker.fields.twitter}`"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/logo-twitter.svg" alt="Twitter" />
        </a>

        <a
          class="github"
          :href="`https://github.com/${speaker.fields.github}`"
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
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/vue-app'
import Speaker from '~/types/speaker'
import Session from '~/types/session'
import BaseMain from '~/components/BaseMain.vue'
import BaseButton from '~/components/BaseButton.vue'
import marked from '~/plugins/marked'

type AsyncData = {
  speakerId: string // スピーカーの GitHub アカウント
  path: string
}

@Component({
  components: {
    BaseMain,
    BaseButton
  },
  asyncData({ params, route }: Context): AsyncData {
    return {
      speakerId: params.speakerId,
      path: route.path
    }
  }
})
export default class SessionPage extends Vue {
  speakerId!: string
  path!: string

  @Getter('find', { namespace: 'sessions' })
  sessionById!: (id: string) => Session

  @Getter('findByGithub', { namespace: 'speakers' })
  speakerByGithub!: (github: string) => Speaker

  head() {
    const url = `https://vuefes.jp/2019${this.path}`
    const title = `${this.session.fields.title}（${this.speaker.fields.name}） | Vue Fes Japan 2019`
    const description = `Vue Fes Japan 2019 のセッション情報です。スピーカーの ${this.speaker.fields.name} が、「${this.session.fields.title}」を発表します。`

    // @ts-ignore Property 'fields' does not exist on type 'Asset | AssetLink'.
    // nuxtServerInit によって既に ogImage に Asset をセットした後なので、必ず fields が存在する
    const ogImageUrl = `https://vuefes.jp/2019/session-og-images/${this.speakerId}.jpg`

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
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

  get session(): Session {
    if (process.env.NODE_ENV === 'test') {
      this.setValueIfUndefined()
    }
    return this.sessionById(this.speaker.fields.sessions[0].sys.id)
  }

  get speaker(): Speaker {
    if (process.env.NODE_ENV === 'test') {
      this.setValueIfUndefined()
    }
    return this.speakerByGithub(this.speakerId)
  }

  get sessionDescriptionHtml(): string {
    return marked(this.session.fields.description)
  }

  get speakerDescriptionHtml(): string {
    return marked(this.speaker.fields.description)
  }

  private setValueIfUndefined(): void {
    // テストが失敗しないように undefined の場合は値を設定する
    if (this.speakerId === undefined) {
      this.speakerId = 'yyx990803'
    }
    if (this.path === undefined) {
      this.path = '/sessions/yyx990803/'
    }
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
    margin-bottom: 1.2vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 12px;
      width: 60px;
      margin-bottom: 5px;
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
      left: calc(-25% + -2px);
      width: calc(25% + 20px);
      height: auto;

      &::after {
        content: '';
        padding-bottom: calc(25% + 20px);
      }
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      width: calc(25% + 40px);

      &::after {
        padding-bottom: calc(25% + 40px);
      }
    }
  }

  &-title {
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

<style lang="scss">
@import '~/assets/stylesheets/foundation/typography.scss';

.session-page {
  .session-description {
    font-size: $font-size-default;
    line-height: 1.8;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: $font-size-default--is-small-up;
    }

    ul {
      list-style-position: inside;

      li {
        list-style-type: disc;
      }

      ul {
        padding-left: 2em;
      }
    }
  }

  .speaker-description,
  .speaker-description p {
    font-size: 3vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 18px;
    }
  }
}
</style>
