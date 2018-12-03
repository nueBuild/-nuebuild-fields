export const labelsProps = obj => {
  let newObj = {}
  if (obj) {
    Object.keys(obj).forEach(key => {
      if (key == 'label') {
        newObj[key] = obj[key]
      }
    })
    if (Object.keys(newObj).length !== 0) {
      return newObj
    }
  }
  return
}
