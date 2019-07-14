<template>
  <div class="session-page">
    <h2>
      SESSION
    </h2>
    
    <h1>
      次世代のデザインとフロントエンド開発の GUI 化
    </h1>

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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'

@Component({
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
