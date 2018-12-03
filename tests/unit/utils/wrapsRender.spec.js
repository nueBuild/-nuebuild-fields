import { wrapsRender } from '@/utils/wrapsRender.js'
import { propsMock } from './../mocks/propsMock.js'

describe('wrapsRender.js: returns an string HTML', () => {
  it('Should return a string', () => {
    const field = wrapsRender(propsMock['text'], '<div></div>')
    expect(field).toEqual('<p id="wrap-id" class="wrap-class"><div></div></p>')
  })
})
