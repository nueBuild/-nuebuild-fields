import { renderAttributes } from './renderAttributes'

export const fieldsAttributes = obj => {
  if (obj) {
    return renderAttributes(obj, ['type'])
  }
  return ''
}
