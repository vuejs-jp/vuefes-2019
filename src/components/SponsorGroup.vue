<template>
  <div class="sponsor-group">
    <h3 class="heading">
      {{ sponsorType.toUpperCase() }}
    </h3>

    <ul v-for="sponsor in sponsorList" :key="sponsor.sys.id">
      <li class="sponsor">
        <img
          class="sponsor-image"
          :src="sponsor.fields.banner.fields.file.url"
          :alt="sponsor.fields.name"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Entry } from 'contentful/index'

@Component
export default class SponsorGroup extends Vue {
  @Prop()
  readonly sponsorType!: string

  @Prop()
  readonly sponsorList!: Entry<any>[]
}
</script>
