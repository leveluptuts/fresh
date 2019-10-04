import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Form, Field } from '../.'

const options = ['prerelease', 'active', 'retired', 'hidden']

const refOptions = [
  {
    id: 'adsfasdfa',
    text: 'Level 1 React',
  },
  {
    id: 'ajjjdsfasdfa',
    text: 'Something else',
  },
  {
    id: 'jjdsfasdfa',
    text: 'Another one ',
  },
]

const defaultValues = {
  name: 'John',
  email: 'scott@test.com',
  twoWords: 'This thing is fresh',
}

const App = () => {
  // The on submit function is passed a data object with form data
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>
        YO That's
        <br />
        Fresh
      </h1>
      <h3>Interplanetary Forms</h3>
      <div
        style={{
          padding: '40px',
          background: 'white',
          boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
      >
        <h4>Code</h4>
        <Form onSubmit={onSubmit}>
          <Field placeholder="Freddie Fresh">Name</Field>
          <Field type="email">Email</Field>
        </Form>

        <h3>Bigger Form</h3>
        <Form onSubmit={onSubmit}>
          <Field placeholder="Freddie Fresh">Name</Field>
          <Field type="email">Email</Field>
          <Field type="password">Password</Field>
          <Field
            type="tags"
            tooltip="Press 'return' after creating a tag to add"
          >
            Tags
          </Field>
          <Field type="number">Number</Field>
          <Field type="select" options={options}>
            Type
          </Field>
          <Field type="textarea">Text Area</Field>
          <Field type="markdown">Markdown</Field>
          <Field type="toggle">Toggle</Field>
          <Field type="reference" options={refOptions} displayProperty="text">
            Reference
          </Field>
        </Form>

        <h3>Default Values</h3>
        <Form onSubmit={onSubmit} defaultValues={defaultValues}>
          <Field placeholder="Freddie Fresh">Name</Field>
          <Field type="email">Email</Field>
          <Field>Two Words</Field>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
