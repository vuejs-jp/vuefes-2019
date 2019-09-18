import { mount } from '@vue/test-utils'
import rooms from '../../../../fixtures/contentful/rooms'
import Room from '~/components/TheTimeTableSection/Room.vue'

describe('Room', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Room, {
      propsData: {
        room: rooms[0]
      }
    })
  })

  test('room.fields.name を表示できる', () => {
    expect(wrapper.find('.room').text()).toBe(rooms[0].fields.name)
  })

  test('room.sys.id に基づいたクラスが追加される', () => {
    expect(wrapper.find('.room').classes()).toContain('room--is-plaid')
  })
})
