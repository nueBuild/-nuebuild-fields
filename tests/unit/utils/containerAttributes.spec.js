import { containerAttributes } from '@/utils/containerAttributes.js'
import { propsMock } from './../mocks/propsMock.js'

describe('containerAttributes.js: returns a string of the container attributes', () => {
  it('Should be equal to a string', () => {
    const porps = containerAttributes(propsMock)
    expect(porps).toEqual({
      id: 'container-id',
      class: 'container-class',
    })
  })
})
