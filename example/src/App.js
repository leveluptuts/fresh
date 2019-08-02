import React from 'react'
import styled from 'styled-components'
import { Form, Field } from '@leveluptuts/fresh'

const options = ['prerelease', 'active', 'retired', 'hidden']

const App = () => {
  // The on submit function is passed a data object with form data
  const onSubmit = ({ data }) => {
    // console.log(data)
  }

  return (
    <Main>
      <h1>
        YO That's
        <br />
        Fresh
      </h1>
      <h3>Interplanetary Forms</h3>

      <FormWrapper>
        <Form onSubmit={onSubmit}>
          <Field>Name</Field>
          <Field type='email'>Email</Field>
          <Field type='password'>Password</Field>
          <Field type='tags'>Tags</Field>
          <Field type='number'>Number</Field>
          <Field required type='select' options={options}>
            Type
          </Field>
          <Field type='textarea'>Text Area</Field>
          <Field type='markdown'>Markdown</Field>
          <Field type='toggle'>Toggle</Field>
        </Form>
      </FormWrapper>
    </Main>
  )
}

const Main = styled.div`
  padding: 40px;
`
const FormWrapper = styled.div`
  padding: 40px;
  background: white;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export default App
