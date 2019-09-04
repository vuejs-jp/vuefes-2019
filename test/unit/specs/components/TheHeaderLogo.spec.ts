import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheHeaderLogo from '~/components/TheHeaderLogo.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheHeaderLogo', () => {
  test('トップページへのリンクをレンダリングできる', () => {
    const wrapper = mount(TheHeaderLogo, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('a').props().to).toEqual('/')
  })
})
