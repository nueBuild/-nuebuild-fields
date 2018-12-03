export const wrapsProps = obj => {
  let newObj = {}
  if (obj) {
    Object.keys(obj).forEach(key => {
      if (key == 'wrap') {
        newObj[key] = obj[key]
      }
    })
    if (Object.keys(newObj).length !== 0) {
      return newObj
    }
  }
  return
}
