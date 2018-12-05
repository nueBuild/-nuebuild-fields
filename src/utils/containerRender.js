import { isObject } from './_isObject'
import { containerAttributes } from './containerAttributes'
import { fieldsRender } from './fieldsRender'

export const containerRender = obj => {
  if (obj) {
    let tag = 'div'
    let attrs = ''
    const attrsObj = containerAttributes(obj)

    Object.keys(obj).forEach(key => {
      if (!isObject(key) && key == 'wrap') {
        Object.keys(obj[key]).forEach(value => {
          tag = obj[key][value] ? obj[key][value].replace(/<|>/g, '') : 'div'
        })
      }
    })

    if (attrsObj) {
      Object.keys(attrsObj).forEach(key => {
        if (!isObject(key)) {
          attrs += `${key}="${attrsObj[key]}" `
        }
      })
    }

    const tagBegin = `<${tag} ${attrs.trim()}">`
    const tagEnd = `</${tag}>`
    return tagBegin + fieldsRender(obj) + tagEnd
  }
}
