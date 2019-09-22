import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheHeader from '~/components/TheHeader.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheHeader', () => {
  test('トップページへのリンクをレンダリングできる', () => {
    const wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('a').props().to).toEqual('/')
  })
})
