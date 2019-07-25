import React, { Component } from 'react';

import { Form, Field } from 'fresh-forms';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form>
          <Field>Name</Field>
        </Form>
      </div>
    );
  }
}
