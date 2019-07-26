import React, { Component } from 'react';
import { Form, Field } from 'fresh-forms';

const options = ['prerelease', 'active', 'retired', 'hidden'];

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>YO That's Fresh</h1>
        <Form onSubmit={() => {}}>
          <Field>Name</Field>
          <Field type="number">Number</Field>
          <Field type="select" options={options}>
            Type
          </Field>
        </Form>
      </div>
    );
  }
}
