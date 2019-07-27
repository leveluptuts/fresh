# @leveluptuts/fresh

# YO! That's fresh (too fresh)

![Bboy Headspinhttps](https://media.giphy.com/media/mKMGLhoD8L4yc/giphy.gif)

# construction.gif

## Use at your own risk.

# construction.gif

> That's fresh. That's dope.

[![NPM](https://img.shields.io/npm/v/@leveluptuts/fresh?color=82d8d8&logoColor=524763&style=for-the-badge)](https://www.npmjs.com/package/@leveluptuts/fresh)

## Install

# construction.gif

## Use at your own risk, rapidly changing / not working.

# construction.gif

```bash
yarn add @leveluptuts/fresh
```

## Usage

### The basic API

```jsx
<Form
  onSubmit={({ data }) => {
    console.log(data);
  }}
>
  <Field>Name</Field>
  <Field type="number">Number</Field>
  <Field type="select" options={options} />
</Form>
```

### <Field />

#### type - String

- text - default
- number
- select
- required

## FAQ

### Can I customize this component in my own way?

This library makes some calls to keep the API easy to use and maintain.

## Prior Art and Inspirations

I am huge fan of simple, easy APIs that take care of 90% of jobs easily.
One form library I really enjoyed was https://kozea.github.io/formol/ .
The API was simple in all of the ways that I love, but there were some aspects of the library that just didn't fit for us and our workflow.
I wanted to make something that was more simple, but just as easy but with more configuration options.
I'm also inspired by AutoForm for Meteor https://github.com/aldeed/meteor-autoform for future generation features.

## License

MIT © [leveluptuts](https://github.com/leveluptuts)
