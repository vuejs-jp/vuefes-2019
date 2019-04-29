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
interface Teammate {
  name: string
  link: string
  avatar: string
}
@Component({
  components: {
    BaseSection
  }
})
export default class TheCallForPresentersSection extends Vue {
  teammates: Teammate[] = [
    {
      name: 'kazu_pon',
      link: 'https://twitter.com/kazu_pon',
      avatar: 'kazu_pon.png'
    },
    {
      name: '448jp',
      link: 'https://twitter.com/448jp',
      avatar: '448jp.jpg'
    },
    {
      name: 'kawakami0717',
      link: 'https://twitter.com/kawakami0717',
      avatar: 'kawakami0717.png'
    },
    {
      name: 'kazuyukimiyake',
      link: 'https://twitter.com/kazuyukimiyake',
      avatar: 'kazuyukimiyake.jpg'
    },
    {
      name: 'inouetakuya',
      link: 'https://twitter.com/inouetakuya',
      avatar: 'inouetakuya.jpg'
    },
    {
      name: 'c5meru',
      link: 'https://twitter.com/c5meru',
      avatar: 'c5meru.jpg'
    },
    {
      name: 'hashedrock',
      link: 'https://twitter.com/hashedrock',
      avatar: 'hashedrock.jpg'
    },
    {
      name: 'shika358',
      link: 'https://twitter.com/shika358',
      avatar: 'shika358.jpg'
    },
    {
      name: 'potato4d',
      link: 'https://twitter.com/potato4d',
      avatar: 'potato4d.jpg'
    },
    {
      name: 'positiveflat',
      link: 'https://twitter.com/positiveflat',
      avatar: 'positiveflat.png'
    },
    {
      name: 'andoshin11',
      link: 'https://twitter.com/andoshin11',
      avatar: 'andoshin11.jpg'
    },
    {
      name: 'yakiniku040220',
      link: 'https://twitter.com/yakiniku040220',
      avatar: 'yakiniku040220.jpg'
    },
    {
      name: 'tsuchikazu',
      link: 'https://twitter.com/tsuchikazu',
      avatar: 'tsuchikazu.png'
    },
    {
      name: '__syumai',
      link: 'https://twitter.com/__syumai',
      avatar: '__syumai.png'
    },
    {
      name: '_yinm_',
      link: 'https://twitter.com/_yinm_',
      avatar: 'yinm.png'
    },
    {
      name: 'ryamakuchi',
      link: 'https://twitter.com/ryamakuchi',
      avatar: 'ryamakuchi.png'
    },
    {
      name: 'treby006',
      link: 'https://twitter.com/treby006',
      avatar: 'treby006.png'
    },
    {
      name: 'massie',
      link: 'https://twitter.com/massie',
      avatar: 'massie.png'
    },
    {
      name: 'nicedchy',
      link: 'https://twitter.com/nicedchy',
      avatar: 'nicedchy.png'
    },
    {
      name: 'lenomick',
      link: 'https://twitter.com/lenomick',
      avatar: 'lenomick.png'
    },
    {
      name: 'naokie',
      link: 'https://twitter.com/naokie',
      avatar: 'naokie.png'
    },
    {
      name: 'takumisatojpn',
      link: 'https://twitter.com/takumisatojpn',
      avatar: 'takumisatojpn.png'
    },
    {
      name: 'yotaszk',
      link: 'https://twitter.com/yotaszk',
      avatar: 'yotaszk.png'
    },
    {
      name: 'mtmtkzm',
      link: 'https://twitter.com/mtmtkzm',
      avatar: 'mtmtkzm.jpg'
    },
    {
      name: 'hisako135',
      link: 'https://note.mu/hisahisa135',
      avatar: 'hisako135.jpg'
    },
    {
      name: 'aytdm251',
      link: 'https://twitter.com/aytdm251',
      avatar: 'aytdm251.jpg'
    }
  ]
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
    font-size: 1.3vw;
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

    a {
      font-size: 10px;
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

    a {
      font-size: 10px;
    }
  }
}
</style>
