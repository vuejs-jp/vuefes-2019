<template>
  <BaseSection class="the-head-section">
    <div class="main-visual-wrapper">
      <svg class="main-visual" :viewBox="viewBox" :width="width" :height="height">
        <g transform="translate(-6, -6)">
          <g v-for="(row, i) in items" :key="i">
            <g v-for="(col, j) in row" :key="j">
              <component :is="col.type" :item="col" />
            </g>
          </g>
        </g>
      </svg>
    </div>

    <h1 class="title">
      Vue Fes Japan 2019
    </h1>

    <div class="date-place">
      <time datetime="2019-10-12">2019.10.12</time>
      <span class="date-place__day">SAT</span>
      <span class="date-place__place">TOC GOTANDA MESSE</span>
    </div>

    <div class="message">
      <p>
        2018 年は Vue.js にとって飛躍の年でした。
        エコシステムの成熟、関連ツールのアップデート、コミュニティの拡大と、数多くのポジティブな出来事がありました。
        また、世界各地でカンファレンスが開催され、Vue.js 日本ユーザーグループでも国内初の大規模カンファレンス
        <a
          class="link"
          href="https://vuefes.jp/2018/"
          target="_blank"
          rel="noopener"
        >
          Vue Fes Japan 2018
        </a>
        を大盛況で終えることができました。
      </p>

      <p>
        今年はメジャーアップデートとなる Vue.js 3.0 のリリースが予定されており、
        世界中からますます注目が集まることでしょう。「Vue Fes Japan 2019」では、
        国内外の著名スピーカーによるセッションの他、ユーザー同士が相互に楽しめるカンファレンスを目指します。
        ぜひ、一緒に Vue.js を楽しみ、盛り上げましょう！
      </p>

      <p class="message__author">
        Vue.js 日本ユーザーグループ 代表 川口 和也
        <a 
          class="link"
          href="https://github.com/kazupon"
          target="_blank"
          rel="noopener"
        >
          @kazupon
        </a>
      </p>
    </div>

    <LinkToTwitter />
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'
import LinkToTwitter from '~/components/LinkToTwitter.vue'
import HeadCircle from '~/components/HeadCircle.vue'
import HeadHorizontal from '~/components/HeadHorizontal.vue'
import HeadSquare from '~/components/HeadSquare.vue'
import HeadTriangle from '~/components/HeadTriangle.vue'
import HeadCross from '~/components/HeadCross.vue'

type PartsType =
  | 'head-circle'
  | 'head-horizontal'
  | 'head-square'
  | 'head-triangle'
  | 'head-cross'

const gap = 12
const grid = 120

export interface Parts {
  type: PartsType
  x: number
  y: number
  rotate: number
}
let timer

@Component({
  components: {
    BaseSection,
    LinkToTwitter,
    HeadCircle,
    HeadHorizontal,
    HeadSquare,
    HeadTriangle,
    HeadCross
  }
})
export default class TheHeadSection extends Vue {
  get viewBox() {
    return `0 0 ${this.width} ${this.height}`
  }
  get items(): Parts[][] {
    return this.pattern.map((line, row) =>
      Array.from(line).map((p, col) => {
        let type: PartsType = 'head-circle'
        let rotate = 0
        switch (p) {
          case 'x':
            type = 'head-cross'
            break
          case '\\':
            type = 'head-square'
            rotate = 90
            break
          case '/':
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
          case '_':
            type = 'head-triangle'
            break
          case '^':
            type = 'head-triangle'
            rotate = 270
            break
          case 'L':
            type = 'head-triangle'
            rotate = 90
            break
        }
        return {
          type: type,
          x: (gap + grid) / 2 + col * (gap + grid),
          y: (gap + grid) / 2 + row * (gap + grid),
          rotate: rotate
        }
      })
    )
  }

  width = 0
  height = 384
  pattern = ['-/|\\/\\x/o', 'px/_-/\\^|', '\\L\\/\\|/\\/']

  adjustSvg() {
    // SSR時にはSVGの表示を確定することができないため、
    // 初期表示時にちらついてしまう

    // sm
    this.width = (grid + gap) * 5 - gap
    // md
    if (window.innerWidth > 768) {
      this.width = (grid + gap) * 6 - gap
    }
    // lg
    if (window.innerWidth > 980) {
      this.width = (grid + gap) * 9 - gap
    }
  }

  mounted() {
    this.adjustSvg()

    window.addEventListener('resize', () => {
      if (timer > 0) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        this.adjustSvg()
      }, 200)
    })
  }
}
</script>

<style lang="scss" scoped>
.the-head-section {
  color: $primary-text-color--invert;
  background: linear-gradient(to right bottom, $hiwamoegi, $asagi);
}

.main-visual-wrapper {
  text-align: center;
  margin-bottom: 40px;
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
  margin-bottom: 60px;

  time,
  &__place {
    font-size: 4.1vw;
  }

  &__day {
    font-size: 2.3vw;
    margin: 0 15px 0 5px;
  }
}

.message {
  margin-bottom: 40px;

  &__author {
    text-align: right;
  }

  .link {
    color: $primary-text-color--invert;
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
  .title {
    font-size: 64px;
  }

  .date-place {
    time,
    &__place {
      font-size: 32px;
    }

    &__day {
      font-size: 18px;
    }
  }

  .message {
    width: 65%;
    margin: 0 0 60px auto;
  }
}
</style>
