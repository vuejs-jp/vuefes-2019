import { state, getters } from '~/store/speakers'

describe('getters', () => {
  describe('speakerById', () => {
    test('Speaker を id をもとに取得できる', () => {
      const speaker = getters.speakerById(state())('yyx990803')
      expect(speaker.id).toBe('yyx990803')
    })
  })
})
