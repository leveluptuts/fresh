import React from 'react'
import styled from 'styled-components'
import { Form, Field } from '@leveluptuts/fresh'

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
        <pre>{`
        <Form onSubmit={onSubmit}>
          <Field placeholder="Freddie Fresh">Name</Field>
          <Field type="email">Email</Field>
          <Field type="password">Password</Field>
          <Field type="tags">Tags</Field>
          <Field type="number">Number</Field>
          <Field required type="select" options={options}>
            Type
          </Field>
          <Field type="textarea">Text Area</Field>
          <Field type="markdown">Markdown</Field>
          <Field type="toggle">Toggle</Field>
          <Field type="reference" options={refOptions} displayProperty="text">
            Reference
          </Field>
        </Form>
        `}</pre>
        <Form onSubmit={onSubmit}>
          <Field placeholder="Freddie Fresh">Name</Field>
          <Field type="email">Email</Field>
          <Field type="password">Password</Field>
          <Field type="tags">Tags</Field>
          <Field type="number">Number</Field>
          <Field required type="select" options={options}>
            Type
          </Field>
          <Field type="textarea">Text Area</Field>
          <Field type="markdown">Markdown</Field>
          <Field type="toggle">Toggle</Field>
          <Field type="reference" options={refOptions} displayProperty="text">
            Reference
          </Field>
        </Form>
      </div>
    </div>
  )
}

export default App
