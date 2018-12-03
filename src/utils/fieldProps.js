import { isObject } from './_isObject'

export const fieldProps = obj => {
  let newObj = {}
  if (obj) {
    Object.keys(obj).forEach(key => {
      if (isObject(obj[key])) {
        newObj[key] = obj[key]
      }
    })
    if (Object.keys(newObj).length !== 0) {
      return newObj
    }
  }
  return {}
}
