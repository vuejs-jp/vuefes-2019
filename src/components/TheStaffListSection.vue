<template>
  <BaseSection class="the-staff-list-section">
    <template slot="heading">
      TEAM
    </template>

    <template slot="heading-copy">
      Vue Fes Japan 2019 は、 Vue.js 日本ユーザーグループのスタッフによって企画・運営されています。
    </template>

    <ul class="teammates">
      <li
        v-for="teammate in teammates"
        :key="teammate.name"
        class="teammate"
      >
        <a
          :href="teammate.link"
          target="_blank"
          rel="noopener"
        >
          <img
            :src="require(`~/assets/images/teammates/${teammate.avatar}`)"
            :alt="teammate.name"
          />
          @{{ teammate.name }}
        </a>
      </li>
    </ul>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'
import teammates from '~/assets/data/teammates.ts'

@Component({
  components: {
    BaseSection
  }
})
export default class TheCallForPresentersSection extends Vue {
  private teammates = teammates
}
</script>

<style scoped lang="scss">
// ガターの幅
$gutter-sm: 10px;
$gutter-md: 15px;
$gutter-lg: 20px;
// 1列のアイテム数
$length-sm: 4;
$length-md: 6;
$length-lg: 8;
// アイテムの幅 = ( 100% - 1列にあるガター幅の合計px ) / 1列にあるアイテム数
$width-sm: calc((100% - #{$length-sm - 1} * #{$gutter-sm}) / #{$length-sm});
$width-md: calc((100% - #{$length-md - 1} * #{$gutter-md}) / #{$length-md});
$width-lg: calc((100% - #{$length-lg - 1} * #{$gutter-lg}) / #{$length-lg});

.the-staff-list-section {
  background: linear-gradient(to right bottom, #33a6b8, #84b259);
}

.teammates {
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.teammate {
  margin-bottom: 10px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    color: #fff;
    text-decoration: none;
  }

  img {
    width: 100%;
  }
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  .teammate {
    width: $width-sm;
    margin-right: $gutter-sm;

    &:nth-of-type(#{$length-sm}n) {
      margin-right: 0;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) and (max-width: $layout-breakpoint--is-medium) {
  .teammate {
    width: $width-md;
    margin-right: $gutter-md;

    &:nth-of-type(#{$length-md}n) {
      margin-right: 0;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .teammate {
    width: $width-lg;
    margin-right: $gutter-lg;

    &:nth-of-type(#{$length-lg}n) {
      margin-right: 0;
    }
  }
}
</style>
