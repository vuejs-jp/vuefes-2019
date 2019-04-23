<template>
  <BaseSection class="the-staff-list-section">
    <template slot="heading">
      TEAM
      <p>Vue Fes Japan 2019 は、 Vue.js 日本ユーザーグループのスタッフによって企画・運営されています。</p>
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
            :src="require(`~/assets/images/teammates/${teammate.imgSrc}`)"
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

const teammates = [
  {
    name: 'kazu_pon',
    link: 'https://twitter.com/kazu_pon',
    imgSrc: 'kazu_pon.png'
  },
  {
    name: '448jp',
    link: 'https://twitter.com/448jp',
    imgSrc: '448jp.jpg'
  },
  {
    name: 'kawakami0717',
    link: 'https://twitter.com/kawakami0717',
    imgSrc: 'kawakami0717.png'
  },
  {
    name: 'kazuyukimiyake',
    link: 'https://twitter.com/kazuyukimiyake',
    imgSrc: 'kazuyukimiyake.jpg'
  },
  {
    name: 'inouetakuya',
    link: 'https://twitter.com/inouetakuya',
    imgSrc: 'inouetakuya.jpg'
  },
  {
    name: 'c5meru',
    link: 'https://twitter.com/c5meru',
    imgSrc: 'c5meru.jpg'
  },
  {
    name: 'hashedrock',
    link: 'https://twitter.com/hashedrock',
    imgSrc: 'hashedrock.jpg'
  },
  {
    name: 'shika358',
    link: 'https://twitter.com/shika358',
    imgSrc: 'shika358.jpg'
  },
  {
    name: 'potato4d',
    link: 'https://twitter.com/potato4d',
    imgSrc: 'potato4d.jpg'
  },
  {
    name: 'positiveflat',
    link: 'https://twitter.com/positiveflat',
    imgSrc: 'positiveflat.png'
  },
  {
    name: 'andoshin11',
    link: 'https://twitter.com/andoshin11',
    imgSrc: 'andoshin11.jpg'
  },
  {
    name: 'yakiniku040220',
    link: 'https://twitter.com/yakiniku040220',
    imgSrc: 'yakiniku040220.jpg'
  },
  {
    name: 'tsuchikazu',
    link: 'https://twitter.com/tsuchikazu',
    imgSrc: 'tsuchikazu.png'
  },
  {
    name: '__syumai',
    link: 'https://twitter.com/__syumai',
    imgSrc: '__syumai.png'
  },
  {
    name: '_yinm_',
    link: 'https://twitter.com/_yinm_',
    imgSrc: 'yinm.png'
  },
  {
    name: 'ryamakuchi',
    link: 'https://twitter.com/ryamakuchi',
    imgSrc: 'ryamakuchi.png'
  },
  {
    name: 'treby006',
    link: 'https://twitter.com/treby006',
    imgSrc: 'treby006.png'
  },
  {
    name: 'massie',
    link: 'https://twitter.com/massie',
    imgSrc: 'massie.png'
  },
  {
    name: 'nicedchy',
    link: 'https://twitter.com/nicedchy',
    imgSrc: 'nicedchy.png'
  },
  {
    name: 'lenomick',
    link: 'https://twitter.com/lenomick',
    imgSrc: 'lenomick.png'
  },
  {
    name: 'naokie',
    link: 'https://twitter.com/naokie',
    imgSrc: 'naokie.png'
  },
  {
    name: 'takumisatojpn',
    link: 'https://twitter.com/takumisatojpn',
    imgSrc: 'takumisatojpn.png'
  },
  {
    name: 'yotaszk',
    link: 'https://twitter.com/yotaszk',
    imgSrc: 'yotaszk.png'
  },
  {
    name: 'mtmtkzm',
    link: 'https://twitter.com/mtmtkzm',
    imgSrc: 'mtmtkzm.jpg'
  },
  {
    name: 'hisako135',
    link: 'https://note.mu/hisahisa135',
    imgSrc: 'hisako135.jpg'
  },
  {
    name: 'aytdm251',
    link: 'https://twitter.com/aytdm251',
    imgSrc: 'aytdm251.jpg'
  }
]

@Component({
  components: {
    BaseSection
  },
  computed: {
    teammates: () => teammates
  }
})
export default class TheCallForPresentersSection extends Vue {}
</script>

<style scoped lang="scss">
.the-staff-list-section {
  background-color: green;
}

.teammates {
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.teammate {
  width: 25%;
  padding: 5px;

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

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .teammate {
    width: 16.6666%;
    padding: 7px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .teammate {
    width: 12.5%;
    padding: 10px;
  }
}
</style>
