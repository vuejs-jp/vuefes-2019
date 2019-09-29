<template>
  <BaseSection id="the-staff-list-section" class="the-staff-list-section">
    <template v-slot:heading>
      TEAM
    </template>

    <!-- prettier-ignore -->
    <template v-slot:heading-copy>
      Vue Fes Japan 2019 は、Vue.js 日本ユーザーグループのスタッフによって企画・運営されています。
    </template>

    <div class="staff-list-container">
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
          v-for="(volunteer, index) in sortedVolunteers"
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
    </div>
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
      name: 'Hisashi Matsui',
      avatar: 'volunteer-1.jpg'
    },
    {
      name: 'Naoko',
      avatar: 'volunteer-2.jpg'
    },
    {
      name: 'Ryuji',
      avatar: 'volunteer-3.jpg'
    },
    {
      name: 'しばみつえ',
      avatar: 'volunteer-4.jpg'
    },
    {
      name: 'yohei.fujii',
      avatar: 'volunteer-5.jpg'
    },
    {
      name: 'is_ryo',
      avatar: 'volunteer-6.jpg'
    },
    {
      name: 'watasan',
      avatar: 'volunteer-7.jpg'
    },
    {
      name: 'kotake_satoshi',
      avatar: 'volunteer-9.jpg'
    },
    {
      name: 'happylifetaka',
      avatar: 'volunteer-10.jpg'
    },
    {
      name: 'keisuke_kudo',
      avatar: 'volunteer-11.jpg'
    },
    {
      name: 'massy7124',
      avatar: 'volunteer-12.jpg'
    },
    {
      name: 'plum',
      avatar: 'volunteer-13.jpg'
    },
    {
      name: '阿部圭史',
      avatar: 'volunteer-14.jpg'
    },
    {
      name: 'yuta tanaka',
      avatar: 'volunteer-15.jpg'
    },
    {
      name: 'lilycoco',
      avatar: 'volunteer-16.jpg'
    },
    {
      name: 'nasum',
      avatar: 'volunteer-17.jpg'
    },
    {
      name: 'ayano',
      avatar: 'volunteer-19.jpg'
    },
    {
      name: 'cyanpon',
      avatar: 'volunteer-21.jpg'
    },
    {
      name: 'sawayama',
      avatar: 'volunteer-22.jpg'
    },
    {
      name: 'motohirock',
      avatar: 'volunteer-23.jpg'
    },
    {
      name: 'kuno',
      avatar: 'volunteer-24.jpg'
    },
    {
      name: 'chan_kaku',
      avatar: 'volunteer-25.jpg'
    },
    {
      name: 'yutaki',
      avatar: 'volunteer-26.jpg'
    },
    {
      name: 'kohei',
      avatar: 'volunteer-27.jpg'
    },
    {
      name: 'kowwwwji',
      avatar: 'volunteer-28.jpg'
    },
    {
      name: 'niba1122',
      avatar: 'volunteer-31.jpg'
    },
    {
      name: 'c-cho',
      avatar: 'volunteer-32.jpg'
    },
    {
      name: 'odan',
      avatar: 'volunteer-33.jpg'
    },
    {
      name: 'aoisa',
      avatar: 'volunteer-34.jpg'
    },
    {
      name: 'm_k',
      avatar: 'volunteer-35.jpg'
    },
    {
      name: 'hiropanda_desu',
      avatar: 'volunteer-36.jpg'
    },
    {
      name: 'ryota.suzuki22',
      avatar: 'volunteer-37.jpg'
    },
    {
      name: 'Yasshieeee',
      avatar: 'volunteer-38.jpg'
    },
    {
      name: 'がっちゃん',
      avatar: 'volunteer-40.jpg'
    },
    {
      name: 'paichi81',
      avatar: 'volunteer-41.jpg'
    },
    {
      name: 'nappan23',
      avatar: 'volunteer-42.jpg'
    },
    {
      name: 'kahirokunn',
      avatar: 'volunteer-43.jpg'
    },
    {
      name: 'kazoo',
      avatar: 'volunteer-44.jpg'
    },
    {
      name: 'yuki',
      avatar: 'volunteer-45.jpg'
    },
    {
      name: 'nancy',
      avatar: 'volunteer-46.jpg'
    },
    {
      name: 'Makoto Koizumi',
      avatar: 'volunteer-47.jpg'
    },
    {
      name: 'naotaro0123',
      avatar: 'volunteer-48.jpg'
    },
    {
      name: 'きり丸',
      avatar: 'volunteer-50.jpg'
    },
    {
      name: 'mori',
      avatar: 'volunteer-51.jpg'
    },
    {
      name: 'atsu',
      avatar: 'volunteer-52.jpg'
    },
    {
      name: 'kosa3',
      avatar: 'volunteer-53.jpg'
    },
    {
      name: 'たっしー',
      avatar: 'volunteer-54.jpg'
    },
    {
      name: 'tetsuya',
      avatar: 'volunteer-55.jpg'
    },
    {
      name: 'tomoyuki_onodera',
      avatar: 'volunteer-56.jpg'
    },
    {
      name: 'KAKAMU',
      avatar: 'volunteer-57.jpg'
    },
    {
      name: 'Ricky',
      avatar: 'volunteer-58.jpg'
    },
    {
      name: 'Nakata Kazuhiro',
      avatar: 'volunteer-59.jpg'
    },
    {
      name: 'Taihei Ohkawa',
      avatar: 'volunteer-60.jpg'
    },
    {
      name: 'kokky',
      avatar: 'volunteer-61.jpg'
    },
    {
      name: 'Hitoshi',
      avatar: 'volunteer-62.jpg'
    },
    {
      name: 'wakame',
      avatar: 'volunteer-63.jpg'
    },
    {
      name: 'kimura',
      avatar: 'volunteer-64.jpg'
    },
    {
      name: 'i-nishimura',
      avatar: 'volunteer-65.jpg'
    },
    {
      name: 'wataru katsuki',
      avatar: 'volunteer-66.jpg'
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

  private get sortedVolunteers(): Volunteer[] {
    return this.volunteers.sort((a: Volunteer, b: Volunteer) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1

      return 0
    })
  }

  compareStaffNames(a: string, b: string): number {
    const adjustedA: string = a.toLowerCase().replace(/_/g, '')
    const adjustedB: string = b.toLowerCase().replace(/_/g, '')

    if (adjustedA < adjustedB) return -1
    if (adjustedA > adjustedB) return 1

    return 0
  }
}
</script>

<style lang="scss" scoped>
.staff-list-container {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: 0 auto;
    width: 80%;
  }
}

.sub-heading {
  margin-bottom: 2.5vw;
  line-height: 1;
  font-size: 5vw;
  font-weight: bold;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-bottom: 20px;
    font-size: 30px;
  }
}

.staff-list {
  margin: 0 0 10vw;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: 0 0 80px;
  }
}

.staff {
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
    display: block;
    width: 100%;
  }

  @media screen and (max-width: $layout-breakpoint--is-small) {
    $staff-gutter--is-small: 3.5vw;

    width: calc((100% - #{$staff-gutter--is-small} * 3) / 4);

    &:nth-of-type(4n),
    &:nth-of-type(4n - 1),
    &:nth-of-type(4n - 2) {
      margin-left: $staff-gutter--is-small;
    }

    &:nth-of-type(n + 5) {
      margin-top: $staff-gutter--is-small;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    $staff-gutter--is-small-up: 14px;
    $staff-gutter--is-medium-up: 20px;

    width: calc((100% - #{$staff-gutter--is-small-up} * 7) / 8);
    margin-left: $staff-gutter--is-small-up;

    @media screen and (min-width: $layout-breakpoint--is-medium-up) {
      width: calc((100% - #{$staff-gutter--is-medium-up} * 7) / 8);
      margin-left: $staff-gutter--is-medium-up;
    }

    &:nth-of-type(8n + 1) {
      margin-left: 0;
    }

    &:nth-of-type(n + 9) {
      margin-top: $staff-gutter--is-small-up;

      @media screen and (min-width: $layout-breakpoint--is-medium-up) {
        margin-top: $staff-gutter--is-medium-up;
      }
    }
  }
}

.volunteer-list {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.volunteer {
  img {
    display: block;
    width: 100%;
    border-radius: 50%;
  }

  @media screen and (max-width: $layout-breakpoint--is-small) {
    $gutter--is-small: 3vw;

    width: calc((100% - #{$gutter--is-small} * 7) / 8);
    margin-left: $gutter--is-small;

    &:nth-of-type(8n + 1) {
      margin-left: 0;
    }

    &:nth-of-type(n + 9) {
      margin-top: $gutter--is-small;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    $gutter--is-small-up: 14px;

    width: calc((100% - #{$gutter--is-small-up} * 15) / 16);
    margin-left: $gutter--is-small-up;

    &:nth-of-type(16n + 1) {
      margin-left: 0;
    }

    &:nth-of-type(n + 17) {
      margin-top: $gutter--is-small-up;
    }
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    $gutter--is-medium-up: 20px;

    width: calc((100% - #{$gutter--is-medium-up} * 15) / 16);
    margin-left: $gutter--is-medium-up;

    &:nth-of-type(16n + 1) {
      margin-left: 0;
    }

    &:nth-of-type(n + 17) {
      margin-top: $gutter--is-medium-up;
    }
  }
}
</style>
