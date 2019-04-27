<template>
  <section class="the-head-section">
    <nuxt-link to="/">
      <img class="logo-vfj logo-vfj--fixed" src="~/assets/images/logo_vfj.svg" />
    </nuxt-link>

    <BaseSection class="base-section--head">
      <nuxt-link to="/">
        <img class="logo-vfj logo-vfj--relative" src="~/assets/images/logo_vfj.svg" />
      </nuxt-link>
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

      <div class="btn-wrapper">
        <a href="https://twitter.com/vuefes">
          <div class="btn">
            <img src="~/assets/images/icon-twitter-inside-btn.svg" />
            <div class="btn__text">
              <div class="btn__fold">
                Vue Fes Japan 公式 Twitter
              </div>
              <div class="btn__fold">
                で最新情報をチェック
              </div>
            </div>
          </div>
        </a>
      </div>
    </BaseSection>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'
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
.main-visual-wrapper {
  text-align: center;
}

.base-section.base-section--head {
  padding: 0 7.8% 60px 7.8%;
}

.the-head-section {
  background: linear-gradient(to right, $hiwamoegi, $asagi);
}

.message-content {
  color: white;
}

.message-content p {
  line-height: 1.8em;
  font-size: 4vw;
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

.btn {
  background: $vue-dark-blue;
  font-size: 4vw;
  color: white;
  display: flex;
  padding: 1em;
  margin: 20px auto 0 auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 3px solid $vue-dark-blue;
  cursor: pointer;
}

.btn:hover {
  background: white;
  border: 3px solid $vue-dark-blue;
  color: $vue-dark-blue;
}

.btn__text {
  flex: 1;
}

.btn-wrapper {
  text-align: center;
}

.logo-vfj--fixed {
  display: none;
}

.logo-vfj--relative {
  margin-top: 30px;
}

circle {
  fill: $vue-dark-blue;
}

.title {
  font-size: 8.3vw;
  font-weight: 700;
  color: white;
}

svg.main-visual {
  max-width: 100%;
  height: auto;
  margin-top: 30px;
}

.btn__fold {
  display: inline-block;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-section.base-section--head {
    padding: 0 70px 80px 70px;
  }

  .message-container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: flex-end;
  }

  .message-content {
    width: 65%;
  }

  .message-content p {
    font-size: 18px;
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

  .logo-vfj--fixed {
    display: block;
    position: fixed;
    top: 30px;
    left: 30px;
  }

  .logo-vfj--relative {
    display: none;
  }

  svg.main-visual {
    margin-top: 120px;
  }

  .btn {
    font-size: 24px;
    max-width: 60%;
  }
}
</style>
