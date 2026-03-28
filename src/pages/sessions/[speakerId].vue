<script setup lang="ts">
import { renderMarkdown } from '~/lib/markdown'
import type { Asset, AssetLink } from '~/types/contentful'
import type SessionType from '~/types/session'
import type SpeakerType from '~/types/speaker'

const route = useRoute()
const { findSessionById, findSpeakerByGithub } = useSiteData()

const speakerId = computed(() => {
  const value = route.params.speakerId
  return Array.isArray(value) ? value[0] : value || 'yyx990803'
})

const speaker = computed<SpeakerType>(() => {
  const result = findSpeakerByGithub(speakerId.value)

  if (!result) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Session not found',
    })
  }

  return result
})

const session = computed<SessionType>(() => {
  const sessionId = speaker.value?.fields.sessions[0]?.sys.id

  if (!sessionId) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Session not found',
    })
  }

  const result = findSessionById(sessionId)

  if (!result) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Session not found',
    })
  }

  return result
})

const ogImageUrl = computed(
  () => `https://vuefes.jp/2019/session-og-images/${speakerId.value}.jpg`,
)
const sessionDescriptionHtml = computed(() =>
  renderMarkdown(session.value!.fields.description),
)
const speakerDescriptionHtml = computed(() =>
  renderMarkdown(speaker.value!.fields.description),
)

function assetUrl(asset: Asset | AssetLink): string {
  if (!('fields' in asset)) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Speaker asset was not resolved',
    })
  }

  return asset.fields.file.url
}

const speakerAvatarSrcSet = computed(
  () =>
    `${assetUrl(speaker.value.fields.avatar)}, ${assetUrl(speaker.value.fields.avatar2x)} 2x`,
)

useHead(() => {
  const title = `${session.value!.fields.title}（${speaker.value!.fields.name}） | Vue Fes Japan 2019`
  const description = `Vue Fes Japan 2019 のセッション情報です。スピーカーの ${speaker.value!.fields.name} が、「${session.value!.fields.title}」を発表します。`
  const url = `https://vuefes.jp/2019${route.path}`

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'og:url', content: url },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: ogImageUrl.value },
      { name: 'og:image:secure_url', content: ogImageUrl.value },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:title', content: title },
      { name: 'twitter:image', content: ogImageUrl.value },
    ],
  }
})
</script>

<template>
  <BaseMain class="session-page">
    <h2 class="heading">SESSION</h2>

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
        :srcset="speakerAvatarSrcSet"
        :src="assetUrl(speaker.fields.avatar2x)"
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

    <BaseButton to="/"> トップに戻る </BaseButton>
  </BaseMain>
</template>

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
