<template>
  <section class="the-head-section">
    <BaseSection>
      <div class="main-visual-wrapper">
        <svg :viewBox="viewBox" :width="width" :height="height">
          <g transform="translate(-6, -6)">
            <g v-for="(row, i) in items" :key="i">
              <g v-for="(col, j) in row" :key="j">
                <g v-if="col.type === 'circle'" :transform="createTranform(col.x, col.y)">
                  <circle cx="0" cy="0" r="60" />
                </g>
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
          <p>
            Vue.js 日本ユーザーグループ 代表 川口 和也
            <a href="https://github.com/kazupon">@kazupon</a>
          </p>
        </div>
      </div>

      <div class="btn-wrapper">
        <div class="btn">
          <!-- TODO: Twitterアイコン -->
          <div class="btn__fold">
            Vue Fes Japan 公式 Twitter
          </div>
          <div class="btn__fold">
            で最新情報をチェック
          </div>
        </div>
      </div>
    </BaseSection>
  </section>
</template>

<script lang="ts">
/* eslint-disable */

import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

type PartsType = 'circle' | 'rect'

interface Parts {
  type: PartsType
  x: number
  y: number
}
let timer;
 
@Component({
  components: {
    BaseSection
  }
})
export default class TheHeadSection extends Vue {
  createTranform(x, y){
    return `translate(${x}, ${y})`
  }

  get viewBox() {
    return `0 0 ${this.width} ${this.height}`
  }
  get items(): Parts[][] {
    return this.pattern.map((line, row) =>
      Array.from(line).map((p, col) => {
        let type: PartsType = 'circle'
        switch (p) {
          case 'x':
            type = 'circle'
            break
          case '\\':
            type = 'circle'
            break
          case '/':
            type = 'circle'
            break
          case '|':
            type = 'circle'
            break
          case 'o':
            type = 'circle'
            break
        }
        return {
          type: type,
          x: 66 + col * 126,
          y: 66 + row * 126
        }
      })
    )
  }

  width = 0
  height = 384
  pattern = ['x/x/|x\\|x', '\\p|x/|/o|', 'x/\\|/ox/\\']

  adjustSvg() {
    // SSR時にはSVGの表示を確定することができないため、
    // 初期表示時にちらついてしまう
    const gap = 6;
    const grid = 120;

    //sm
    this.width = (grid + gap) * 5 - gap;
    //md
    if(window.innerWidth > 768){
      this.width = (grid + gap) * 6 - gap;
    }
    //lg
    if(window.innerWidth > 980){
      this.width = (grid + gap) * 9 - gap;
    }
  }

  mounted() {
    this.adjustSvg()

    window.addEventListener("resize", () => {
      if (timer > 0) {
        clearTimeout(timer);
      }
    
      timer = setTimeout( () => {
        this.adjustSvg()
        console.log('window resized'); //ここに処理の内容が入る
      }, 200);

    })
  }
}
</script>

<style lang="scss" scoped>

.main-visual-wrapper {
  text-align: center;
}

.the-head-section {
  background: linear-gradient(to bottom, $hiwamoegi, $asagi);
}

p {
  color: white;
}

p a {
  color: white;
}

.date-place {
  color: white;
  font-size: 4.5vw;
  margin-top: -0.6em;
}

.date-place__day {
  /* TBD */
  font-size: 2vw;
}

.btn {
  background: #34495e;
  color: white;
  text-align: center;
  display: inline-block;
  padding: 1em 2em;
  margin: 0 auto;
}

.btn-wrapper {
  text-align: center;
}

circle {
  fill: #34495e;
}

.title {
  font-size: 9vw; /* TBD */
  font-weight: 700;
  color: white;
}

svg {
  max-width: 100%;
  height: auto;
}

.btn__fold {
  display: inline-block;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .message-container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: flex-end;
  }

  .message-content {
    width: calc((5 / 7) * 100%);
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
    /* TBD */
    font-size: 16px;
  }
}
</style>
