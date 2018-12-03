// Import vue components
import component from './components/NueBuildFields.vue'

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('TestComponent', component)
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export * from './components/index'

