<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'
import { VNode, VNodeData } from 'vue'

@Component
export default class BaseButton extends Vue {
  @Prop(String)
  readonly to?: string

  @Emit()
  click(e: MouseEvent) {
    return e
  }

  private render(h): VNode {
    let tag: string

    const data: VNodeData = {
      class: 'base-button',
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
      tag = (this.$attrs.href && 'a') || 'button'
    }

    return h(tag, data, this.$slots.default)
  }
}
</script>

<style lang="scss">
.base-button {
  padding: 30px 40px;
  background-color: $primary-color;
  font-size: 5vw;
  line-height: 1.2;
  color: $primary-text-color--invert;
}

a.base-button {
  text-decoration: none;
}
</style>
