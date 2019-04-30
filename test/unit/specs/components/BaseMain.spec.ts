import { mount } from '@vue/test-utils'
import BaseMain from '~/components/BaseMain.vue'

describe('BaseMain', () => {
  test('$slot.heading を表示できる', () => {
    const wrapper = mount(BaseMain, {
      slots: {
        default: 'My Default',
        heading: 'MY HEADING'
      }
    })
    expect(wrapper.find('.heading').text()).toEqual('MY HEADING')
  })
})
