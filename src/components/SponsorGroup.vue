<template>
  <div class="sponsor-group" :class="sponsorPlan">
    <h3 class="heading">
      {{ sponsorPlan.toUpperCase() }}
    </h3>

    <ul v-for="sponsor in sponsorList" :key="sponsor.sys.id">
      <li class="sponsor">
        <a
          :href="sponsor.fields.url"
          target="_blank"
          rel="noopener"
        >
          <img
            class="sponsor-image"
            :src="sponsor.fields.banner.fields.file.url"
            :alt="sponsor.fields.name"
          />
        </a>
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
  readonly sponsorPlan!: string

  @Prop()
  readonly sponsorList!: Entry<any>[]
}
</script>
