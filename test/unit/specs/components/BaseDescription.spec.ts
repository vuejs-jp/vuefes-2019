import { mount } from '@vue/test-utils'
import BaseDescription from '~/components/BaseSection.vue'

describe('BaseDescription', () => {
  test('$slot.heading を表示できる', () => {
    const wrapper = mount(BaseDescription, {
      slots: {
        default: 'My Default',
        heading: 'MY HEADING'
      }
    })
    expect(wrapper.find('.heading').text()).toEqual('MY HEADING')
  })
})
