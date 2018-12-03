import { isObject } from './_isObject'

export const containerAttributes = obj => {
  let attributes = {}
  if (obj) {
    Object.keys(obj).forEach(key => {
      if (!isObject(obj[key])) {
        attributes[key] = obj[key]
      }
    })
  }
  return attributes
}
