import { state, getters } from '~/store/localSpeakers'

describe('getters', () => {
  describe('all', () => {
    test('LocalSpeaker の配列を取得できる', () => {
      const speakers = getters.all(state())
      expect(speakers).toEqual(state().speakers)
    })
  })

  describe('speakerById', () => {
    test('LocalSpeaker を id をもとに取得できる', () => {
      const speaker = getters.speakerById(state())('yyx990803')
      expect(speaker.id).toBe('yyx990803')
    })
  })
})
