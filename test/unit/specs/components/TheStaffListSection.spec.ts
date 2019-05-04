import { mount } from '@vue/test-utils'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

describe('TheStaffListSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheStaffListSection)
    expect(wrapper.find('.the-staff-list-section').isVisible()).toBeTruthy()
  })
})
