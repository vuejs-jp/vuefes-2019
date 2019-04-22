<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { VNode } from 'vue'

@Component
export default class TheSpeakersSection extends Vue {
  private render(h): VNode {
    return h('button')
  }
}
</script>
