<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'
import { VNode, VNodeData } from 'vue'

@Component
export default class BaseButton extends Vue {
  @Prop(String)
  readonly href?: string

  @Prop(String)
  readonly to?: string

  @Prop(String)
  readonly target?: string

  @Prop(Boolean)
  readonly disabled?: boolean

  @Emit()
  click(e: MouseEvent) {
    return e
  }

  private render(h): VNode {
    let tag: string

    const data: VNodeData = {
      attrs: { disabled: this.disabled },
      props: {},
      [this.to ? 'nativeOn' : 'on']: {
        ...this.$listeners,
        click: this.click
      }
    }

    if (this.to) {
      tag = 'nuxt-link'
      data.props!.to = this.to
    } else {
      tag = (this.href && 'a') || 'button'

      if (tag === 'a' && this.href) {
        data.attrs!.href = this.href
      }
    }

    return h(tag, data, this.$slots.default)
  }
}
</script>
