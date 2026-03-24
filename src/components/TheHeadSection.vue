<template>
  <BaseSection class="the-head-section">
    <div class="main-visual-wrapper">
      <ClientOnly>
        <svg
          class="main-visual"
          :viewBox="viewBox"
          :width="width"
          :height="height"
        >
          <g transform="translate(-6, -6)">
            <transition-group
              tag="g"
              mode="out-in"
              @enter="enter"
              @leave="leave"
            >
              <g v-for="item in itemsFlatten" :key="item.key">
                <component :is="item.component" :item="item" />
              </g>
            </transition-group>
          </g>
        </svg>
      </ClientOnly>
    </div>

    <h1 class="title">Vue Fes Japan 2019</h1>

    <div class="date-place">
      <time datetime="2019-10-12">2019.10.12</time>
      <span class="date-place__day">SAT</span>
      <span class="date-place__place">TOC GOTANDA MESSE</span>
    </div>

    <div class="notification">
      <h3>チケット返金について追加のお知らせ</h3>

      <!-- prettier-ignore -->
      <p>
        2019/11/13 現在、販売元である Universe 側のトラブルにより、一部の方々に対して返金が完了していないことが判明いたしました。これまでの経緯は <a href="https://note.mu/ryamakuchi/n/ncdd3950d7580" target="_blank" rel="noopener noreferrer">note の記事</a> にまとめています。お待たせして申し訳ございませんが、現在対応中とのことです。返金されるまで今しばらくお待ちくださいますようお願い申し上げます。
      </p>

      <!-- prettier-ignore -->
      <p>
        2019年11月16日 Vue.js 日本ユーザーグループ 代表 川口 和也
      </p>
    </div>

    <div class="notification">
      <h3>Vue Fes Japan 2019 チケット返金のお知らせ</h3>

      <!-- prettier-ignore -->
      <p>
        2019年10月12日（土）TOC 五反田メッセにて開催を予定しておりました「Vue Fes Japan 2019」は、台風19号の接近に伴い開催中止を決定しました。皆様には多大なご迷惑をおかけしますことを、心より深くお詫び申し上げます。
      </p>

      <!-- prettier-ignore -->
      <p>
        チケットをご購入いただいた皆様には、チケット代金を全額返金させていただきます。払い戻し処理は、10月12日（土）中に実施を予定しております。処理が完了後、決済プラットフォームの Universe からチケット購入時に入力したメールアドレスにキャンセルの旨を記したメールが送信されます。実際のご返金タイミングは利用されたクレジットカード会社様により異なります。返金確認は、クレジットカードの明細にてご確認いただけます。返金日については、カード会社様にお問い合わせいただくようお願いいたします。
      </p>

      <!-- prettier-ignore -->
      <p>
        返金に際して、チケットご購入者側でのお手続きは不要です。
      </p>

      <!-- prettier-ignore -->
      <p>
        なお、個人間でのチケット売買や譲渡に関しては、主催者側は責任を負いかねますのでご注意ください。また、Vue Fes Japan 2019 参加に伴って参加者ご自身が手配された交通機関・宿泊施設などの保証は致しかねますのであらかじめご了承ください。
      </p>

      <!-- prettier-ignore -->
      <p>
        2019年10月11日 Vue.js 日本ユーザーグループ 代表 川口 和也
      </p>
    </div>

    <div class="notification">
      <h3>Vue Fes Japan 2019 開催中止のお知らせ</h3>

      <!-- prettier-ignore -->
      <p>
        2019年10月12日（土）TOC 五反田メッセにて開催を予定しておりました「Vue Fes Japan 2019」は、台風19号の接近に伴い、参加者、スポンサー、スピーカー、スタッフ、すべての人の安全を最優先に考慮し、また JR 東日本の他、主要交通機関が計画運休を発表したことを受け、開催中止を決定しました。
      </p>

      <p>
        開催を楽しみにお待ちいただいた皆様には多大なご迷惑をおかけしますことを、心より深くお詫び申し上げます。また中止の決定が開催前日となってしまったことにより、特に遠方からお越しいただく予定だった皆様には多大なご負担をおかけしましたことを重ねてお詫び申し上げます。
      </p>

      <!-- prettier-ignore -->
      <p>
        ここで、今回の中止決定の経緯について改めてご説明させていただきます。主催者である我々 Vue.js 日本ユーザーグループは有志による非営利のコミュニティであり、今回のような大規模カンファレンスを開催するための費用は、スポンサー様による協賛金と、ご参加いただく皆様によるチケット売上のみに依存しております。
      </p>

      <!-- prettier-ignore -->
      <p>
        そこで万が一の開催中止に備えて、Vue Fes Japan 2019 では <a href="https://note.mu/448jp/n/n36cbb8d2e91f" target="_blank" rel="noopener noreferrer">先日の発表</a> のとおり興行中止保険に加入しています。具体的には、開催当日に開催地より半径 100km 以内に開催に影響を与える自然現象（今回の場合は台風にあたります）がある場合、または開催地への交通機関が運休などで機能しなくなった場合、この 2つの条件のいずれかを満たした場合に一部費用を補償する契約内容です。
      </p>

      <!-- prettier-ignore -->
      <p>
        同契約では、最終的に費用が補償されるかどうかの判断は開催当日になされることになります。つまり、計画運休の発表や台風の予想進路が確定的であっても、仮に当日に運休が取り消しになり交通機関が通常通り運行され、台風が開催に影響を与えないと判断された場合は、補償が行われない可能性があります。我々 Vue.js 日本ユーザーグループには、補償が行われなかった場合に多額の金銭的損失を補填できるだけの余力は残念ながらありません。このリスクを最小限に抑えるためには、開催中止のタイミングを当日早朝、または前日夜にすることが最善と考え先日の発表に至りました。
      </p>

      <p>
        しかし連日連夜スタッフ内でも協議を重ねた結果、金銭面などのリスクよりも、最終的にはすべての人の安全が何よりも最優先に確保されるべきと考え、当初の予定よりも早く開催中止を決定することになりました。
      </p>

      <!-- prettier-ignore -->
      <p>
        チケット代金の返金方法やスケジュールについては、決定次第、本 Web サイトおよび <a href="https://twitter.com/vuefes" target="_blank" rel="noopener noreferrer">公式 Twitter</a> でお知らせいたします。また、興行中止保険が適用となった場合、保険の規約上、Vue.js 日本ユーザーグループとして Vue Fes Japan 2019 の代替イベントを企画・開催することが禁止されております。こちらも併せてお知らせさせていただきます。
      </p>

      <p>
        改めて、開催を楽しみにしてくださった皆様に多大なご迷惑、ご心配をおかけしましたことを心より深くお詫び申し上げます。何卒、ご理解いただけますようよろしくお願い申し上げます。
      </p>

      <!-- prettier-ignore -->
      <p>
        2019年10月11日 Vue.js 日本ユーザーグループ 代表 川口 和也
      </p>
    </div>

    <LinkToTwitter />
  </BaseSection>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import HeadCircle from '~/components/HeadCircle.vue'
import HeadCross from '~/components/HeadCross.vue'
import HeadHorizontal from '~/components/HeadHorizontal.vue'
import HeadPhoto from '~/components/HeadPhoto.vue'
import HeadSlash from '~/components/HeadSlash.vue'
import HeadSquare from '~/components/HeadSquare.vue'
import HeadTriangle from '~/components/HeadTriangle.vue'
import {
  gap,
  grid,
  getWindowMode,
  partsCreateTime,
  partsLeaveTime,
  type Parts,
  type PartsType,
  type WindowMode,
} from '~/lib/head-visual'

const height = 384
const pattern = [
  ['-⧄|⧅⧄⧅⮽⧄o', 'o⮽⧄◢-⧄⧅◥|', '⧅◣⧅⧄⧅|⧄⧅⧄'],
  ['1⧄|⧅o⧅⮽⧄◥', 'o⮽⧄◢⧄-⧅2|', '◥◣o⧄⧅|⧄⧅⧄'],
  ['1⧄|3◤⧅o⧄◥', '-⮽■◣⧄4⧅2|', '⧅⧅o⧄⧅◤⧄■⧄'],
  ['◣⧄⧅3◤⧅o⧄6', '-⮽1⧅⧄4⧅|⧄', '⧅◣o⧄2-⧄⧄⧄'],
  ['5⧄◣3◤⧅o⧄6', '-⮽1⧅⧄4⮽|⧄', '⧄◣o⧅2-⧄⧄⧄'],
  ['o⧄⧅3⧄⧅o⧄6', '-⮽1⧅⧄4⧄|⧄', '⧄◣o⧄2⧅⧄◥⮽'],
  ['3⧄4⧅⧄⧅⮽5o', 'o⮽⧄◤2⧄6◥|', '⧅◢⧅1⧅⧅⧄-⧄'],
] as const

const width = ref(0)
const patternIndex = ref(0)
const t = ref(0)
const tMax = ref(0)
const visible = ref(true)
const windowMode = ref<WindowMode>('sm')

let drawTimer: number | undefined
let patternTimer: number | undefined
let resizeTimer: number | undefined

interface RenderableParts extends Parts {
  component: Component
}

const partsComponents: Record<PartsType, Component> = {
  'head-circle': HeadCircle,
  'head-horizontal': HeadHorizontal,
  'head-square': HeadSquare,
  'head-triangle': HeadTriangle,
  'head-cross': HeadCross,
  'head-photo': HeadPhoto,
  'head-slash': HeadSlash,
}

const viewBox = computed(() => `0 0 ${width.value} ${height}`)
const items = computed<RenderableParts[][]>(() =>
  pattern[patternIndex.value].map((line, row) =>
    Array.from(line)
      .slice(0, t.value)
      .map((p, col): RenderableParts => {
        let type: PartsType = 'head-circle'
        let rotate = 0
        let src = ''

        switch (p) {
          case '⮽':
            type = 'head-cross'
            break
          case '⧅':
            type = 'head-slash'
            rotate = 90
            break
          case '⧄':
            type = 'head-slash'
            break
          case '■':
            type = 'head-square'
            break
          case '|':
            type = 'head-horizontal'
            rotate = 90
            break
          case 'o':
            type = 'head-circle'
            break
          case '-':
            type = 'head-horizontal'
            break
          case '◢':
            type = 'head-triangle'
            break
          case '◥':
            type = 'head-triangle'
            rotate = 270
            break
          case '◣':
            type = 'head-triangle'
            rotate = 90
            break
          case '◤':
            type = 'head-triangle'
            rotate = 180
            break
          case '1':
            type = 'head-photo'
            src = 'image01.png'
            break
          case '2':
            type = 'head-photo'
            src = 'image02.png'
            break
          case '3':
            type = 'head-photo'
            src = 'image03.png'
            break
          case '4':
            type = 'head-photo'
            src = 'image04.png'
            break
          case '5':
            type = 'head-photo'
            src = 'image05.png'
            break
          case '6':
            type = 'head-photo'
            src = 'image06.png'
            break
        }

        return {
          type,
          component: partsComponents[type],
          x: (gap + grid) / 2 + col * (gap + grid),
          y: (gap + grid) / 2 + row * (gap + grid),
          rotate,
          src,
          key: `${row}-${col}-${type}-${rotate}`,
        }
      }),
  ),
)

const itemsFlatten = computed(() => (visible.value ? items.value.flat() : []))

function adjustSvg(mode: WindowMode) {
  t.value = 0
  width.value = (grid + gap) * 5 - gap
  tMax.value = 15

  if (mode === 'md') {
    width.value = (grid + gap) * 6 - gap
    tMax.value = 18
  }

  if (mode === 'lg') {
    width.value = (grid + gap) * 9 - gap
    tMax.value = 27
  }
}

function leave(_element: Element, done: () => void) {
  window.setTimeout(done, partsLeaveTime * 1000)
}

function enter(_element: Element, done: () => void) {
  window.setTimeout(done, partsCreateTime * 1000)
}

function handleResize() {
  if (resizeTimer) {
    window.clearTimeout(resizeTimer)
  }

  resizeTimer = window.setTimeout(() => {
    const previousWindowMode = windowMode.value
    windowMode.value = getWindowMode(window.innerWidth)

    if (previousWindowMode !== windowMode.value) {
      visible.value = false

      window.setTimeout(() => {
        visible.value = true
        adjustSvg(windowMode.value)
      }, 400)
    }
  }, 100)
}

onMounted(() => {
  windowMode.value = getWindowMode(window.innerWidth)
  adjustSvg(windowMode.value)

  drawTimer = window.setInterval(() => {
    if (t.value < tMax.value) {
      t.value += 1
    }
  }, 90)

  patternTimer = window.setInterval(() => {
    patternIndex.value = (patternIndex.value + 1) % pattern.length
  }, 2000)

  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  if (drawTimer) {
    window.clearInterval(drawTimer)
  }
  if (patternTimer) {
    window.clearInterval(patternTimer)
  }
  if (resizeTimer) {
    window.clearTimeout(resizeTimer)
  }

  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
$svg-gap: 12px;
$svg-grid: 120px;

.the-head-section {
  color: $primary-text-color--invert;
  background: linear-gradient(to right bottom, $hiwamoegi, $asagi);
}

.main-visual-wrapper {
  text-align: center;
  margin: 1vw 0 5vw;
  // grid の 1辺 x 3 + gap x 2
  height: calc(
    ((100vw - 7.8vw * 2 - #{$svg-gap} * 4) / 5) * 3 + #{$svg-gap} * 2
  );
  line-height: 0;
}

.title {
  font-size: 8.3vw;
  font-weight: bold;
  line-height: 1;
}

.date-place {
  color: $primary-text-color--invert;
  font-size: 0;
  margin-bottom: 7.8vw;

  time,
  &__place {
    font-size: 4.1vw;
  }

  &__day {
    font-size: 2.3vw;
    margin: 0 15px 0 5px;
  }
}

.notification {
  color: $primary-text-color;
  background-color: $white;
  padding: 5vw;
  margin-bottom: 8vw;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: 0 auto 60px;
    padding: calc(
      #{$layout-column-width--is-small-up} +
        #{$layout-gutter-width--is-small-up}
    );
    // prettier-ignore
    width: calc(
      #{$layout-column-width--is-small-up} * 16 + #{$layout-gutter-width--is-small-up} * 15
    );
    min-width: $content-min-width--is-small-up;
  }

  h3 {
    font-size: 5vw;
    font-weight: bold;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 30px;
    }
  }

  p {
    margin-top: 2em;
  }
}

circle {
  fill: $vue-dark-blue;
}

svg.main-visual {
  max-width: 100%;
  height: auto;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .main-visual-wrapper {
    margin: 0 0 40px;
    height: calc(#{$svg-grid} * 3 + #{$svg-gap} * 2);

    @media screen and (max-width: 860px) {
      // grid の 1辺が 120px 未満のときの調整
      height: calc(
        ((100vw - 70px * 2 - #{$svg-gap} * 5) / 6) * 3 + #{$svg-gap} * 2
      );
    }

    @media screen and (min-width: $layout-breakpoint--is-medium-up) and (max-width: 1316px) {
      // grid の 1辺が 120px 未満のときの調整
      height: calc(
        ((100vw - 70px * 2 - #{$svg-gap} * 8) / 9) * 3 + #{$svg-gap} * 2
      );
    }
  }

  .title {
    font-size: 64px;
  }

  .date-place {
    margin-bottom: 60px;

    time,
    &__place {
      font-size: 32px;
    }

    &__day {
      font-size: 18px;
    }
  }
}
</style>
