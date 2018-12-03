import { renderAttributes } from './renderAttributes'

export const labelsAttributes = (properties, obj) => {
  if (properties && obj) {
    if ((!properties['for'] && obj['id']) || !properties['for']) {
      properties['for'] = obj['id']
      return renderAttributes(properties, ['type', 'content'])
    } else if (properties['for'] && properties['for'] != false) {
      return renderAttributes(properties, ['type', 'content', 'for'])
    }
  }
  return ''
}
