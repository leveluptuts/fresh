import React, { Component } from 'react';
import { Form, Field } from 'fresh-forms';

const options = ['prerelease', 'active', 'retired', 'hidden'];

const App = () => {
  // The on submit function is passed a data object with form data
  const onSubmit = ({ data }) => {
    console.log(data);
  };

  return (
    <div>
      <h1>YO That's Fresh</h1>
      <Form onSubmit={onSubmit}>
        <Field required>Name</Field>
        <Field type="email">Email</Field>
        <Field type="password">Password</Field>
        <Field type="number">Number</Field>
        <Field required type="select" options={options}>
          Type
        </Field>
      </Form>
    </div>
  );
};

export default App;
