import { labelsAttributes } from '@/utils/labelsAttributes.js'
import { propsMock } from './../mocks/propsMock.js'

describe('labelsAttributes.js: returns a string label attributes', () => {
  it('Should be equal to a string', () => {
    const attrs = labelsAttributes(propsMock['text']['label'], propsMock['text'])
    expect(attrs).toEqual('aria-label="Text" for="text-id"')
  })
})
