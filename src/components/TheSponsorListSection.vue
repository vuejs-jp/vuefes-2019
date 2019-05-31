<template>
  <BaseSection class="the-sponsor-list-section">
    <template slot="heading">
      SPONSOR LIST
    </template>

    <ul v-for="sponsor in sponsorList" :key="sponsor.sys.id">
      <li class="sponsor">
        <p>{{ sponsor.fields.type }}</p>
        <p class="name">
          {{ sponsor.fields.name }}
        </p>
        <p>{{ sponsor.fields.url }}</p>
        <img :src="sponsor.fields.banner.fields.file.url" />
        <p>{{ sponsor.fields.description }}</p>
        <p>{{ sponsor.fields.publishedAt }}</p>
      </li>
    </ul>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheSponsorListSection extends Vue {
  @Prop()
  readonly sponsorList!: Entry<any>[]
}
</script>
