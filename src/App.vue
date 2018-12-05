<template>
  <div id="app"><NueBuildFields :fieldOptions="fieldOptions" /></div>
</template>

<script>
import NueBuildFields from './components/NueBuildFields'

export default {
  name: 'app',
  components: {
    NueBuildFields,
  },
  data() {
    return {
      fieldOptions: {
        id: 'container-id',
        class: 'container-class',
        wrap: {
          tag: 'form',
        },
        text: {
          type: 'text',
          id: 'text-id',
          class: 'text-class',
          label: {
            type: 'after',
            content: 'The label text',
            'aria-label': 'Text',
          },
          wrap: {
            tag: '<p>',
            class: 'wrap-class',
            id: 'wrap-id',
            '@click': 'click',
          },
        },
        button: {
          type: 'button',
          id: 'button-id',
          class: 'button-class',
          content: 'Test Button',
          wrap: {
            tag: '<p>',
          },
        },
        select: {
          type: 'select',
          id: 'select-id',
          class: 'select-class',
          options: {
            message: 'Choose',
            one: 'One',
            two: 'Two',
            three: 'Three',
          },
          wrap: {
            tag: '<p>',
          },
        },
        selectOptGroup: {
          type: 'select',
          id: 'selectOptgroup-id',
          class: 'selectOptgroup-class',
          optgroup: {
            'First Group': {
              one: 'One',
              two: 'Two',
              three: 'Three',
            },
            'Second Group': {
              four: 'Four',
              five: 'Five',
              six: 'Six',
            },
          },
          wrap: {
            tag: '<p>',
          },
        },
        progress: {
          type: 'progress',
          id: 'progress-id',
          class: 'progress-class',
          name: 'progress-id',
          max: '100',
          value: '45',
          wrap: {
            tag: '<p>',
          },
        },
        output: {
          type: 'output',
          id: 'progress-id',
          class: 'progress-class',
          content: 'Output',
          wrap: {
            tag: '<p>',
          },
        },
        textarea: {
          type: 'textarea',
          id: 'textarea-id',
          class: 'textarea-class',
          content: 'this is textarea text',
          wrap: {
            tag: '<p>',
          },
        },
      },
    }
  },
}
</script>
