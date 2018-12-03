import { isObject } from '@/utils/_isObject.js'

describe('_isObject.js: expected to be true if is an object', () => {
  it('Object should be true', () => {
    const isObj = { one: 'one' }
    expect(isObject(isObj)).toBeTruthy()
  })
  it('String should be false', () => {
    const isString = 'string'
    expect(isObject(isString)).toBeFalsy()
  })
  it('Number should be false', () => {
    const isNumber = 1
    expect(isObject(isNumber)).toBeFalsy()
  })
  it('Boolean should be false', () => {
    const isBoolean = true
    expect(isObject(isBoolean)).toBeFalsy()
  })
  it('Null should be false', () => {
    const isNull = null
    expect(isObject(isNull)).toBeFalsy()
  })
  it('Undefined should be false', () => {
    const isUndefined = undefined
    expect(isObject(isUndefined)).toBeFalsy()
  })
})
