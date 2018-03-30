import React, {Component} from "react"
import {reduxForm, Field} from "redux-form"

export class HouseHoldForm extends React.Component {
  onSubmit(name) {
    console.log(name)
  }
  render() {
    return (
      <form>
        <Field />
        <Field name="colorSelect" component="select">
          <option></option>
          <option value="#ff0000">Red</option>
          <option value="#00ff00">Green</option>
          <option value="#0000ff">Blue</option>
        </Field>
      </form>
    )
  }
}

export default HouseHoldForm;
