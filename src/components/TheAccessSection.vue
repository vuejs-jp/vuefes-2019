<template>
  <BaseSection class="the-access-section">
    <template slot="heading">
      ACCESS
    </template>

    <div id="map" />

    <!-- eslint-disable vue/html-indent -->
    <script type="application/javascript">
      function initMap() {
        const latlng = new google.maps.LatLng(35.623, 139.7176)
        const map = new google.maps.Map(document.getElementById('map'), {
          center: latlng,
          zoom: 16
        })
        const infowindow = new google.maps.InfoWindow({
          content: 'TOC五反田メッセ',
          position: latlng
        })
        infowindow.open(map)
      }
    </script>
    <!-- eslint-enable vue/html-indent -->

    <script
      type="application/javascript"
      :src="
        `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`
      "
      async
      defer
    />

    <h3 class="title">
      会場：TOC五反田メッセ
    </h3>

    <div class="description">
      <p>
        <a href="http://messe.toc.co.jp/" target="_blank" rel="noopener">
          http://messe.toc.co.jp/
        </a>
        <br />
        東京都品川区西五反田6-6-19
      </p>

      <p>
        <span class="line">JR山手線、都営地下鉄浅草線でお越しの方</span><br />
        五反田駅 西口より徒歩10分
      </p>

      <p>
        <span class="line">東急池上線でお越しの方</span><br />
        大崎広小路駅より徒歩9分
      </p>

      <p>
        <span class="line">東急目黒線でお越しの方</span><br />
        不動前駅より徒歩6分
      </p>
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
export default class TheAccessSection extends Vue {
  private get googleMapsApiKey(): string | undefined {
    return process.env.GOOGLE_MAPS_API_KEY
  }
}
</script>

<style lang="scss" scoped>
#map {
  margin-bottom: 10px;
  height: 439px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    height: 516px;
  }
}

.title {
  margin-bottom: 10px;
  font-size: 5vw;
  font-weight: bold;
  line-height: 1.28;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin-bottom: 3px;
    font-size: 30px;
  }
}

.description {
  p {
    font-size: 3.5vw;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      font-size: 16px;
    }
  }

  a {
    color: $primary-text-color;
  }

  p + p {
    margin-top: 40px;
  }
}

.line {
  font-weight: bold;
}
</style>
