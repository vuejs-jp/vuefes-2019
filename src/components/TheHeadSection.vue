<template>
  <BaseSection class="the-head-section">
    <div class="main-visual-wrapper">
      <svg class="main-visual" :viewBox="viewBox" :width="width" :height="height">
        <g transform="translate(-6, -6)">
          <g v-for="(row, i) in items" :key="i">
            <g v-for="(col, j) in row" :key="j.key">
              <component :is="col.type" :item="col" :visible="visible" />
            </g>
          </g>
        </g>
      </svg>
    </div>

    <div class="title">
      Vue Fes Japan 2019
    </div>

    <div class="date-place">
      <span class="date-place__date">2019.10.12</span>
      <span class="date-place__day">SAT</span>
      <span class="date-place__place">TOC GOTANDA MESSE</span>
    </div>

    <div class="message-container">
      <div class="message-content">
        <p>
          2018 年は Vue.js にとって飛躍の年でした。
          エコシステムの成熟、関連ツールのアップデート、コミュニティの拡大と、数多くのポジティブな出来事がありました。
          また、世界各地でカンファレンスが開催され、Vue.js 日本ユーザーグループでも国内初の大規模カンファレンス
          <a
            href="https://vuefes.jp/2018/"
          >Vue Fes Japan 2018</a> を大盛況で終えることができました。
        </p>
        <p>
          今年はメジャーアップデートとなる Vue.js 3.0 のリリースが予定されており、
          世界中からますます注目が集まることでしょう。「Vue Fes Japan 2019」では、
          国内外の著名スピーカーによるセッションの他、ユーザー同士が相互に楽しめるカンファレンスを目指します。
          ぜひ、一緒に Vue.js を楽しみ、盛り上げましょう！
        </p>
        <p class="message-content__author">
          Vue.js 日本ユーザーグループ 代表 川口 和也
          <a href="https://github.com/kazupon">@kazupon</a>
        </p>
      </div>
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
  get viewBox() {
    return `0 0 ${this.width} ${this.height}`
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
              type: type,
              x: (gap + grid) / 2 + col * (gap + grid),
              y: (gap + grid) / 2 + row * (gap + grid),
              rotate: rotate,
              src: src,
              key: `${row}-${col}-${type}-${rotate}`
            }
          }
        )
    )
  }

  width = 0
  height = 384
  pattern = [
    ['-⧄|⧅⧄⧅⮽⧄o', 'o⮽⧄◢-⧄⧅◥|', '⧅◣⧅⧄⧅|⧄⧅⧄'],
    ['1⧄|⧅o⧅⮽⧄◥', 'o⮽⧄◢⧄-⧅2|', '◥◣o⧄⧅|⧄⧅⧄'],
    ['1⧄|3◤⧅o⧄◥', '-⮽■◣⧄4⧅2|', '⧅⧅o⧄⧅◤⧄■⧄'],
    ['◣⧄⧅3◤⧅o⧄6', '-⮽1⧅⧄4⧅|⧄', '⧅◣o⧄2-⧄⧄⧄'],
    ['5⧄◣3◤⧅o⧄6', '-⮽1⧅⧄4⮽|⧄', '⧄◣o⧅2-⧄⧄⧄'],
    ['o⧄⧅3⧄⧅o⧄6', '-⮽1⧅⧄4⧄|⧄', '⧄◣o⧄2⧅⧄◥⮽'],
    ['3⧄4⧅⧄⧅⮽5o', 'o⮽⧄◤2⧄6◥|', '⧅◢⧅1⧅⧅⧄-⧄']
  ]
  patternIndex = 0
  t = 0
  visible = true
  windowMode: WindowMode = 'sm'

  adjustSvg(mode: WindowMode) {
    // SSR時にはSVGの表示を確定することができないため、
    // 初期表示時にちらついてしまう
    this.t = 0

    this.width = (grid + gap) * 5 - gap
    if (mode === 'md') {
      this.width = (grid + gap) * 6 - gap
    }
    if (mode === 'lg') {
      this.width = (grid + gap) * 9 - gap
    }
  }

  mounted() {
    this.windowMode = getWindowMode()
    this.adjustSvg(this.windowMode)

    setInterval(() => {
      this.t++
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
.the-head-section {
  background: linear-gradient(to bottom right, $hiwamoegi, $asagi);
  padding: 100px 7.8% 60px;
}

.main-visual-wrapper {
  text-align: center;
}

.message-content {
  color: white;
}

.message-content a {
  color: white;
}

.date-place {
  color: white;
  font-size: 4.1vw;
  margin-top: -0.6em;
}

.date-place__day {
  font-size: 2.3vw;
}

.message-content__author {
  text-align: right;
}

.title {
  font-size: 8.3vw;
  font-weight: 700;
  color: white;
}

svg.main-visual {
  max-width: 100%;
  height: auto;
}

.message-container {
  margin: 0 auto 60px auto;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .the-head-section {
    padding: 120px 70px 80px;
  }

  .message-container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto 60px auto;
    justify-content: flex-end;
  }

  .message-content {
    width: 65%;
  }

  .title {
    font-size: 64px;
  }

  .date-place {
    color: white;
    font-size: 32px;
    margin-top: -0.6em;
  }

  .date-place__day {
    font-size: 18px;
  }

  .btn {
    font-size: 24px;
    max-width: 60%;
  }
}
</style>
