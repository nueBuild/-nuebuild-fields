import { isObject } from './_isObject'
import { deleteObjectKeys } from './_deleteObjectKeys'

export const renderAttributes = (obj, exclude = false) => {
  let attributes = ''

  // Exclude keys in the object.
  if (exclude) {
    obj = deleteObjectKeys(obj, exclude)
  }

  if (isObject(obj)) {
    Object.keys(obj).forEach(key => {
      if (!isObject(obj[key])) {
        attributes += `${key}="${obj[key]}" `
      }
    })
    return attributes.trim()
  }
  return ''
}
