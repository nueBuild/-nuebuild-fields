# nueBuild Fields

Easily create fields for your Vue.js projects.

## Installing

npm

```javascript
npm install @nuebuild/fields
```

yarn

```javascript
yarn add @nuebuild/fields
```

## Usage

Import the NueBuildFields component into your project's component.

```javascript
<template>
  <div>
    <NueBuildFields :fieldOptions="fieldOptions" />
  </div>
</template>

<script>
import NueBuildFields from '@nuebuild/fields'

export default {
  name: 'your-component',
  components: {
    NueBuildFields,
  },
  data() {
    return {
      fieldOptions: { ... }
    }
  },
}
</script>
```

Make sure that you add the `:fieldOptions` attribute in the NueBuildFields element.

### Field Options Object Structure

The field options will follow a structure similar to this.

```javascript
export default {
  data() {
        return {
            fieldOptions: {
                id: 'wrapper-id',
                field1: {
                    type: text,
                    class: 'text-field-class'
                    lable: {
                        content: 'The text field label'
                    }
                    wrap: {
                        tag: 'p'
                    }
                }
            }
        }
    },
}
```

### Fields Wrapper
The fields will be renders with a parent wrapper element. The data for the parent wrapper element are nested directly under the base data property.

```javascript
fieldOptions: {
    id: 'wrapper-id',
    class: 'wrapper-class'
}
```

### Fields

The NueBuildFields component supports all common fields types.

- All input field types
- textarea
- select
- button
- progress
- output

To add fields, first nest the data in the fieldOptions parent. The field property can be named anything. This is for your own organization and doesn't affect the field's rendering.

```javascript
fieldOptions: {
    // The wrapper's attributes.
    id: 'wrapper-id',
    // Your fields.
    my-super-duper-field: { ... },
    another-field: { ... }
}
```

The only required property for fields is the `type` property.

```javascript
fieldOptions: {
    my-super-duper-field: {
        // This will render a textarea field.
        type: 'textarea'
    }
}
```

### Attributes

You can add any attribute needed for your fields.

The object `key` is the type of attribute. The object `value` is the attribute's value.

```javascript
// An "id" attribute with the value of "chuckles"
id: "chuckles"

// A "class" attribute with the value of "fortnight"
class: "fortnight"
```

When you enter an object key wrapping it in quotes is not requires if it an unbroken string.

If you use an attribute that is not an unbroken string like `data-something` then you will need to wrap the attribute in quotes.

```javascript
// A "data" attribute "drink" with the value of "coffee"
"data-drink": "coffee"

// A Vue.js text directive with the value of "yowsers"
"v-text": "yowsers"
```

### Labels

To add a label to a field you'll add a `lable` property nested in your field property.

```javascript
fieldOptions: {
    my-super-duper-field: {
        // This will render a textarea field.
        type: 'textarea',
        // This the field's label
        lable: { ... }
    }
}
```

Labels have two(2) dedicated properties. `type`, `content`, and `for`.

#### `type` is the type of label

#### after

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'text',
        lable: {
            type: after
        }
    }
}
```

Will render the label after the field.

```html
<inpute type="text">
<label>The Label Text</label>
```

#### before

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'text',
        lable: {
            type: before
        }
    }
}
```

Will render the label before the field.

```html
<label>The Label Text</label>
<inpute type="text">
```

#### wrap

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'text',
        lable: {
            type: wrap
        }
    }
}
```

Will render the label wrapping the field element with the label's text before the field element.

```html
<label>The Label Text
    <inpute type="text">
</label>
```

#### wrapAfter

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'text',
        lable: {
            type: wrap
        }
    }
}
```

Will render the label wrapping the field element with the label's text after the field element.

```html
<label>
    <inpute type="text">
    The Label Text
</label>
```

*If you don't include the `type` property, the label will default to `before`*

#### `content` is the text of the label

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'text',
        lable: {
            contet: "Happy, Happy, Joy, Joy!"
        }
    }
}
```

Will be rendered as.

```html
<label>Happy, Happy, Joy, Joy!</label>
<inpute type="text">
```

#### `for` is the "for" attribute

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'text',
        id: "boba-fett"
        lable: {
            contet: "No disintegrations!"
        }
    }
}
```

Will be rendered as.

```html
<label for="boba-fett">No disintegrations!</label>
<inpute type="text" id="boba-fett">
```

While the `for` attribute is optional, if you **do not** declare the `for` property and the label's field has an `id` property set. The `for` attribute will be automatically generated pointing to the field's `id`.

### Wrap

The `wrap` property renders a wrapping element around the field and field label.

The `wrap` property has one(1) dedicated property. `tag`.

The `tag` property is the type of element to render.

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'text',
        label: {
            content: "The text label"
        }
        wrap: {
            // Will render a "<p>" tag.
            tag: "p"
        }
    }
}
```

Will be rendered as.

```html
<p>
    <label for="boba-fett">The text label</label>
    <inpute type="text">
</p>
```

### Select

To add the options to a `select` field add a property named "options: with a key/value object.
The key will set the `option` value and the value will be the `option` text.

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'select',
        id: "my-select"
        options: {
            one: "One",
            two: "Two",
            three: "Three"
        }
    }
}
```

Will be rendered as.

```html
<select id="my-select">
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Three</option>
</select>
```

If you want to have a option without an option to use as a default label for the select field name the first item in the options object "message".

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'select',
        id: "my-select"
        options: {
            message: "Make a Selection",
            one: "One",
            two: "Two",
            three: "Three"
        }
    }
}
```

Will be rendered as.

```html
<select id="my-select">
    <option>Make a Selection</option>
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Three</option>
</select>
```

To use `optgroup` with the `select` field, add a property "optgroup". This will be an object with the key as the optgroup lable and the vale as an key/value object as the options for the optgroup.

```javascript
fieldOptions: {
    my-super-duper-field: {
        type: 'select',
        id: "my-select"
        optgroup: {
            "First Group": {
                one: "One",
                two: "Two",
                three: "Three"
            },
            "Second Group": {
                four: "Four",
                five: "Five",
                six: "Six"
            }
        }
    }
}
```

Will be rendered as.

```html
<select id="my-select">
    <optgroup label="First Group">
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
    </optgroup>
    <optgroup label="Second Group">
        <option value="four">Four</option>
        <option value="five">Five</option>
        <option value="six">Six</option>
    </optgroup>
</select>
```
