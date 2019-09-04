<template>
  <BaseSection class="the-event-section">
    <template v-slot:heading>
      EVENTS
    </template>

    <div class="notification">
      <!-- prettier-ignore -->
      <p>
        今年の Vue Fes Japan には、より Vue.js を楽しんでいただくための企画を多数ご用意しています。セッションの合間にぜひお立ち寄りください。
      </p>
    </div>

    <div class="note">
      ※画像はすべてイメージです。
    </div>

    <ul>
      <li v-for="(event, index) in events" :key="index">
        <div v-lazy-container="{ selector: 'img' }" class="event-image">
          <img
            :data-srcset="`${event.image}, ${event.image2x} 2x`"
            :data-src="event.image2x"
            alt=""
          />
        </div>

        <h3 class="event-title">
          {{ event.title }}
        </h3>

        <!-- eslint-disable vue/no-v-html -->
        <!-- eslint-disable vue/html-self-closing -->
        <p v-html="event.description"></p>
        <!-- eslint-enable vue/html-self-closing -->
        <!-- eslint-enable vue/no-v-html -->
      </li>
    </ul>

    <div v-lazy-container="{ selector: 'img' }" class="event-other-images">
      <img
        :data-srcset="`${informationTable}, ${informationTable} 2x`"
        :data-src="informationTable2x"
        alt=""
      />
      <img :data-srcset="`${party}, ${party} 2x`" :data-src="party2x" alt="" />
    </div>

    <h3>
      Vue Fes Store
    </h3>

    <!-- prettier-ignore -->
    <p>
      会場限定の Vue Fes Japan グッズをお買い求めいただける Vue Fes Store が登場します。<br />
      当日しか手に入らないレアアイテムをお見逃しなく！
    </p>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div v-lazy-container="{ selector: 'img' }" class="item-image">
          <img
            :data-srcset="`${item.image}, ${item.image2x} 2x`"
            :data-src="item.image2x"
            alt=""
          />
        </div>

        <h4>
          {{ item.name }}
        </h4>

        <p>￥{{ item.price }}</p>

        <!-- eslint-disable vue/no-v-html -->
        <!-- eslint-disable vue/html-self-closing -->
        <p v-html="item.description"></p>
        <!-- eslint-enable vue/html-self-closing -->
        <!-- eslint-enable vue/no-v-html -->
      </li>
    </ul>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

interface Event {
  title: string
  description: string
  image: string
  image2x: string
}

interface Item {
  name: string
  price: number
  description: string
  image: string
  image2x: string
}

@Component({
  components: {
    BaseSection
  }
})
export default class TheStoreSection extends Vue {
  private events: Event[] = [
    {
      title: 'リフレッシュメントスペース',
      description:
        '喉が渇いたらお茶やコーヒーはいかがですか？小腹を満たすお菓子もご用意しています。もちろん無料です。休憩できる椅子は譲り合ってご利用ください。',
      image: require('~/assets/images/events/refreshment.jpg'),
      image2x: require('~/assets/images/events/refreshment@2x.jpg')
    },
    {
      title: 'スポンサーブースシールラリー',
      description:
        '工夫を凝らした展示が楽しめるスポンサーブースが今年も登場。ブースで配られるシールを集めると、特製小物ケース（写真右下）をプレゼントします。数量限定のためお早めに！',
      image: require('~/assets/images/events/sponsor-booths.jpg'),
      image2x: require('~/assets/images/events/sponsor-booths@2x.jpg')
    },
    {
      title: '技術同人誌販売スペース',
      description:
        'Vue.js や JavaScript に関する技術同人誌を立ち読みし、気に入った本があれば実際に購入できます。あなたの知らない良書が見つかるチャンスかもしれません。',
      image: require('~/assets/images/events/presents.jpg'),
      image2x: require('~/assets/images/events/presents@2x.jpg')
    },
    {
      title: 'タトゥースペース',
      description:
        '顔や手に Vue Fes Japan 特製タトゥーシールを貼り付けて、フェス気分を盛り上げましょう。Vue.js や Nuxt.js のロゴマークをその場ですぐに付けられます。',
      image: require('~/assets/images/events/tattoo.jpg'),
      image2x: require('~/assets/images/events/tattoo@2x.jpg')
    }
  ]

  private items: Item[] = [
    {
      name: 'Tシャツ',
      price: 2000,
      description:
        'Vue Fes Japan 2019のメインビジュアルをあしらった Tシャツです。洗濯で伸び縮みしにくい生地を使用しています。<br />' +
        '<br/>' +
        'カラー: ネイビー<br />' +
        'サイズ: S / M / L / XL',
      image: require('~/assets/images/events/t-shirt.png'),
      image2x: require('~/assets/images/events/t-shirt@2x.png')
    },
    {
      name: 'パーカー',
      price: 4000,
      description:
        'ポケット付きのフルジップパーカー。肌触りが良いパイル裏地のスウェット生地を使用しています。<br />' +
        '<br />' +
        'カラー: ミックスグレー<br />' +
        'サイズ: S / M / L / XL',
      image: require('~/assets/images/events/parka.png'),
      image2x: require('~/assets/images/events/parka@2x.png')
    },
    {
      name: 'ステンレスマグカップ',
      price: 1800,
      description:
        'レーザー彫刻を施したステンレスマグカップ。オフィスやアウトドアでも活躍が期待できます。<br />' +
        '<br />' +
        'カラー: シルバー<br />' +
        '容量: 300ml',
      image: require('~/assets/images/events/mug.png'),
      image2x: require('~/assets/images/events/mug@2x.png')
    },
    {
      name: 'ステンレスタンブラー',
      price: 2000,
      description:
        'レーザー彫刻を施したステンレスタンブラー。真空二重構造で氷を入れてもほとんど結露しません。<br />' +
        '<br />' +
        'カラー: シルバー<br />' +
        '容量: 450ml',
      image: require('~/assets/images/events/tumbler.png'),
      image2x: require('~/assets/images/events/tumbler@2x.png')
    },
    {
      name: 'Vue.js クッション',
      price: 2500,
      description:
        '珍しい三角形のクッションです。もちもちとした触感がクセになります。<br />' +
        '<br />' +
        'サイズ: 30cm以下（予定）',
      image: require('~/assets/images/events/cushion.png'),
      image2x: require('~/assets/images/events/cushion@2x.png')
    },
    {
      name: '缶バッジ 4個セット',
      price: 500,
      description:
        '人気のロゴが入った缶バッジセットです。Vue.jsのみ円形と三角形の2種類が付属します。<br />' +
        '<br />' +
        'サイズ: 44mm（円形）、70mm（三角形）',
      image: require('~/assets/images/events/badges.png'),
      image2x: require('~/assets/images/events/badges@2x.png')
    },
    {
      name: 'マルチクリーナー',
      price: 300,
      description:
        'メガネ、スマートフォンなどマルチな用途で使えるクリーナーです。印刷面、裏面のどちらでも拭けます。<br />' +
        '<br />' +
        'サイズ: 15 x 15cm',
      image: require('~/assets/images/events/cleaner.png'),
      image2x: require('~/assets/images/events/cleaner@2x.png')
    },
    {
      name: 'ステッカー',
      price: 200,
      description:
        'テックカンファレンスの定番、ステッカーです。キートップに貼れるサイズのキーボードステッカーも付属。',
      image: require('~/assets/images/events/stickers.png'),
      image2x: require('~/assets/images/events/stickers@2x.png')
    }
  ]

  private informationTable = require('~/assets/images/events/information-table.jpg')
  private informationTable2x = require('~/assets/images/events/information-table@2x.jpg')
  private party = require('~/assets/images/events/party.jpg')
  private party2x = require('~/assets/images/events/party@2x.jpg')
}
</script>

<style lang="scss" scoped>
$content-max-width--is-small-up: 668px;
$content-max-width--is-medium-up: 820px;

.notification {
  padding: 6.7%;
  background-color: $white;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    max-width: $content-max-width--is-small-up;
    padding: 40px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    max-width: $content-max-width--is-medium-up;
  }
}

.image-container {
  .image {
    margin: 2vw 0;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin: 10px 0;
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .note {
    font-size: 88.8%;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-left: auto;
    max-width: $content-max-width--is-small-up;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    max-width: $content-max-width--is-medium-up;
  }
}
</style>
