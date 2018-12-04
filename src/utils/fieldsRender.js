import { fieldProps } from './fieldProps'
import { wrapsRender } from './wrapsRender'

export const fieldsRender = props => {
  const obj = fieldProps(props)
  let output = ''
  if (obj) {
    Object.keys(obj).forEach(key => {
      const field = obj[key]
      output += wrapsRender(field)
    })
    return output
  }
  return ''
}
