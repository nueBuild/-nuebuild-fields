import { fieldsAttributes } from './fieldsAttributes'
import { deleteObjectKeys } from './_deleteObjectKeys'
import { optionsRender } from './optionsRender'
import { optgroupRender } from './optgroupRender'
import { labelsRender } from './labelsRender'

export const typesRender = obj => {
  if (!obj) {
    return
  }

  const type = obj.type ? obj.type : false
  let props = deleteObjectKeys(obj, ['text'])
  const attrs = fieldsAttributes(props) ? ' ' + fieldsAttributes(props) : ''
  let output = ''

  if (type) {
    const content = obj.content ? obj.content : ''
    const options = optionsRender(obj) ? optionsRender(obj) : ''
    const optgroup = optgroupRender(obj) ? optgroupRender(obj) : ''
    switch (type) {
      case 'button':
        output = `<button${attrs}>${content}</button>`
        break
      case 'progress':
        output = `<progress${attrs}/>`
        break
      case 'output':
        output = `<output${attrs}/>${content}</output>`
        break
      case 'select':
        output = `<select${attrs}>${options}${optgroup}</select>`
        break
      case 'textarea':
        output = `<textarea${attrs}>${content}</textarea>`
        break
      case 'input':
      default:
        output = `<input type="${type}"${attrs} />`
        break
    }
  }
  return labelsRender(obj, output)
}
