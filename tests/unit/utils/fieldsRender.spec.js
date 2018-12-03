import { fieldsRender } from '@/utils/fieldsRender.js'
import { propsMock } from './../mocks/propsMock.js'

describe('fieldsRender.js: returns an string HTML', () => {
  it('Should return a string', () => {
    const field = fieldsRender(propsMock)
    expect(field).toEqual(
      '<p id="wrap-id" class="wrap-class"><input type="text" id="text-id" class="text-class" /><label aria-label="Text" for="text-id">The label text</label></p>'
    )
  })
})
