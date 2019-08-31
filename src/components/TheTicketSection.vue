<template>
  <BaseSection class="the-ticket-section">
    <template slot="heading">
      TICKET
    </template>

    <div class="description">
      <!-- prettier-ignore -->
      <p>
        Vue Fes Japan 2019 のチケットが発売中です。チケットはアフターパーティーあり/なしの 2種類で、全席ランチ付きです。チケットの購入は「チケットを購入する」ボタンからご購入ください。Apple Pay で決済をご希望の方は、<a href="#" class="link" @click.prevent="openUniverse">こちらのリンク</a>から直接ご購入ください。また、Universe の決済方法でチケットを購入できない方向けに別途購入窓口を開設しています。詳細は <a href="https://note.mu/ryamakuchi/n/n7a07b20d811d" target="_blank" rel="noopener noreferrer" class="link">note</a> をご覧ください。
      </p>

      <!-- prettier-ignore -->
      <p>
        購入時に届くメールに QR コードが記載されていますので、そちらをチケットとして当日ご持参ください。
      </p>

      <!-- prettier-ignore -->
      <p>
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        チケットに関するお問い合わせは、<nuxt-link class="link" to="/contact/">お問い合わせページ</nuxt-link>からお願いします。
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
      ※別途クレジットカード決済手数料（3.5%）がかかります。
    </p>

    <BaseButton
      class="ticket-button"
      href="https://www.universe.com/events/vue-fes-japan-2019-tickets--YG3SMV"
    >
      チケットを購入する
    </BaseButton>

    <div class="faq">
      <h3>FAQ</h3>

      <div class="faq-content">
        <h4>
          お支払い方法
        </h4>
        <!-- prettier-ignore -->
        <p>
          各種クレジットカード（Visa、American Express、MasterCard）と Google Pay、Apple Pay がご利用いただけます。JCB カードはご利用いただけません。ご不便をおかけし申し訳ありませんが、別の決済方法をご検討いただけますと幸いです。
        </p>
      </div>

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
          タイムテーブルやセッション内容は？
        </h4>
        <!-- prettier-ignore -->
        <p>
          チケットの発売開始までに本 Web サイトにて公開予定です。一部内容についてはチケット発売後に公開になる可能性がありますので、あらかじめご了承ください。
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
          チケットはいつまで買えますか？
        </h4>
        <!-- prettier-ignore -->
        <p>
          2019/9/17（火）当日いっぱいまで購入することができます。
        </p>
      </div>

      <div class="faq-content">
        <h4>
          チケットを購入ましたが、メールが届きません
        </h4>
        <!-- prettier-ignore -->
        <p>
          迷惑メールとして扱われている可能性があります。迷惑メールに振り分けられていないかご確認ください。それでも届いていない場合、迷惑メールの対策のため受信できていない可能性があります。「universe.com」を受信できるように設定のうえ、お問い合わせください。
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
  private imageOne = require('~/assets/images/tickets/image1.jpg')

  private imageOne2x = require('~/assets/images/tickets/image1@2x.jpg')

  private imageTwo = require('~/assets/images/tickets/image2.jpg')

  private imageTwo2x = require('~/assets/images/tickets/image2@2x.jpg')

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
    margin: 20px auto 70px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin: 20px auto 80px;
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
