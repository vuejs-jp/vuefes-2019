import { mount } from '@vue/test-utils'
import BaseMainDescription from '~/components/BaseMainDescription.vue'

describe('BaseMainDescription', () => {
  test('$slot.heading を表示できる', () => {
    const wrapper = mount(BaseMainDescription, {
      slots: {
        default: 'My Default',
        heading: 'MY HEADING'
      }
    })
    expect(wrapper.find('.heading').text()).toEqual('MY HEADING')
  })
})
