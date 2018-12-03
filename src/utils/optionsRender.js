export const optionsRender = obj => {
  let output = ''
  if (obj) {
    const options = obj.options ? obj.options : false
    if (options) {
      Object.keys(options).forEach(key => {
        if (key == 'message') {
          output += `<option value="">${options[key]}</option>`
        } else {
          output += `<option value="${key}">${options[key]}</option>`
        }
      })
    }
  }
  return output
}
