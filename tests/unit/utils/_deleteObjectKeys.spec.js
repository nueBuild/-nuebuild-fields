import { deleteObjectKeys } from '@/utils/_deleteObjectKeys.js'

describe('_deleteObjectKeys.js: matches if the actual object does not contain expected key', () => {
  it('Object should not contain key', () => {
    let obj = {
      one: 'one',
      two: 'two',
      three: 'three',
    }
    let objRecived = deleteObjectKeys(obj, ['three'])
    expect({ three: 'three' }).toEqual(expect.not.objectContaining(objRecived))
  })
})
