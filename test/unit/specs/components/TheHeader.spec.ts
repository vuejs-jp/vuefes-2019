import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheHeader from '~/components/TheHeader.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

let wrapper

describe('TheHeader', () => {
  beforeEach(() => {
    wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('トップページへのリンクをレンダリングできる', () => {
    expect(wrapper.find('a').props().to).toEqual('/')
  })
})
