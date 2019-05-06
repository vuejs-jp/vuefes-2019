import { mount } from '@vue/test-utils'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

describe('TheStaffListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheStaffListSection)
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-staff-list-section').isVisible()).toBeTruthy()
  })

  describe('compareStaffNames', () => {
    test('英大文字・小文字を区別しない', () => {
      expect(
        wrapper.vm.compareStaffNames('KiaKing85', 'inouetakuya') > 0
      ).toBeTruthy()
    })

    test.todo('英字 / 数字 / 記号の順でソートする')
  })
})
