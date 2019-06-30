<template>
  <BaseSection class="the-ticket-section">
    <template slot="heading">
      TICKETS
    </template>

    <div class="description">
      <p>
        2019/7/17（水）12:00 から Vue Fes Japan 2019 のチケットを発売開始します。チケットはアフターパーティーあり/なしの 2 種類で、全席ランチ付きです。
      </p>

      <p>
        販売媒体として
        <a href="https://www.universe.com/" target="_blank" rel="noopener">
          Universe
        </a>
        を利用します。発売開始のタイミングで本 Web サイトにてチケット購入へのリンクが公開されます。購入時に届くメールに QR コードが記載されていますので、そちらをチケットとして当日ご持参ください。
      </p>
    </div>

    <div class="ticket-list">
      <div class="ticket-item">
        <h3>一般チケット</h3>

        <p>7,000円</p>

        <div
          v-lazy-container="{ selector: 'img' }"
        >
          <img
            :data-srcset="`${imageOne}, ${imageOne2x} 2x`"
            :data-src="imageOne2x"
            alt=""
          />
        </div>
      </div>

      <div class="ticket-item">
        <h3>一般＋アフターパーティチケット</h3>

        <p>10,000円</p>

        <div
          v-lazy-container="{ selector: 'img' }"
        >
          <img
            :data-srcset="`${imageTwo}, ${imageTwo2x} 2x`"
            :data-src="imageTwo2x"
            alt=""
          />
        </div>
      </div>
    </div>

    <p>
      ※別途クレジットカード決済手数料（0.35%）がかかります。
    </p>

    <BaseButton>
      発売開始予定
      <br />
      7/17（水）12:00〜
    </BaseButton>

    <div class="faq">
      <h3>FAQ</h3>

      <h4>
        お支払い方法
      </h4>
      <p>
        各種クレジットカード（Visa、American Express、Discover、MasterCard）と Google Pay、Apple Pay がご利用いただけます。
      </p>

      <h4>
        領収書について
      </h4>
      <p>
        チケット購入後に届くメールに添付された PDF を領収書としてご利用ください。
      </p>

      <h4>
        キャンセル、返金について
      </h4>
      <p>
        購入者都合によるキャンセルの場合、チケットの返金はできません。ただし、譲渡は購入者の責任において行うことができます。詳細は
        <a href="https://support.universe.com/hc/ja/articles/360002614651-%E3%83%81%E3%82%B1%E3%83%83%E3%83%88%E3%82%92%E8%AD%B2%E6%B8%A1%E3%81%99%E3%82%8B" target="_blank" rel="noopener">
          Universe のヘルプ
        </a>
        をご覧ください。譲渡されたチケットの再譲渡は行えません。
        <br />
        また、譲渡に関するトラブルについて Vue.js 日本ユーザーグループは一切責任を負わないものとします。あらかじめご了承ください。
      </p>

      <h4>
        タイムテーブルやセッション内容は？
      </h4>
      <p>
        チケットの発売開始までに本 Web サイトにて公開予定です。一部内容についてはチケット発売後に公開になる可能性がありますので、あらかじめご了承ください。
      </p>

      <h4>
        ランチは全員に提供されますか？
      </h4>
      <p>
        はい、会場内でお弁当とお飲み物をご提供します。各会場ではランチを召し上がりながら Lunch スポンサーセッション（10分 x 3本）にご参加いただけます。
      </p>

      <h4>
        アフターパーティーはどのようなものですか？
      </h4>
      <p>
        全セッション終了後、会場内にて立食形式のお食事、お飲み物（アルコールあり）を召し上がりながらご歓談いただけます。お1人で参加される方でもお楽しみいただけるような工夫を行う予定です。お楽しみに！
      </p>

      <h4>
        当日の入場について
      </h4>
      <p>
        当日は受付の混雑が予想されます。受付用の QR コードを読み取れるようご準備の上、列へお並びください。QR コードはチケット購入時に届くメールをご確認ください。
      </p>

      <h4>
        Universe のアカウント作成について
      </h4>
      <p>
        購入時に Universe のアカウントを作成するか選択できますが、作成しなくともチケットの購入は可能です。また、チケット購入後でも購入時に届くメールからアカウントを作成することができます。
      </p>
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
}
</script>
