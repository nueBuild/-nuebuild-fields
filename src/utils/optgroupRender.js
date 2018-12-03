export const optgroupRender = obj => {
  let output = ''
  if (obj) {
    const optgroup = obj.optgroup ? obj.optgroup : false
    if (optgroup) {
      Object.keys(optgroup).forEach(key => {
        const options = optgroup[key]
        output += `<optgroup label="${key}">`
        Object.keys(options).forEach(option => {
          output += `<option value="${option}">${options[option]}</option>`
        })
        output += `</optgroup>`
      })
    }
  }
  return output
}
