<template>
  <BaseSection class="the-store-section">
    <template slot="heading">
      Vue Fes Store
    </template>

    <div
      v-lazy-container="{ selector: 'img' }"
      class="image"
    >
      <img
        :data-srcset="`${image}, ${image2x} 2x`"
        :data-src="image2x"
        alt=""
      />
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BaseSection from '~/components/BaseSection.vue'

@Component({
  components: {
    BaseSection
  }
})
export default class TheStoreSection extends Vue {
  private image = require('~/assets/images/store.png')
  private image2x = require('~/assets/images/store@2x.png')
}
</script>
