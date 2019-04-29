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

<style lang="scss" scoped>
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  padding: 6.17%;
  background-color: $primary-color;
  font-size: 5vw;
  line-height: 1.2;
  color: $primary-text-color--invert;
  border: 3px solid $primary-color;
  transition: 0.3s;

  &:hover {
    background-color: $white;
    color: $primary-text-color;
  }
}

a.base-button {
  text-decoration: none;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .base-button {
    padding: 30px 40px;
    font-size: 24px;
  }
}
</style>
