import { wrapsProps } from './wrapsProps'
import { wrapsAttributes } from './wrapsAttributes'
import { typesRender } from './typesRender'

export const wrapsRender = obj => {
  const wrapProps = wrapsProps(obj) ? wrapsProps(obj) : false
  const props = wrapProps.wrap
  if (!props) {
    return typesRender(obj)
  }
  const attributes = wrapsAttributes(props)
  const printAttribues = attributes ? ` ${attributes}` : ''
  const tag = props.tag ? props.tag.replace(/<|>/g, '') : 'div'

  if (props.tag) {
    const tagBegin = `<${tag}${printAttribues}>`
    const tagEnd = `</${tag}>`
    return tagBegin + typesRender(obj) + tagEnd
  }

  return typesRender(obj)
}
