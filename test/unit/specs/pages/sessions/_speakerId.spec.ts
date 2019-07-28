/**
 * TypeError: timer.unref is not a function · Issue #1909 · facebook/jest
 * https://github.com/facebook/jest/issues/1909#issuecomment-252981401
 * https://jestjs.io/docs/en/configuration#testenvironment-string
 *
 * @jest-environment node
 */

import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import config from '../../../../../nuxt.config'

describe('SessionPage', () => {
  let nuxt

  beforeAll(async () => {
    jest.setTimeout(60 * 1000)

    config.dev = false
    config.rootDir = resolve(__dirname, '../../../../..')
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(4000, 'localhost')
  })

  afterAll(() => {
    nuxt.close()
  })

  test.skip('レンダリングできる', async () => {
    // FIXME: TypeError: this._ssrNode is not a function
    const { html } = await nuxt.renderRoute('/sessions/yyx990803/')
    expect(html).toContain(
      '<title data-n-head="true">Keynote（Evan You） | Vue Fes Japan 2019</title>'
    )
  })
})
