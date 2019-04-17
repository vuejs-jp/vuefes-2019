import { mount } from '@vue/test-utils'
import BaseSection from '~/components/BaseSection.vue'

describe('BaseSection', () => {
  test('$slot.heading を表示できる', () => {
    const wrapper = mount(BaseSection, {
      slots: {
        default: 'My Default',
        heading: 'MY HEADING'
      }
    })
    expect(wrapper.find('.heading').text()).toEqual('MY HEADING')
  })
})
