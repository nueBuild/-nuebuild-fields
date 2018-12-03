<template>
  <div v-bind="attributes()"></div>
</template>

<script>
import { containerAttributes, fieldsRender } from './../utils/index.js'

export default {
  name: 'NueBuildFields',
  props: {
    fieldOptions: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    attributes() {
      return containerAttributes(this.fieldOptions)
    },
    renderFields() {
      return (this.$el.innerHTML = fieldsRender(this.fieldOptions))
    },
  },
  mounted() {
    this.renderFields()
  },
}
</script>
