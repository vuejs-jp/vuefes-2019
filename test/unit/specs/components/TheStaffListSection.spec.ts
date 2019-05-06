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

    test.todo('英字のほうが数字よりも先にソートされる')
    test.todo('数字のほうが記号よりも先にソートされる')
  })
})
