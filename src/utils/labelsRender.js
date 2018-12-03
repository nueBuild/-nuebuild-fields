import { labelsProps } from './labelsProps'
import { labelsAttributes } from './labelsAttributes'

export const labelsRender = (obj, element) => {
  const labelProps = labelsProps(obj)
  const props = labelProps ? labelProps.label : false

  if (props) {
    const attributes = labelsAttributes(props, obj)
    const type = props['type'] ? props['type'] : false
    const printAttribues = attributes ? ` ${attributes}` : ''
    const labelBegin = `<label${printAttribues}>`
    const labelContent = props['content'] ? props['content'] : ''
    const labelEnd = `</label>`

    if (attributes) {
      if (type) {
        let labelMarkup = ''
        switch (type) {
          case 'after':
            labelMarkup += element + labelBegin + labelContent + labelEnd
            break
          case 'wrap':
            labelMarkup += labelBegin + labelContent + element + labelEnd
            break
          case 'wrapAfter':
            labelMarkup += labelBegin + element + labelContent + labelEnd
            break
          case 'before':
          default:
            labelMarkup += labelBegin + labelContent + labelEnd + element
            break
        }
        return labelMarkup
      }
      return labelBegin + labelEnd + element
    }
  }
  return element
}
