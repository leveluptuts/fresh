import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { Form, Field, useForm } from '../.'

const options = ['prerelease', 'active', 'retired', 'hidden']
const optionsTwo = [
  { value: 'prerelease', display: 'Pre Release' },
  { value: 'active', display: 'Active' },
  { value: 'retired', display: 'Retired' },
  { value: 'hidden', display: 'Hidden' },
]

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
  name: 'Freddie Fresh',
  email: 'scott@test.com',
  twoWords: 'Too fresh',
  typeWith: 'retired',
  reference:  { value: 'active', display: 'Active' }
}

const App = () => {
  // The on submit function is passed a data object with form data
  const onSubmit = data => {
    console.log(data)
  }
  const onChange = data => {
    console.log(data)
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>
        YO That's
        <br />
        Fresh
      </h1>
      <div
        style={{
          padding: '40px',
          background: 'white',
          boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
      >
        {/* <h3>Basic Form</h3>
        <iframe
          src="https://codesandbox.io/embed/hungry-galileo-s2kl0?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: '100%',
            height: 500,
            border: 0,
            borderRadius: 4,
            overflow: 'hidden',
          }}
          title="hungry-galileo-s2kl0"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe> */}

        <h3>Bigger Form</h3>
        <Form formId="bigger-form" onSubmit={onSubmit}>
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
          <Field required type="select" options={options}>
            Type
          </Field>
          <Field
            displayProperty="display"
            valueProperty="value"
            type="select"
            options={optionsTwo}
          >
            Type With Object
          </Field>
          <Field type="textarea">Text Area</Field>
          <Field type="markdown">Markdown</Field>
          <Field type="toggle">Toggle</Field>
          <Field type="reference" options={refOptions} displayProperty="text">
            Reference
          </Field>
        </Form>


        <h3>Default Values</h3>
        <Form formId="tester" onSubmit={onSubmit} defaultValues={defaultValues}>
          <Field wrapperStyle={{ width: '100%' }}>Name</Field>
          <Field type="email">Email</Field>
          <Field type="email">Email Two</Field>
          <Field>Two Words</Field>
          <h3>Tester</h3>
          <Form formId="inside">
            <Field>Some thing</Field>
          </Form>
          <Field
            displayProperty="display"
            valueProperty="value"
            type="select"
            options={optionsTwo}
            name="typeWith"
            >
            Type With Object
          </Field>
          <Field
            displayProperty="display"
            valueProperty="value"
            type="reference"
            options={optionsTwo}
            >
            Reference
          </Field>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
