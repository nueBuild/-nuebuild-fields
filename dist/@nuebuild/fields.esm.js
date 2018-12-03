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
var isObject = function (obj) {
  if (obj) {
    return obj === Object(obj)
  }
  return
};

var containerAttributes = function (obj) {
  var attributes = {};
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      if (!isObject(obj[key])) {
        attributes[key] = obj[key];
      }
    });
  }
  return attributes
};

var fieldProps = function (obj) {
  var newObj = {};
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      if (isObject(obj[key])) {
        newObj[key] = obj[key];
      }
    });
    if (Object.keys(newObj).length !== 0) {
      return newObj
    }
  }
  return {}
};

var wrapsProps = function (obj) {
  var newObj = {};
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      if (key == 'wrap') {
        newObj[key] = obj[key];
      }
    });
    if (Object.keys(newObj).length !== 0) {
      return newObj
    }
  }
  return
};

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
var deleteObjectKeys = function (obj, keys) {
  if (obj && keys) {
    var newObj = Object.assign({}, obj);
    keys.forEach(function (item) {
      delete newObj[item];
    });
    return newObj
  }
  return obj
};

var renderAttributes = function (obj, exclude) {
  if ( exclude === void 0 ) exclude = false;

  var attributes = '';

  // Exclude keys in the object.
  if (exclude) {
    obj = deleteObjectKeys(obj, exclude);
  }

  if (isObject(obj)) {
    Object.keys(obj).forEach(function (key) {
      if (!isObject(obj[key])) {
        attributes += key + "=\"" + (obj[key]) + "\" ";
      }
    });
    return attributes.trim()
  }
  return ''
};

var wrapsAttributes = function (properties) {
  if (properties) {
    var props = deleteObjectKeys(properties, ['tag']);
    return renderAttributes(props)
  }
  return ''
};

var wrapsRender = function (obj, element) {
  var wrapProps = wrapsProps(obj) ? wrapsProps(obj) : false;
  var props = wrapProps.wrap;
  if (!props) {
    return element
  }
  var attributes = wrapsAttributes(props);
  var printAttribues = attributes ? (" " + attributes) : '';
  var tag = props.tag ? props.tag.replace(/<|>/g, '') : 'div';

  if (props.tag) {
    var tagBegin = "<" + tag + printAttribues + ">";
    var tagEnd = "</" + tag + ">";
    return tagBegin + element + tagEnd
  }

  return element
};

var labelsProps = function (obj) {
  var newObj = {};
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      if (key == 'label') {
        newObj[key] = obj[key];
      }
    });
    if (Object.keys(newObj).length !== 0) {
      return newObj
    }
  }
  return
};

var labelsAttributes = function (properties, obj) {
  if (properties && obj) {
    if ((!properties['for'] && obj['id']) || !properties['for']) {
      properties['for'] = obj['id'];
      return renderAttributes(properties, ['type', 'content'])
    } else if (properties['for'] && properties['for'] != false) {
      return renderAttributes(properties, ['type', 'content', 'for'])
    }
  }
  return ''
};

var labelsRender = function (obj, element) {
  var labelProps = labelsProps(obj);
  var props = labelProps ? labelProps.label : false;

  if (props) {
    var attributes = labelsAttributes(props, obj);
    var type = props['type'] ? props['type'] : false;
    var printAttribues = attributes ? (" " + attributes) : '';
    var labelBegin = "<label" + printAttribues + ">";
    var labelContent = props['content'] ? props['content'] : '';
    var labelEnd = "</label>";

    if (attributes) {
      if (type) {
        var labelMarkup = '';
        switch (type) {
          case 'after':
            labelMarkup += element + labelBegin + labelContent + labelEnd;
            break
          case 'wrap':
            labelMarkup += labelBegin + labelContent + element + labelEnd;
            break
          case 'wrapAfter':
            labelMarkup += labelBegin + element + labelContent + labelEnd;
            break
          case 'before':
          default:
            labelMarkup += labelBegin + labelContent + labelEnd + element;
            break
        }
        return labelMarkup
      }
      return labelBegin + labelEnd + element
    }
  }
  return element
};

var fieldsAttributes = function (obj) {
  if (obj) {
    return renderAttributes(obj, ['type'])
  }
  return ''
};

var optionsRender = function (obj) {
  var output = '';
  if (obj) {
    var options = obj.options ? obj.options : false;
    if (options) {
      Object.keys(options).forEach(function (key) {
        if (key == 'message') {
          output += "<option value=\"\">" + (options[key]) + "</option>";
        } else {
          output += "<option value=\"" + key + "\">" + (options[key]) + "</option>";
        }
      });
    }
  }
  return output
};

var optgroupRender = function (obj) {
  var output = '';
  if (obj) {
    var optgroup = obj.optgroup ? obj.optgroup : false;
    if (optgroup) {
      Object.keys(optgroup).forEach(function (key) {
        var options = optgroup[key];
        output += "<optgroup label=\"" + key + "\">";
        Object.keys(options).forEach(function (option) {
          output += "<option value=\"" + option + "\">" + (options[option]) + "</option>";
        });
        output += "</optgroup>";
      });
    }
  }
  return output
};

var typesRender = function (obj) {
  if (!obj) {
    return
  }

  var type = obj.type ? obj.type : false;
  var props = deleteObjectKeys(obj, ['text']);
  var attrs = fieldsAttributes(props) ? ' ' + fieldsAttributes(props) : '';
  var output = '';

  if (type) {
    var content = obj.content ? obj.content : '';
    var options = optionsRender(obj) ? optionsRender(obj) : '';
    var optgroup = optgroupRender(obj) ? optgroupRender(obj) : '';
    switch (type) {
      case 'button':
        output = "<button" + attrs + ">" + content + "</button>";
        break
      case 'progress':
        output = "<progress" + attrs + "/>";
        break
      case 'output':
        output = "<output" + attrs + "/>" + content + "</output>";
        break
      case 'select':
        output = "<select" + attrs + ">" + options + optgroup + "</select>";
        break
      case 'textarea':
        output = "<textarea" + attrs + ">" + content + "</textarea>";
        break
      case 'input':
      default:
        output = "<input type=\"" + type + "\"" + attrs + " />";
        break
    }
  }
  return output
};

var fieldsRender = function (props) {
  var obj = fieldProps(props);
  var output = '';
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      var field = obj[key];
      output += wrapsRender(field, labelsRender(field, typesRender(field)));
    });
    return output
  }
  return ''
};

//

var script = {
  name: 'NueBuildFields',
  props: {
    fieldOptions: {
      type: Object,
      default: function () {},
    },
  },
  methods: {
    attributes: function attributes() {
      return containerAttributes(this.fieldOptions)
    },
    renderFields: function renderFields() {
      return (this.$el.innerHTML = fieldsRender(this.fieldOptions))
    },
  },
  mounted: function mounted() {
    this.renderFields();
  },
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", _vm._b({}, "div", _vm.attributes(), false))
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Volumes/WebDev/Personal/projects/nuebuild/_projects/vue-components/nuebuild-fields/src/components/NueBuildFields.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return }
  install.installed = true;
  Vue.component('NueBuildFields', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default component;
