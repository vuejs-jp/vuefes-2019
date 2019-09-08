import Vue from 'vue'
import { mount, RouterLinkStub, Wrapper } from '@vue/test-utils'
import sponsorList from '../../__mocks__/sponsorListMock'
import SponsorsPage from '~/pages/sponsors.vue'

describe('SponsorsPage', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(SponsorsPage, {
      data() {
        return {
          sponsors: sponsorList
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.sponsors-page').isVisible()).toBeTruthy()
  })
})
