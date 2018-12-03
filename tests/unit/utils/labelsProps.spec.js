import { labelsProps } from '@/utils/labelsProps.js'
import { propsMock } from './../mocks/propsMock.js'

describe('labelsProps.js: returns an object of the label props', () => {
  it('Should be equal to an object', () => {
    const porps = labelsProps(propsMock['text'])
    expect(porps).toEqual({
      label: {
        type: 'after',
        content: 'The label text',
        'aria-label': 'Text',
      },
    })
  })
})
