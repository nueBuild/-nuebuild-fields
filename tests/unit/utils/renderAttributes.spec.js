import { renderAttributes } from '@/utils/renderAttributes.js'

describe('wrapsAttributes.js: returns a string wrap attributes', () => {
  it('Should be equal to a string', () => {
    const obj = {
      one: 'one',
      two: 'two',
      three: {
        four: 'four',
        five: 'five',
      },
    }
    const attrs = renderAttributes(obj)
    expect(attrs).toEqual('one="one" two="two"')
  })
})
