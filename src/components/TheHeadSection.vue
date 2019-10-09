<template>
  <BaseSection class="the-head-section">
    <div class="main-visual-wrapper">
      <no-ssr>
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
                <component :is="item.type" :item="item" />
              </g>
            </transition-group>
          </g>
        </svg>
      </no-ssr>
    </div>

    <h1 class="title">
      Vue Fes Japan 2019
    </h1>

    <div class="date-place">
      <time datetime="2019-10-12">2019.10.12</time>
      <span class="date-place__day">SAT</span>
      <span class="date-place__place">TOC GOTANDA MESSE</span>
    </div>

    <div class="notification">
      <h3>
        Vue Fes Japan 2019 開催中止のお知らせ
      </h3>

      <!-- prettier-ignore -->
      <p>
        台風の接近に伴う気象状況ならびに交通機関の運行状況などを踏まえ、参加者の皆様ならびにスタッフの安全を第一に検討した結果、Vue Fes Japan 2019 は開催不可能と判断いたしました。
      </p>

      <!-- prettier-ignore -->
      <p>
        つきましては、チケットの代金は全額返金いたします。具体的な方法やスケジュールについては 10/13（日）以降に本サイト及び <a href="https://twitter.com/vuefes" target="_blank" rel="noopener noreferrer">公式 Twitter</a> でアナウンスいたします。
      </p>

      <!-- prettier-ignore -->
      <p>
        またその他につきましても、最新の情報を <a href="https://twitter.com/vuefes" target="_blank" rel="noopener noreferrer">公式 Twitter</a> でアナウンスいたします。
      </p>

      <p>
        開催直前のご案内となりましたことを、心より深くお詫び申し上げます。ご理解とご協力のほど何卒よろしくお願い申し上げます。
      </p>
    </div>

    <LinkToTwitter />
  </BaseSection>
</template>

<script lang="ts">
import { setInterval } from 'timers'
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'
import HeadCircle from '~/components/HeadCircle.vue'
import HeadHorizontal from '~/components/HeadHorizontal.vue'
import HeadSquare from '~/components/HeadSquare.vue'
import HeadSlash from '~/components/HeadSlash.vue'
import HeadTriangle from '~/components/HeadTriangle.vue'
import HeadCross from '~/components/HeadCross.vue'
import HeadPhoto from '~/components/HeadPhoto.vue'
import LinkToTwitter from '~/components/LinkToTwitter.vue'

type PartsType =
  | 'head-circle'
  | 'head-horizontal'
  | 'head-square'
  | 'head-triangle'
  | 'head-cross'
  | 'head-photo'
  | 'head-slash'

const gap = 12
const grid = 120

export interface Parts {
  type: PartsType
  x: number
  y: number
  rotate: number
  src: string
  key: string
}

export const partsLeaveTime = 0.2
export const partsCreateTime = 0.6

let timer

type WindowMode = 'sm' | 'md' | 'lg'

/**
 * 現在の画面サイズ名を返す
 */
function getWindowMode(): WindowMode {
  if (window.innerWidth > 980) {
    return 'lg'
  }
  if (window.innerWidth > 768) {
    return 'md'
  }
  return 'sm'
}

@Component({
  components: {
    BaseSection,
    HeadCircle,
    HeadHorizontal,
    HeadSquare,
    HeadSlash,
    HeadTriangle,
    HeadCross,
    HeadPhoto,
    LinkToTwitter
  }
})
export default class TheHeadSection extends Vue {
  get viewBox(): string {
    return `0 0 ${this.width} ${this.height}`
  }

  get itemsFlatten(): Parts[] {
    if (!this.visible) {
      return []
    }
    return Array.prototype.concat.apply([], this.items)
  }

  get items(): Parts[][] {
    return this.pattern[this.patternIndex].map((line, row) =>
      Array.from(line)
        .slice(0, this.t)
        .map(
          (p, col): Parts => {
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
              x: (gap + grid) / 2 + col * (gap + grid),
              y: (gap + grid) / 2 + row * (gap + grid),
              rotate,
              src,
              key: `${row}-${col}-${type}-${rotate}`
            }
          }
        )
    )
  }

  private width = 0
  private height = 384

  private pattern = [
    ['-⧄|⧅⧄⧅⮽⧄o', 'o⮽⧄◢-⧄⧅◥|', '⧅◣⧅⧄⧅|⧄⧅⧄'],
    ['1⧄|⧅o⧅⮽⧄◥', 'o⮽⧄◢⧄-⧅2|', '◥◣o⧄⧅|⧄⧅⧄'],
    ['1⧄|3◤⧅o⧄◥', '-⮽■◣⧄4⧅2|', '⧅⧅o⧄⧅◤⧄■⧄'],
    ['◣⧄⧅3◤⧅o⧄6', '-⮽1⧅⧄4⧅|⧄', '⧅◣o⧄2-⧄⧄⧄'],
    ['5⧄◣3◤⧅o⧄6', '-⮽1⧅⧄4⮽|⧄', '⧄◣o⧅2-⧄⧄⧄'],
    ['o⧄⧅3⧄⧅o⧄6', '-⮽1⧅⧄4⧄|⧄', '⧄◣o⧄2⧅⧄◥⮽'],
    ['3⧄4⧅⧄⧅⮽5o', 'o⮽⧄◤2⧄6◥|', '⧅◢⧅1⧅⧅⧄-⧄']
  ]

  private patternIndex = 0
  private t = 0
  private tMax = 0
  private visible = true
  private windowMode: WindowMode = 'sm'

  adjustSvg(mode: WindowMode) {
    // SSR 時には SVG の表示を確定することができないため、
    // 初期表示時にちらついてしまう
    this.t = 0

    this.width = (grid + gap) * 5 - gap
    this.tMax = 15

    if (mode === 'md') {
      this.width = (grid + gap) * 6 - gap
      this.tMax = 18
    }
    if (mode === 'lg') {
      this.width = (grid + gap) * 9 - gap
      this.tMax = 27
    }
  }

  leave(el, done) {
    setTimeout(() => {
      done()
    }, partsLeaveTime * 1000)
  }

  enter(el, done) {
    setTimeout(() => {
      done()
    }, partsCreateTime * 1000)
  }

  mounted() {
    this.windowMode = getWindowMode()
    this.adjustSvg(this.windowMode)
    setInterval(() => {
      if (this.t < this.tMax) {
        this.t++
      }
    }, 90)

    setInterval(() => {
      this.patternIndex = (this.patternIndex + 1) % this.pattern.length
    }, 2000)

    window.addEventListener('resize', () => {
      if (timer > 0) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        // 画面サイズ名が変更になったときのみリドローをかける
        const preWindowMode = this.windowMode
        this.windowMode = getWindowMode()

        if (preWindowMode !== this.windowMode) {
          this.visible = false
          setTimeout(() => {
            this.visible = true
            this.adjustSvg(this.windowMode)
          }, 400)
        }
      }, 100)
    })
  }
}
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
      #{$layout-column-width--is-small-up} + #{$layout-gutter-width--is-small-up}
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
