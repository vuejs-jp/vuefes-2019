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
  margin: 0 auto;
  padding: 3.9% 6%;
  background-color: $primary-color;
  font-size: 5vw;
  line-height: 1.2;
  color: $primary-text-color--invert;
  border: 3px solid $primary-color;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  transition: 0.3s $easeInOutCubic;

  &:hover {
    background-color: $white;
    color: $primary-text-color;
  }

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    padding: 40px;
    // prettier-ignore
    width: calc(
      #{$layout-column-width--is-small-up} * 16 + #{$layout-gutter-width--is-small-up} * 15
    );
    min-width: $content-min-width--is-small-up;
    font-size: 24px;
  }
}

a.base-button {
  text-decoration: none;
}
</style>
