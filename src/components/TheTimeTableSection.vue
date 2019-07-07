<template>
  <BaseSection class="the-time-table-section">
    <template slot="heading">
      TIME TABLE
    </template>

    <div class="event">
      <div class="time">
        9:00 - 10:00
      </div>

      <div class="content">
        開場・受付
      </div>
    </div>

    <div class="event">
      <div class="time">
        10:00 - 10:10
      </div>

      <div class="content">
        オープニング
      </div>
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
export default class TheTimeTableSection extends Vue {}
</script>

<style lang="scss" scoped>
.the-time-table-section {
  background: linear-gradient(to right bottom, $asagi, $hiwamoegi);
}

.event {
  text-align: center;

  & + & {
    margin-top: 20px;
  }
}

.time {
  padding: 1vw;
  background-color: $primary-color;
  font-size: 5vw;
  color: $primary-text-color--invert;
}

.content {
  margin-top: 5px;
  padding: 5vw;
  background-color: rgba(255, 255, 255, 0.85);
  font-size: 4vw;
}
</style>
