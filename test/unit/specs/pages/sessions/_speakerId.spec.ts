import { resolve } from 'path'
import config from '../../../../../nuxt.config'

config.rootDir = resolve(__dirname, '../../../../..')

describe('SessionPage', () => {
  test('レンダリングできる', () => {
    expect(config.rootDir).toBe(
      '/Users/inouetakuya/src/github.com/kazupon/vuefes-2019'
    )
  })
})
