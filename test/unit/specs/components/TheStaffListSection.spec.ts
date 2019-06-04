import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheStaffListSection from '~/components/TheStaffListSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheStaffListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheStaffListSection, { localVue })
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

    test('アンダースコア（_）は無視される', () => {
      expect(
        wrapper.vm.compareStaffNames('__syumai', 'inouetakuya') > 0
      ).toBeTruthy()
    })

    test.todo('英字のほうが数字よりも先にソートされる')
    test.todo('数字のほうが記号よりも先にソートされる')
  })
})
