<template>
  <BaseSection class="the-staff-list-section">
    <template v-slot:heading>
      TEAM
    </template>

    <!-- prettier-ignore -->
    <template slot="heading-copy">
      Vue Fes Japan 2019 は、 Vue.js 日本ユーザーグループのスタッフによって企画・運営されています。
    </template>

    <h3 class="sub-heading">
      CORE STAFF
    </h3>

    <ul class="staff-list">
      <li v-for="staff in leaderAndStaffs" :key="staff.name" class="staff">
        <a :href="staff.link" target="_blank" rel="noopener">
          <div v-lazy-container="{ selector: 'img' }">
            <!-- prettier-ignore-attribute -->
            <img
              :data-srcset="`
              ${require(`~/assets/images/staffs/${staff.avatar}`)},
              ${require(`~/assets/images/staffs/@2x/${staff.avatar}`)} 2x
            `"
              :data-src="require(`~/assets/images/staffs/${staff.avatar}`)"
              alt=""
            />
          </div>
          @{{ staff.name }}
        </a>
      </li>
    </ul>

    <h3 class="sub-heading">
      VOLUNTEER
    </h3>

    <ul class="volunteer-list">
      <li
        v-for="(volunteer, index) in volunteers"
        :key="index"
        class="volunteer"
      >
        <div v-lazy-container="{ selector: 'img' }">
          <!-- prettier-ignore-attribute -->
          <img
            :data-srcset="`
              ${require(`~/assets/images/volunteers/${volunteer.avatar}`)},
              ${require(`~/assets/images/volunteers/@2x/${volunteer.avatar}`)} 2x
            `"
            :data-src="require(`~/assets/images/volunteers/${volunteer.avatar}`)"
            :alt="volunteer.name"
          />
        </div>
      </li>
    </ul>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

interface Staff {
  name: string
  link: string
  avatar: string
}

interface Volunteer {
  name: string
  avatar: string
}

@Component({
  components: {
    BaseSection
  }
})
export default class TheStaffListSection extends Vue {
  private leader: Staff = {
    name: 'kazu_pon',
    link: 'https://twitter.com/kazu_pon',
    avatar: 'kazu_pon.png'
  }

  private staffs: Staff[] = [
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
    },
    {
      name: 'KiaKing85',
      link: 'https://twitter.com/KiaKing85',
      avatar: 'KiaKing85.png'
    },
    {
      name: 'jiyu33',
      link: 'https://twitter.com/jiyu33',
      avatar: 'jiyu33.jpg'
    },
    {
      name: 'show60',
      link: 'https://twitter.com/show60',
      avatar: 'show60.png'
    },
    {
      name: 'umiremix',
      link: 'https://twitter.com/umiremix',
      avatar: 'umiremix.png'
    },
    {
      name: 'nahokomatsui',
      link: 'https://twitter.com/nahokomatsui',
      avatar: 'nahokomatsui.jpg'
    },
    {
      name: 'robjamdev',
      link: 'https://twitter.com/robjamdev',
      avatar: 'robjamdev.jpg'
    }
  ]

  private volunteers: Volunteer[] = [
    {
      name: 'example-1',
      avatar: 'example.png'
    },
    {
      name: 'example-2',
      avatar: 'example.png'
    },
    {
      name: 'example-3',
      avatar: 'example.png'
    },
    {
      name: 'example-4',
      avatar: 'example.png'
    },
    {
      name: 'example-5',
      avatar: 'example.png'
    },
    {
      name: 'example-6',
      avatar: 'example.png'
    },
    {
      name: 'example-7',
      avatar: 'example.png'
    },
    {
      name: 'example-8',
      avatar: 'example.png'
    },
    {
      name: 'example-9',
      avatar: 'example.png'
    },
    {
      name: 'example-10',
      avatar: 'example.png'
    },
    {
      name: 'example-11',
      avatar: 'example.png'
    },
    {
      name: 'example-12',
      avatar: 'example.png'
    },
    {
      name: 'example-13',
      avatar: 'example.png'
    },
    {
      name: 'example-14',
      avatar: 'example.png'
    },
    {
      name: 'example-15',
      avatar: 'example.png'
    },
    {
      name: 'example-16',
      avatar: 'example.png'
    }
  ]

  private get leaderAndStaffs(): Staff[] {
    return [
      this.leader,
      ...this.staffs.sort((a: Staff, b: Staff) => {
        return this.compareStaffNames(a.name, b.name)
      })
    ]
  }

  compareStaffNames(a: string, b: string): number {
    const adjustedA: string = a.toLowerCase().replace(/_/g, '')
    const adjustedB: string = b.toLowerCase().replace(/_/g, '')

    if (adjustedA < adjustedB) return -1

    return 0
  }
}
</script>

<style lang="scss" scoped>
// ガターの幅
$margin: 20px;

// 1列のアイテム数
$length-sm: 4;
$length-md: 6;
$length-lg: 8;

// アイテムの幅 = ( 100% - 1列にあるガター幅の合計px ) / 1列にあるアイテム数
$width-sm: calc((100% - #{$length-sm - 1} * #{$margin}) / #{$length-sm});
$width-md: calc((100% - #{$length-md - 1} * #{$margin}) / #{$length-md});
$width-lg: calc((100% - #{$length-lg - 1} * #{$margin}) / #{$length-lg});

.staff-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto -#{$margin};

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 80%;
  }
}

.staff {
  margin: 0 $margin $margin 0;
  width: $width-sm;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8vw;
    color: $primary-text-color;
    text-decoration: none;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 10px;
    }
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: $layout-breakpoint--is-small) {
    &:nth-of-type(#{$length-sm}n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) and (max-width: $layout-breakpoint--is-medium) {
    width: $width-md;

    &:nth-of-type(#{$length-md}n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    width: $width-lg;

    &:nth-of-type(#{$length-lg}n) {
      margin-right: 0;
    }
  }
}
</style>
