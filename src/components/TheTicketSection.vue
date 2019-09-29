<template>
  <BaseSection id="the-ticket-section" class="the-ticket-section">
    <template v-slot:heading>
      TICKET
    </template>

    <div class="description">
      <!-- prettier-ignore -->
      <p>
        チケットの販売は 9/17 を持ちまして終了しました。
      </p>

      <!-- prettier-ignore -->
      <p>
        チケットはアフターパーティーあり/なしの 2種類で、全席ランチ付きです。購入時に送られたメール内の QR コードを当日受付でご提示ください。
      </p>

      <!-- prettier-ignore -->
      <p>
        チケットに関するお問い合わせは、Vue Fes Japan 2019 の
        <nuxt-link class="link" to="/contact/">
          お問い合わせフォーム
        </nuxt-link>
        よりお問い合わせください。
      </p>
    </div>

    <div class="ticket-list">
      <div class="ticket-item">
        <div class="ticket-content">
          <h3>一般チケット</h3>
          <p><span>7,000</span>円</p>
        </div>

        <div v-lazy-container="{ selector: 'img' }" class="image">
          <img
            :data-srcset="`${imageOne}, ${imageOne2x} 2x`"
            :data-src="imageOne2x"
            alt=""
          />
        </div>
      </div>

      <div class="ticket-item">
        <div class="ticket-content">
          <h3>一般＋アフターパーティーチケット</h3>
          <p><span>10,000</span> 円</p>
        </div>

        <div v-lazy-container="{ selector: 'img' }" class="image">
          <img
            :data-srcset="`${imageTwo}, ${imageTwo2x} 2x`"
            :data-src="imageTwo2x"
            alt=""
          />
        </div>
      </div>
    </div>

    <p class="note">
      ※別途、決済プラットフォーム利用手数料（3.5%）がかかります。
    </p>

    <div class="faq">
      <h3>FAQ</h3>

      <div class="faq-content">
        <h4>
          領収書について
        </h4>
        <!-- prettier-ignore -->
        <p>
          チケット購入後に届くメールに添付された PDF を領収書としてご利用ください。
        </p>
      </div>

      <div class="faq-content">
        <h4>
          キャンセル、返金について
        </h4>
        <!-- prettier-ignore -->
        <p>
          購入者都合によるキャンセルの場合、チケットの返金はできません。ただし、譲渡は購入者の責任において行うことができます。詳細は
          <a
            href="https://support.universe.com/hc/ja/articles/360002614651-%E3%83%81%E3%82%B1%E3%83%83%E3%83%88%E3%82%92%E8%AD%B2%E6%B8%A1%E3%81%99%E3%82%8B"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            Universe のヘルプ
          </a>
          をご覧ください。譲渡されたチケットの再譲渡は行えません。
          <br />
          また、譲渡に関するトラブルについて Vue.js 日本ユーザーグループは一切責任を負わないものとします。あらかじめご了承ください。
        </p>
      </div>

      <div class="faq-content">
        <h4>
          ランチは全員に提供されますか？
        </h4>
        <!-- prettier-ignore -->
        <p>
          はい、会場内でお弁当とお飲み物をご提供します。各会場ではランチを召し上がりながら Lunch スポンサーセッション（10分 x 3本）にご参加いただけます。
        </p>
      </div>

      <div class="faq-content">
        <h4>
          アフターパーティーはどのようなものですか？
        </h4>
        <p>
          全セッション終了後、会場内にて立食形式のお食事、お飲み物（アルコールあり）を召し上がりながらご歓談いただけます。お1人で参加される方でもお楽しみいただけるような工夫を行う予定です。お楽しみに！
        </p>
      </div>

      <div class="faq-content">
        <h4>
          チケットを購入しましたが、メールが届きません
        </h4>
        <!-- prettier-ignore -->
        <p>
          迷惑メールとして扱われている可能性があります。迷惑メールに振り分けられていないかご確認ください。それでも届いていない場合、迷惑メールの対策のため受信できていない可能性があります。「universe.com」を受信できるように設定のうえ、Vue Fes Japan 2019 の
          <nuxt-link class="link" to="/contact/">
            お問い合わせフォーム
          </nuxt-link>
          よりお問い合わせください。
        </p>
      </div>

      <div class="faq-content">
        <h4>
          当日の入場について
        </h4>
        <!-- prettier-ignore -->
        <p>
          当日は受付の混雑が予想されます。受付用の QR コードを読み取れるようご準備の上、列へお並びください。QR コードはチケット購入時に届くメールをご確認ください。
        </p>
      </div>

      <div class="faq-content">
        <h4>
          Universe のアカウント作成について
        </h4>
        <!-- prettier-ignore -->
        <p>
          購入時に Universe のアカウントを作成するか選択できますが、作成しなくともチケットの購入は可能です。また、チケット購入後でも購入時に届くメールからアカウントを作成することができます。
        </p>
      </div>
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'
import BaseButton from '~/components/BaseButton.vue'

@Component({
  components: {
    BaseSection,
    BaseButton
  }
})
export default class TheTicketSection extends Vue {
  private imageOne = require('~/assets/images/ticket/image1.jpg')

  private imageOne2x = require('~/assets/images/ticket/image1@2x.jpg')

  private imageTwo = require('~/assets/images/ticket/image2.jpg')

  private imageTwo2x = require('~/assets/images/ticket/image2@2x.jpg')

  openUniverse() {
    window.open(
      'https://www.universe.com/events/vue-fes-japan-2019-tickets--YG3SMV'
    )
  }
}
</script>

<style lang="scss" scoped>
$content-max-width--is-small-up: 668px;
$content-max-width--is-medium-up: 820px;
$ticket-item-content-width--is-small: 28.5vw;
$ticket-item-content-width--is-small-up: 140px;

.the-ticket-section {
  background: linear-gradient(
    to right bottom,
    $sangosyu,
    $sangosyu 30%,
    $asagi 70%,
    $asagi
  );
}

.description {
  background-color: $primary-text-color--invert;
  padding: 5vw;
  margin-bottom: 8vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    max-width: $content-max-width--is-small-up;
    padding: 40px;
    margin: 0 auto 40px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    max-width: $content-max-width--is-medium-up;
  }
}

.ticket-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: calc(100% + 40px);
    margin: -20px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    width: calc(100% + 20px);
    margin: -10px;
  }
}

.ticket-item {
  position: relative;
  width: 100%;
  background-color: $white;
  margin-bottom: 8vw;
  border: 1px solid $primary-color;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: calc(50% - 40px);
    margin: 20px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    width: calc(50% - 20px);
    margin: 10px;
  }

  &:last-child {
    margin-bottom: 0;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-bottom: 20px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      margin-bottom: 10px;
    }
  }

  .image {
    width: 100%;
    padding-bottom: $ticket-item-content-width--is-small;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      padding-bottom: $ticket-item-content-width--is-small-up;
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .ticket-content {
    position: absolute;
    left: 6.5vw;
    bottom: 0;
    width: calc(100% - (6.5vw * 2));
    height: $ticket-item-content-width--is-small;
    text-align: center;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      left: 25px;
      width: calc(100% - 50px);
      height: $ticket-item-content-width--is-small-up;
    }
  }

  h3 {
    background-color: $primary-color;
    color: $white;
    font-weight: bold;
    font-size: 4vw;
    line-height: 11vw;
    transform: translateY(-50%);

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 18px;
      line-height: 52px;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  p {
    font-size: 5vw;
    height: calc(#{$ticket-item-content-width--is-small} - 11vw);
    line-height: calc(#{$ticket-item-content-width--is-small} - 11vw);
    transform: translateY(calc((-11vw / 2) / 2));

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 24px;
      height: calc(#{$ticket-item-content-width--is-small-up} - 52px);
      line-height: calc(#{$ticket-item-content-width--is-small-up} - 52px);
      transform: translateY(calc((-52px / 2) / 2));
    }

    span {
      font-size: 10vw;
      font-weight: bold; // FIXME: 太さをカンプ通りにしたい

      @media screen and (min-width: $layout-breakpoint--is-small-up) {
        font-size: 40px;
      }
    }
  }
}

.note {
  color: $primary-text-color--invert;
  font-size: 3.5vw;
  margin: 5vw auto 10vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 16px;
    text-align: center;
    margin: 20px auto 40px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin: 20px auto 40px;
  }
}

.ticket-button {
  width: 100%;
  margin-bottom: 10vw;
  line-height: 1.4;

  &:disabled {
    background-color: $gray;
    border: 3px solid $gray;
    box-shadow: none;

    &:hover {
      color: $primary-text-color--invert;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    line-height: 1.2;
    margin-bottom: 60px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin-bottom: 80px;
  }
}

.faq {
  color: $primary-text-color--invert;

  h3 {
    font-size: 5vw;
    font-weight: bold;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 30px;
    }
  }

  h4 {
    font-size: 3.5vw;
    font-weight: bold;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 16px;
    }
  }

  p {
    font-size: 3.5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 16px;
      margin-top: 2px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      margin-top: 5px;
    }
  }

  &-content {
    margin-top: 5vw;

    @media screen and (max-width: $layout-breakpoint--is-small) {
      &:first-of-type {
        margin-top: 3vw;
      }
    }

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      max-width: $content-max-width--is-small-up;
      margin-top: 20px;
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      max-width: $content-max-width--is-medium-up;
    }
  }

  .link {
    color: $primary-text-color--invert;

    &:hover {
      color: $primary-text-color;
    }
  }
}
</style>
