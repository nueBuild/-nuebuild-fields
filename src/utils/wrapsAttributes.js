import { deleteObjectKeys } from './_deleteObjectKeys'
import { renderAttributes } from './renderAttributes'

export const wrapsAttributes = properties => {
  if (properties) {
    const props = deleteObjectKeys(properties, ['tag'])
    return renderAttributes(props)
  }
  return ''
}
