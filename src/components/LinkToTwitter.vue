<template>
  <BaseButton class="link-to-twitter" href="https://twitter.com/vuefes" target="_blank" rel="noopener">
    <img class="icon-twitter" src="~/assets/images/icon-twitter.svg" alt="Twitter" />
    <span class="button-text">
      Vue Fes Japan 公式 Twitter で最新情報をチェック
    </span>
  </BaseButton>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseButton
  }
})
export default class LinkToTwitter extends Vue {}
</script>

<style lang="scss" scoped>
.icon-twitter {
  display: block;
  margin-right: 3.5%;
  width: 9.6%;
}

.button-text {
  display: block;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .icon-twitter {
    margin-right: 20px;
    width: 32px;
  }
}
</style>
