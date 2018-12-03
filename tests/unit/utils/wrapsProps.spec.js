import { wrapsProps } from '@/utils/wrapsProps.js'
import { propsMock } from './../mocks/propsMock.js'

describe('wrapsProps.js: returns an object of the wrap props', () => {
  it('Should be equal to an object', () => {
    const porps = wrapsProps(propsMock['text'])
    expect(porps).toEqual({
      wrap: {
        tag: '<p>',
        class: 'wrap-class',
        id: 'wrap-id',
      },
    })
  })
})
