<template>
  <BaseSection class="the-call-for-presenters-section">
    <template slot="heading">
      CALL FOR PRESENTERS
    </template>

    <div class="notification">
      <p>
        Vue Fes Japan 2019 では、スピーカー発表を広く一般から募集します。日本最大級の Vue.js カンファレンスで登壇する絶好の機会です。募集開始は、2019年5月下旬を予定しています。
      </p>

      <p>
        最新情報は、Vue Fes Japan の Twitter でご確認ください。
      </p>
    </div>

    <BaseButton class="link-to-twitter" href="https://twitter.com/vuefes" target="_blank" rel="noopener">
      <img class="icon-twitter" src="~/assets/images/icon-twitter.svg" />
      <span class="button-text">
        Vue Fes Japan 公式 Twitter で最新情報をチェック
      </span>
    </BaseButton>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseButton from '~/components/BaseButton.vue'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseButton,
    BaseSection
  }
})
export default class TheCallForPresentersSection extends Vue {}
</script>

<style lang="scss">
.notification {
  margin-bottom: 40px;
  padding: 40px 6.7%;
  border: $black 1px solid;

  p {
    font-size: 4vw;
    line-height: 1.8;
  }
}

.link-to-twitter {
  display: flex;
  align-items: center;
}

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
  .notification {
    margin-left: auto;
    margin-bottom: 60px;
    width: 80%;
    padding: 40px;

    p {
      font-size: 18px;
    }
  }

  .link-to-twitter {
    margin: 0 auto;
    justify-content: center;
  }

  .icon-twitter {
    margin-right: 20px;
    width: 32px;
  }
}
</style>
