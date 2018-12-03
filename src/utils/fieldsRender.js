import { fieldProps } from './fieldProps'
import { wrapsRender } from './wrapsRender'
import { labelsRender } from './labelsRender'
import { typesRender } from './typesRender'

export const fieldsRender = props => {
  const obj = fieldProps(props)
  let output = ''
  if (obj) {
    Object.keys(obj).forEach(key => {
      const field = obj[key]
      output += wrapsRender(field, labelsRender(field, typesRender(field)))
    })
    return output
  }
  return ''
}
