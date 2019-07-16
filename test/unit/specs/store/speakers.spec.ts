import { state, getters } from '~/store/speakers'

describe('getters', () => {
  describe('all', () => {
    test('Speaker の配列を取得できる', () => {
      const speakers = getters.all(state())
      expect(speakers).toEqual(state().speakers)
    })
  })

  describe('speakerById', () => {
    test('Speaker を id をもとに取得できる', () => {
      const speaker = getters.speakerById(state())('yyx990803')
      expect(speaker.id).toBe('yyx990803')
    })
  })
})
