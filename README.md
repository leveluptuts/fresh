# @leveluptuts/fresh

# YO! That's fresh (too fresh)

![Bboy Headspinhttps](https://media.giphy.com/media/mKMGLhoD8L4yc/giphy.gif)

[![NPM](https://img.shields.io/npm/v/@leveluptuts/fresh?color=82d8d8&logoColor=524763&style=for-the-badge)](https://www.npmjs.com/package/@leveluptuts/fresh)

## Demo

https://fresh.leveluptutorials.com/

## Install

# construction.gif

## Use at your own risk, rapidly changing / not working.

# construction.gif

```bash
yarn add @leveluptuts/fresh
```

## Usage

### A basic form

```jsx
import { Form, Field } from '@leveluptuts/fresh'
;<Form
  onSubmit={data => {
    console.log(data)
  }}
>
  <Field>Name</Field>
  <Field type="number">Number</Field>
  <Field type="select" options={options} />
</Form>
```

### A slightly less basic form

```jsx
import { Form, Field } from '@leveluptuts/fresh'
;<Form onSubmit={onSubmit}>
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
```

## API

### Form

The wrapper around your fields.

| Prop         | Type    | Default        | Description                                                                                                           |
| ------------ | ------- | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| onSubmit     | func    | (data) => data | Can be any of the following types. text (default), email, number, select, password, textarea, tags. (See types below) |  |
| buttons      | boolean | true           | if submit and cancel are shown                                                                                        |
| cancelButton | boolean | true           | if cancel is shown                                                                                                    |
| disabled     | boolean | false          | if the form is disabled                                                                                               |
| cancelAction | func    | () => null     | A function that will run on cancel button click                                                                       |  |
| submitText   | string  | 'Submit'       | Custom text for submit button                                                                                         |
| cancelText   | string  | 'Cancel'       | Custom text for cancel button                                                                                         |

### Field

#### Common API - The props that are common among all fields

The common API is shared among all <Field /> elements. Type specific fields are found below.

| Prop     | Type    | Default | Description                                                                                                           |
| -------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| type     | string  | 'text'  | Can be any of the following types. text (default), email, number, select, password, textarea, tags. (See types below) |
| required | boolean | false   | if a field is required                                                                                                |
| label    | boolean | true    | if a field has a label                                                                                                |

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

### Errors

Not complete / in use yet, just standard html 5 validation

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
