import { optionsRender } from '@/utils/optionsRender.js'

describe('optionsRender.js: returns an string of HTML', () => {
  it('Should return astring', () => {
    const obj = {
      options: {
        one: 'One',
      },
    }
    const field = optionsRender(obj)
    expect(field).toEqual('<option value="one">One</option>')
  })
})
