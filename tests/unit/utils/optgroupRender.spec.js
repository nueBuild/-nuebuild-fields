import { optgroupRender } from '@/utils/optgroupRender.js'

describe('optgroupRender.js: returns an string of HTML', () => {
  it('Should return astring', () => {
    const obj = {
      optgroup: {
        First: {
          one: 'One',
        },
        Second: {
          two: 'Two',
        },
      },
    }
    const field = optgroupRender(obj)
    expect(field).toEqual(
      '<optgroup label="First"><option value="one">One</option></optgroup><optgroup label="Second"><option value="two">Two</option></optgroup>'
    )
  })
})
