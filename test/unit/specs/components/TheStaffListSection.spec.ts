import { mount } from '@vue/test-utils'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

describe('TheStaffListSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheStaffListSection)
    expect(wrapper.find('.the-staff-list-section').isVisible()).toBeTruthy()
  })

  describe('compareStaffs', () => {
    test.todo('英大文字・小文字を区別しない')
    test.todo('英字 / 数字 / 記号の順でソートする')
  })
})
