import { labelsRender } from '@/utils/labelsRender.js'
import { propsMock } from './../mocks/propsMock.js'

describe('labelsRender.js: returns an string of HTML', () => {
  it('Should return astring', () => {
    const field = labelsRender(propsMock['text'], '<input type="text"/>')
    expect(field).toEqual('<input type="text"/><label aria-label="Text" for="text-id">The label text</label>')
  })
})
