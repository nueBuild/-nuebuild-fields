/**
 * Delete Object Key
 *
 * Safely remove object keys buy creating a new object.
 *
 * @author Jason Witt
 *
 * @param {object} obj  The original object.
 * @param {array}  keys An array of keys to remove.
 *
 * @example const newObject = deleteObjectKeys(originalObject, ['keyOne', 'keyTwo', 'keyThree']);
 */
export const deleteObjectKeys = (obj, keys) => {
  if (obj && keys) {
    const newObj = Object.assign({}, obj)
    keys.forEach(item => {
      delete newObj[item]
    })
    return newObj
  }
  return obj
}
