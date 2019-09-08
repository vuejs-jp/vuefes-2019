<template>
  <BaseSection class="the-event-section">
    <template v-slot:heading>
      EVENTS
    </template>

    <div class="notification-container">
      <div class="notification">
        <!-- prettier-ignore -->
        <p>
          今年の Vue Fes Japan には、より Vue.js を楽しんでいただくための企画を多数ご用意しています。セッションの合間にぜひお立ち寄りください。
        </p>
      </div>

      <div class="note">
        ※画像はすべてイメージです。
      </div>
    </div>

    <ul class="event-list">
      <li v-for="(event, index) in events" :key="index" class="event">
        <div v-lazy-container="{ selector: 'img' }" class="event-image">
          <img
            :data-srcset="`${event.image}, ${event.image2x} 2x`"
            :data-src="event.image2x"
            alt=""
          />

          <div
            v-if="event.title === 'スポンサーブースシールラリー'"
            class="case-image-container"
          >
            <img
              :data-srcset="`${caseImage}, ${caseImage2x} 2x`"
              :data-src="caseImage2x"
              alt=""
            />
          </div>
        </div>

        <h3 class="event-title">
          {{ event.title }}
        </h3>

        <!-- eslint-disable vue/no-v-html -->
        <!-- eslint-disable vue/html-self-closing -->
        <p class="event-description" v-html="event.description"></p>
        <!-- eslint-enable vue/html-self-closing -->
        <!-- eslint-enable vue/no-v-html -->
      </li>
    </ul>

    <div class="event-other-images">
      <div
        v-lazy-container="{ selector: 'img' }"
        class="information-table-image"
      >
        <img
          :data-srcset="`${informationTable}, ${informationTable} 2x`"
          :data-src="informationTable2x"
          alt=""
        />
      </div>

      <div v-lazy-container="{ selector: 'img' }" class="party-image">
        <img
          class="party"
          :data-srcset="`${party}, ${party} 2x`"
          :data-src="party2x"
          alt=""
        />
      </div>
    </div>

    <div class="store">
      <h3 class="store-title">
        Vue Fes Store
      </h3>

      <!-- prettier-ignore -->
      <p class="store-description">
        会場限定の Vue Fes Japan グッズをお買い求めいただける Vue Fes Store が登場します。<br />
        当日しか手に入らないレアアイテムをお見逃しなく！
      </p>
    </div>

    <ul class="product-list">
      <li v-for="(product, index) in products" :key="index" class="product">
        <div v-lazy-container="{ selector: 'img' }" class="product-image">
          <img
            :data-srcset="`${product.image}, ${product.image2x} 2x`"
            :data-src="product.image2x"
            alt=""
          />
        </div>

        <div class="product-content">
          <h4 class="product-name">
            {{ product.name }}
          </h4>

          <!-- prettier-ignore -->
          <p class="product-price">
            <span class="price-unit">¥</span>{{ product.price.toLocaleString() }}
          </p>

          <!-- eslint-disable vue/no-v-html -->
          <!-- eslint-disable vue/html-self-closing -->
          <p class="product-description" v-html="product.description"></p>
          <!-- eslint-enable vue/html-self-closing -->
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </li>
    </ul>

    <div class="donation">
      <p>
        グッズ販売における利益は以下に分割して全額寄付される予定です。
      </p>

      <ul>
        <li>
          Vue.js コアチームによる開発の支援
        </li>

        <li>
          Vue.js 日本ユーザーグループによるコミュニティ活動の支援
        </li>
      </ul>
    </div>
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

interface Product {
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
      image: require('~/assets/images/event/refreshment.jpg'),
      image2x: require('~/assets/images/event/refreshment@2x.jpg')
    },
    {
      title: 'スポンサーブースシールラリー',
      description:
        '工夫を凝らした展示が楽しめるスポンサーブースが今年も登場。ブースで配られるシールを集めると、特製小物ケース（写真右下）をプレゼントします。数量限定のためお早めに！',
      image: require('~/assets/images/event/sponsor-booths.jpg'),
      image2x: require('~/assets/images/event/sponsor-booths@2x.jpg')
    },
    {
      title: '技術同人誌販売スペース',
      description:
        'Vue.js や JavaScript に関する技術同人誌を立ち読みし、気に入った本があれば実際に購入できます。あなたの知らない良書が見つかるチャンスかもしれません。',
      image: require('~/assets/images/event/presents.jpg'),
      image2x: require('~/assets/images/event/presents@2x.jpg')
    },
    {
      title: 'タトゥースペース',
      description:
        '顔や手に Vue Fes Japan 特製タトゥーシールを貼り付けて、フェス気分を盛り上げましょう。Vue.js や Nuxt.js のロゴマークをその場ですぐに付けられます。',
      image: require('~/assets/images/event/tattoo.jpg'),
      image2x: require('~/assets/images/event/tattoo@2x.jpg')
    }
  ]

  private caseImage: string = require('~/assets/images/event/case.jpg')
  private caseImage2X: string = require('~/assets/images/event/case@2x.jpg')

  private products: Product[] = [
    {
      name: 'Tシャツ',
      price: 2000,
      description:
        'Vue Fes Japan 2019 のメインビジュアルをあしらった Tシャツです。洗濯で伸び縮みしにくい生地を使用しています。<br />' +
        '<br/>' +
        'カラー: ネイビー<br />' +
        'サイズ: S / M / L / XL',
      image: require('~/assets/images/event/t-shirt.png'),
      image2x: require('~/assets/images/event/t-shirt@2x.png')
    },
    {
      name: 'パーカー',
      price: 4000,
      description:
        'ポケット付きのフルジップパーカー。肌触りが良いパイル裏地のスウェット生地を使用しています。<br />' +
        '<br />' +
        'カラー: ミックスグレー<br />' +
        'サイズ: S / M / L / XL',
      image: require('~/assets/images/event/parka.png'),
      image2x: require('~/assets/images/event/parka@2x.png')
    },
    {
      name: 'ステンレスマグカップ',
      price: 1800,
      description:
        'レーザー彫刻を施したステンレスマグカップ。オフィスやアウトドアでも活躍が期待できます。<br />' +
        '<br />' +
        'カラー: シルバー<br />' +
        '容量: 300ml',
      image: require('~/assets/images/event/mug.png'),
      image2x: require('~/assets/images/event/mug@2x.png')
    },
    {
      name: 'ステンレスタンブラー',
      price: 2000,
      description:
        'レーザー彫刻を施したステンレスタンブラー。真空二重構造で氷を入れてもほとんど結露しません。<br />' +
        '<br />' +
        'カラー: シルバー<br />' +
        '容量: 450ml',
      image: require('~/assets/images/event/tumbler.png'),
      image2x: require('~/assets/images/event/tumbler@2x.png')
    },
    {
      name: 'Vue.js クッション',
      price: 2500,
      description:
        '珍しい三角形のクッションです。もちもちとした触感がクセになります。<br />' +
        '<br />' +
        'サイズ: 30cm以下（予定）',
      image: require('~/assets/images/event/cushion.png'),
      image2x: require('~/assets/images/event/cushion@2x.png')
    },
    {
      name: '缶バッジ 4個セット',
      price: 500,
      description:
        '人気のロゴが入った缶バッジセットです。Vue.js のみ円形と三角形の 2種類が付属します。<br />' +
        '<br />' +
        'サイズ: 44mm（円形）、70mm（三角形）',
      image: require('~/assets/images/event/badges.png'),
      image2x: require('~/assets/images/event/badges@2x.png')
    },
    {
      name: 'マルチクリーナー',
      price: 300,
      description:
        'メガネ、スマートフォンなどマルチな用途で使えるクリーナーです。印刷面、裏面のどちらでも拭けます。<br />' +
        '<br />' +
        'サイズ: 15 x 15cm',
      image: require('~/assets/images/event/cleaner.png'),
      image2x: require('~/assets/images/event/cleaner@2x.png')
    },
    {
      name: 'ステッカー',
      price: 200,
      description:
        'テックカンファレンスの定番、ステッカーです。キートップに貼れるサイズのキーボードステッカーも付属。',
      image: require('~/assets/images/event/stickers.png'),
      image2x: require('~/assets/images/event/stickers@2x.png')
    }
  ]

  private informationTable = require('~/assets/images/event/information-table.jpg')
  private informationTable2x = require('~/assets/images/event/information-table@2x.jpg')
  private party = require('~/assets/images/event/party.jpg')
  private party2x = require('~/assets/images/event/party@2x.jpg')
}
</script>

<style lang="scss" scoped>
.notification-container {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    display: flex;
    align-items: flex-end;
  }
}

.notification {
  padding: 6.7%;
  background-color: $white;
  border: 1px solid $vue-dark-blue;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    max-width: 60vw;
    padding: 4vw;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    max-width: 820px;
    padding: 40px;
  }
}

.note {
  margin-top: 2vw;
  font-size: 2vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-left: 1.5vw;
    font-size: 1.5vw; // できるだけ 1行に収まるように vw 指定
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    font-size: 14px;
  }
}

.event-list {
  margin-top: 5.2vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }
}

.event {
  @media screen and (max-width: $layout-breakpoint--is-small) {
    & + & {
      margin-top: 8vw;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    $event-gutter--is-small-up: 12.6%;
    $event-gutter--is-medium-up: 140px;

    width: calc((100% - #{$event-gutter--is-small-up}) / 2);

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      width: calc((100% - #{$event-gutter--is-medium-up}) / 2);
    }

    &:nth-of-type(2n) {
      margin-left: $event-gutter--is-small-up;

      @media screen and (min-width: $layout-breakpoint--is-medium-up) {
        margin-left: $event-gutter--is-medium-up;
      }
    }

    &:nth-of-type(n + 3) {
      margin-top: 40px;

      @media screen and (min-width: $layout-breakpoint--is-medium-up) {
        margin-top: 80px;
      }
    }
  }
}

.event-image {
  position: relative; // .case-image-container 表示のため

  img {
    display: block;
    width: 100%;
  }
}

.event-title {
  margin-top: 2vw;
  font-size: 4vw;
  font-weight: bold;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 14px;
    font-size: 2.5vw; // 1行に収まるように vw 指定
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin-top: 20px;
    font-size: 30px;
  }
}

.event-description {
  font-size: 4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 18px;
  }
}

.event-other-images {
  margin-top: 10vw;
  display: flex;
  width: 100%;

  img {
    display: block;
    width: 100%;
  }
}

.case-image-container {
  position: absolute;
  right: 3.84%;
  bottom: 3.84%;
  width: 32%;
}

.information-table-image {
  flex: 1 1 820px;
}

.party-image {
  margin-left: 2vw;
  flex: 1 1 340px;
}

.store {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
  }
}

.store-title {
  margin-top: 9vw;
  font-size: 4vw;
  font-weight: bold;
  line-height: 1;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 0;
    flex: 1 1 196px;
    font-size: 3vw; // 1行に収まるように vw 指定
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    max-width: 184px;
    font-size: 30px;
  }
}

.store-description {
  font-size: 4vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-left: 18px;
    flex: 1 1 626px;
    font-size: 18px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin-left: 56px;
  }
}

.product-list {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }
}

.product {
  display: flex;
  width: 100%;

  @media screen and (max-width: $layout-breakpoint--is-small) {
    & + & {
      margin-top: 6.38vw;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    $product-gutter--is-small-up: 2vw;
    $product-gutter--is-medium-up: 20px;

    display: block;
    width: calc((100% - #{$product-gutter--is-small-up} * 3) / 4);

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      width: calc((100% - #{$product-gutter--is-medium-up} * 3) / 4);
    }

    &:nth-of-type(4n),
    &:nth-of-type(4n-1),
    &:nth-of-type(4n-2) {
      margin-left: $product-gutter--is-small-up;

      @media screen and (min-width: $layout-breakpoint--is-medium-up) {
        margin-left: $product-gutter--is-medium-up;
      }
    }

    &:nth-of-type(n + 5) {
      margin-top: 40px;
    }
  }
}

.product-image {
  flex: 1 1 314px;

  img {
    display: block;
    width: 100%;
    background-color: $white;
  }
}

.product-content {
  margin-left: 3vw;
  flex: 1 1 312px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 6px;
    margin-left: 0;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    margin-top: 10px;
  }
}

.product-name,
.product-price {
  font-size: 4vw;
  font-weight: bold;
  line-height: 1.25;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 1.8vw; // できるだけ 1行に収まるように vw 指定
    line-height: 1.4;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    font-size: 18px;
  }
}

.price-unit {
  margin-right: 0.5vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-right: 1px;
  }
}

.product-description {
  margin-top: 1vw;
  font-size: 3vw;
  line-height: 1.25;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 4px;
    font-size: 1.6vw; // .product-name に合わせて vw 指定
    line-height: 1.5;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    font-size: 16px;
  }
}

.donation {
  margin-top: 12vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-top: 80px;
  }

  ul {
    list-style-position: inside;
  }

  li {
    list-style-type: disc;
    font-size: 4vw;
    line-height: 1.8;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 18px;
    }
  }
}
</style>
