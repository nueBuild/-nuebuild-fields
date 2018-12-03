import { wrapsProps } from './wrapsProps'
import { wrapsAttributes } from './wrapsAttributes'

export const wrapsRender = (obj, element) => {
  const wrapProps = wrapsProps(obj) ? wrapsProps(obj) : false
  const props = wrapProps.wrap
  if (!props) {
    return element
  }
  const attributes = wrapsAttributes(props)
  const printAttribues = attributes ? ` ${attributes}` : ''
  const tag = props.tag ? props.tag.replace(/<|>/g, '') : 'div'

  if (props.tag) {
    const tagBegin = `<${tag}${printAttribues}>`
    const tagEnd = `</${tag}>`
    return tagBegin + element + tagEnd
  }

  return element
}
