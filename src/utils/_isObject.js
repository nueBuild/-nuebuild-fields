/**
 * Is Object
 *
 * Check if the item is an object.
 *
 * @author Jason Witt
 *
 * @param {object} obj The item to check.
 *
 * @example if ( isObject(item) ) { ...your code };
 */
export const isObject = obj => {
  if (obj) {
    return obj === Object(obj)
  }
  return
}
