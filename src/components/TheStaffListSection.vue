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
