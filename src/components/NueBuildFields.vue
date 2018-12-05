<template>
  <v-runtime-template :template="renderFields()"></v-runtime-template>
</template>

<script>
import { containerRender } from './../utils/index.js'
import VRuntimeTemplate from 'v-runtime-template'

export default {
  name: 'NueBuildFields',
  components: {
    VRuntimeTemplate,
  },
  props: {
    fieldOptions: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    click() {
      console.log('test')
    },
    renderFields() {
      return containerRender(this.fieldOptions)
    },
  },
}
</script>
