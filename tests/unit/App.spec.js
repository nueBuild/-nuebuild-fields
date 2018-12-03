'use strict'

import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import TestHelpers from './../helpers'

describe('App.vue', () => {
  it('App component mounts without errors', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const attrSelectors = ['#app']

  attrSelectors.forEach(selector => {
    it(selector + ' has attributes set', () => {
      const wrapper = shallowMount(App)
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
