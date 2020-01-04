import { mount } from '@vue/test-utils'
import events from 'test/fixtures/contentful/events'
import Event from '~/components/TheTimeTableSection/Event.vue'

describe('Event', () => {
  test('event.fields.title を表示できる', () => {
    const wrapper = mount(Event, {
      propsData: {
        event: events[0]
      }
    })
    expect(wrapper.find('.event').text()).toBe(events[0].fields.title)
  })
})
