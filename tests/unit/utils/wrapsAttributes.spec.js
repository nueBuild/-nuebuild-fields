import { wrapsAttributes } from '@/utils/wrapsAttributes.js'
import { propsMock } from './../mocks/propsMock.js'

describe('wrapsAttributes.js: returns a string wrap attributes', () => {
  it('Should be equal to a string', () => {
    const attrs = wrapsAttributes(propsMock['text']['wrap'], propsMock['text'])
    expect(attrs).toEqual('id="wrap-id" class="wrap-class"')
  })
})
