<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'
import { VNode, VNodeData } from 'vue'

@Component
export default class BaseLink extends Vue {
  @Prop(String)
  readonly to?: string

  @Emit()
  click(e: MouseEvent) {
    return e
  }

  private render(h): VNode {
    const tag: string = this.$attrs.href && 'a'

    const data: VNodeData = {
      class: 'base-link',
      props: {},
      on: {
        ...this.$listeners,
        click: this.click
      }
    }

    return h(tag, data, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
.base-link {
  font-size: inherit;
  color: $vue-dark-blue;
  transition: 0.2s;

  &:hover {
    opacity: 0.4;
  }
}
</style>
