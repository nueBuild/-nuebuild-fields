import { fieldsAttributes } from '@/utils/fieldsAttributes.js'
import { propsMock } from './../mocks/propsMock.js'

describe('fieldProps.js: returns a string of the field attributes', () => {
  it('Should be equal to a string', () => {
    const attrs = fieldsAttributes(propsMock['text'])
    expect(attrs).toEqual('id="text-id" class="text-class"')
  })
})
