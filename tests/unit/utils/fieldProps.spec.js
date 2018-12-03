import { fieldProps } from '@/utils/fieldProps.js'
import { propsMock } from './../mocks/propsMock.js'

describe('fieldProps.js: returns an object of the field props', () => {
  it('Should be equal to an object', () => {
    const porps = fieldProps(propsMock)
    expect(porps).toEqual({
      text: {
        type: 'text',
        id: 'text-id',
        class: 'text-class',
        label: {
          type: 'after',
          content: 'The label text',
          'aria-label': 'Text',
        },
        wrap: {
          tag: '<p>',
          class: 'wrap-class',
          id: 'wrap-id',
        },
      },
    })
  })
})
