# @leveluptuts/fresh

# YO! That's fresh (too fresh)

![Bboy Headspinhttps](https://media.giphy.com/media/mKMGLhoD8L4yc/giphy.gif)

[![NPM](https://img.shields.io/npm/v/@leveluptuts/fresh?color=82d8d8&logoColor=524763&style=for-the-badge)](https://www.npmjs.com/package/@leveluptuts/fresh)

## Demo

https://fresh.leveluptutorials.com/

## Install

```bash
yarn add @leveluptuts/fresh
```

## Usage

### A basic form

```jsx
import { Form, Field } from '@leveluptuts/fresh'
const CoolApp = () => {
  return (
    <Form
      formId="simple"
      onSubmit={data => {
        console.log(data)
      }}
    >
      <Field>Name</Field>
      <Field type="number">Number</Field>
      <Field type="select" options={options} />
    </Form>
  )
}
```

### A slightly less basic form

```jsx
import { Form, Field } from '@leveluptuts/fresh'

const CoolApp = () => {
  return (
    <Form formId="less-simple" onSubmit={onSubmit}>
      <Field>Name</Field>
      <Field type="email">Email</Field>
      <Field type="password">Password</Field>
      <Field type="tags">Tags</Field>
      <Field type="number">Number</Field>
      <Field required type="select" options={options}>
        Type
      </Field>
      <Field type="textarea">Text Area</Field>
      <Field type="markdown">Markdown</Field>
      <Field type="toggle">Markdown</Field>
    </Form>
  )
}
```

### How about one with default values?

```jsx
import { Form, Field } from '@leveluptuts/fresh'

const defaultValues = {
  name: 'Brooklyn Boo',
  email: 'scott@test.com',
}

const CoolApp = () => {
  return (
    <Form formId="defaults" onSubmit={onSubmit} defaultValues={defaultValues}>
      <Field>Name</Field>
      <Field type="email">Email</Field>
      <Field>Two Words</Field>
    </Form>
  )
}
```

### Nested Forms?

```jsx
import { Form, Field } from '@leveluptuts/fresh'

const defaultValues = {
  name: 'Brooklyn Boo',
  email: 'scott@test.com',
}

const CoolApp = () => {
  return (
    <Form formId="defaults" onSubmit={onSubmit} defaultValues={defaultValues}>
      <Field>Name</Field>
      <Form
        formId="nestedForm"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      >
        <Field>Name</Field>
      </Form>
    </Form>
  )
}
```

### Access any form data, anytime.

```jsx
import { Form, Field, useForm } from '@leveluptuts/fresh'

const defaultValues = {
  name: 'Brooklyn Boo',
  email: 'scott@test.com',
}

const CoolApp = () => {
  const { data } = useForm()
  console.log(data) // data: {  defaults: { name: "" }, secondForm: { name: "" } }
  return (
    <>
      <Form formId="defaults" onSubmit={onSubmit} defaultValues={defaultValues}>
        <Field>Name</Field>
      </Form>
      <Form
        formId="secondForm"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      >
        <Field>Name</Field>
      </Form>
    </>
  )
}
```

## Demos

Basic Form - https://codesandbox.io/s/basic-form-s2kl0
Less Basic Form - https://codesandbox.io/s/less-basic-form-jn1rn
Conditional Items with useForm hook - https://codesandbox.io/s/with-hook-ch1bg?file=/src/App.js

## API

### Form

The wrapper around your fields.

| Prop          | Type    | Default        | Description                                                                                                           |
| ------------- | ------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| formId        | string  | \*required     | used to keep track of individual form instances.                                                                      |
| onSubmit      | func    | (data) => data | Can be any of the following types. text (default), email, number, select, password, textarea, tags. (See types below) |
| cancelButton  | boolean | true           | if cancel is shown                                                                                                    |
| disabled      | boolean | false          | if the form is disabled                                                                                               |
| cancelAction  | func    | () => null     | A function that will run on cancel button click                                                                       |
| submitText    | string  | 'Submit'       | Custom text for submit button                                                                                         |
| cancelText    | string  | 'Cancel'       | Custom text for cancel button                                                                                         |
| defaultValues | object  | {}             | An object with correlating default values                                                                             |

### Field

#### Common API - The props that are common among all fields

The common API is shared among all <Field /> elements. Type specific fields are found below.

| Prop         | Type                | Default | Description                                                                                                                               |
| ------------ | ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| type         | string              | 'text'  | Can be any of the following types: text (default), email, number, select, password, textarea, tags, markdown, toggle. (See types below)   |
| name         | string              | ''      | The name of the field data to be returned. If no name prop is given, the Field element's text will be converted to camelCase and be used. |
| required     | boolean             | false   | If a field is required                                                                                                                    |
| label        | boolean             | true    | If a field has a label                                                                                                                    |
| defaultValue | string/number/array | null    | The initial value for each field                                                                                                          |
| tooltip      | string              | ''      | Shows an info icon next to the label with a tooltip message on hover                                                                      |
| className    | string              | ''      | Custom className can be added to a field.                                                                                                 |

#### type - text & textarea

| Prop        | Type   | Default | Description      |
| ----------- | ------ | ------- | ---------------- |
| placeholder | string | ''      | placeholder text |

#### type - password

| Prop     | Type    | Default | Description                                                |
| -------- | ------- | ------- | ---------------------------------------------------------- |
| strength | boolean | true    | Shows or hides the password strength meter below the field |

#### type - select

| Prop    | Type             | Default | Description                                                        |
| ------- | ---------------- | ------- | ------------------------------------------------------------------ |
| options | array of strings | []      | The text and values of a select list. \*Object support coming soon |

#### type - reference

| Prop            | Type             | Default | Description                                         |
| --------------- | ---------------- | ------- | --------------------------------------------------- |
| displayProperty | String           | "'      | Object property of what should be displayed in list |
| options         | Array of Objects | []      | Object property of what should be displayed in list |

## Hooks

### useForm

`const { data, isReady, defaultValues, setForm, setField, setDefaults, resetForm } = useForm()`

### data

Can access any loaded form on the page via the `data[formId]`. Same with isReady and defaultValues. This allows you to extend the form in all kinds of external fields without having to bundle those elements into the library

### Errors

Not complete / in use yet, just standard html 5 validation

### Styles

Add css from global.css in this repo to get the library styles if you would like them.

https://github.com/leveluptuts/fresh/blob/main/src/fields/global.css

## FAQ

### Can I customize this component in my own way?

This library makes some calls to keep the API easy to use and maintain. Using it with another library that tries to bring it's own inputs in isn't really needed at this time.

## Contributing

`yarn`
`yarn start`

#### (in another tab) to run example

`cd example`
`yarn`
`yarn start`

## Prior Art and Inspirations

I am huge fan of simple, easy APIs that take care of 90% of jobs easily.
One form library I really enjoyed was https://kozea.github.io/formol/ .
The API was simple in all of the ways that I love, but there were some aspects of the library that just didn't fit for us and our workflow.
I wanted to make something that was more simple, but just as easy but with more configuration options.
I'm also inspired by AutoForm for Meteor https://github.com/aldeed/meteor-autoform for future generation features.

## License

MIT © [leveluptuts](https://github.com/leveluptuts)
